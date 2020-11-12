//Create map
const map = L.map("mapid").setView([-27.2132517, -49.6385054], 15);

//Create and add tilerlayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//Add all markers in map
function addMarker({id, name, lat, lng}) {

      //Create popup overlay
    const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minheight: 240,
    }).setContent(
      `<span>${name}</span> <a href="/orphanage?id=${id}" <img src="../images/arrow-white.svg"> </a>`
    );

    L.marker([lat, lng], { icon: icon })
    .addTo(map)
    .bindPopup(popup);

}

//Invoque span to add marker
const allSpan = document.querySelectorAll('.orphanages span');
allSpan.forEach(span => {
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng
    }

    addMarker(orphanage);
});

