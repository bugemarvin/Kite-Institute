import React, { useEffect } from 'react';
import styles from "./maps.module.css";

export default function Map({center, zoom, marker, ...props}: {center: number[], zoom: number, marker: boolean, props: {[key: string]: any}}) {
  useEffect(() => {
  if (typeof window !== "undefined") {
    const L = require('leaflet');
      const map = new L.map('map', {
      center: [-1.47296, 36.95898],
      zoom: 18,
      marker: true,
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
              maxZoom: 28,
      }).addTo(map);
      L.marker([-1.47296, 36.95898], {alt: 'Kite Institute of Professional studies'}).addTo(map).bindPopup('Kite Institute of Professional studies<br> 3rd Floor,2nd Room, next to KCB Bank<br> Kenya, Rift-valley, kajiado Kitengela 5XXXX')
      .openPopup();
      L.circle([-1.47296, 36.95898], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: 50
      }).addTo(map);
  }
}, [center, zoom, marker]);

  return(
        <>
          <div id="map" className={styles.maps}>
          </div>;
        </>
        );
}