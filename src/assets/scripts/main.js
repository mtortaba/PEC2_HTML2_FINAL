/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

//import "bootstrap";

(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

import L from "leaflet";

// Inicializar el mapa
const map = L.map("map").setView([40.416775, -3.70379], 13); // Coordenadas del evento (Madrid)

// Añadir capa base al mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

/* Añadir un marcador */
L.marker([40.416775, -3.70379])
  .addTo(map)
  .bindPopup("Ubicación del evento en Madrid");
