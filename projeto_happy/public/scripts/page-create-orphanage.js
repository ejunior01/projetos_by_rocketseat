// Create map
const map = L.map("mapid").setView([-23.6936238, -46.6415725], 15);

//Create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('input[name="lat"]').value = lat;
  document.querySelector('input[name="lng"]').value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Contar quantidade de caracteres no campo about

const aboutTextarea = document.querySelector("#about");
const textMaxCaracteres = document.querySelector("label[for='about'] span");

function maxTextAbout() {
  if (aboutTextarea.value == "") {
    textMaxCaracteres.innerHTML = "Máximo de 300 caracteres";
  } else {
    let valueAbout = aboutTextarea.value.length;
    textMaxCaracteres.innerHTML = `Total de caracteres restantes: ${
      300 - valueAbout
    }`;
  }
}

aboutTextarea.addEventListener("input", maxTextAbout);

/* toogle campo apagar Search*/

const inputImg = document.querySelector(".new-upload input");
const spanClear = document.querySelector(".new-upload span");

inputImg.addEventListener("input", () => {
  spanClear.classList.add("active");
});
