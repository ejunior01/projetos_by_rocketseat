import database from "./database/db.js";
import createProffy from "./database/createProffy.js";

import {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
} from "./database/utils/format.js";

function pageLanding(req, res) {
  return res.render("index");
}

async function pageStudy(req, res) {
  const filters = req.query;

  if (!filters.subject || !filters.weekday || !filters.time) {
    return res.render("study", { filters, subjects, weekdays });
  }

  const timeToMinutes = convertHoursToMinutes(filters.time);

  const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = ${filters.subject}
        `;
  try {
    const db = await database;
    const proffys = await db.all(query);

    proffys.map((proffy) => {
      proffy.subject = getSubject(proffy.subject);
    });

    return res.render("study", { proffys, filters, subjects, weekdays });
  } catch (error) {
    console.log(error);
  }
}

function pageGiveClass(req, res) {
  return res.render("give-classes", { subjects, weekdays });
}

async function saveClasses(req, res) {
  const proffyValue = {
    name: req.body.name,
    avatar: req.body.avatar,
    whatsapp: req.body.whatsapp,
    bio: req.body.bio,
  };

  const classeValue = {
    subject: req.body.subject,
    cost: req.body.cost,
  };

  const classScheduleValues = req.body.weekday.map((weekday, index) => {
    return {
      weekday,
      time_from: convertHoursToMinutes(req.body.time_from[index]),
      time_to: convertHoursToMinutes(req.body.time_to[index]),
    };
  });

  try {
    const db = await database;
    await createProffy(db, { proffyValue, classeValue, classScheduleValues });

    let queryString = "?subject=" + req.body.subject;
    queryString += "&weekday=" + req.body.weekday[0];
    queryString += "&time=" + req.body.time_from[0];

    return res.redirect("/study" + queryString);
  } catch (error) {
    console.log(error);
  }
}

export { pageLanding, pageStudy, pageGiveClass, saveClasses };
