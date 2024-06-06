import express from "express";
import nunjucks from "nunjucks";
import { pageGiveClass, pageLanding, pageStudy, saveClasses } from "./pages.js";

const server = express();

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
  autoescape: false,
});

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .set("view engine", "njk")
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClass)
  .post("/save-classes", saveClasses)
  .listen(5000, function () {
    console.log("Server is running");
  });
