const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Create map
const map = L.map("mapid", options).setView([-23.6936238, -46.6415725], 15);

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
  popupAnchor: [155, 10],
});

// create and add marker
L.marker([-23.6936238, -46.6415725], { icon }).addTo(map);

// image gallery

function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  imageContainer.src = image.src;
  button.classList.add("active");
}
