import React, { useEffect } from 'react';
import styles from "./maps.module.css";

type MapProps = {
  center: number[];
  zoom: number;
  props: any;
};

export default function Map({center, zoom, ...props}: MapProps) {
  const mapRef = React.useRef(null);
  useEffect(() => {
  if (typeof window !== "undefined") {
    const L = require('leaflet');
      mapRef.current = L.map('map', {
      center: [-1.47296, 36.95898],
      zoom: 18,
      marker: true,
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
              maxZoom: 28,
      }).addTo(mapRef.current);
      L.marker([-1.47296, 36.95898], {alt: 'Kite Institute of Professional studies'}).addTo(mapRef.current).bindPopup('Kite Institute of Professional studies<br> 3rd Floor,2nd Room, next to KCB Bank<br> Kenya, Rift-valley, kajiado Kitengela 5XXXX')
      .openPopup();
      L.circle([-1.47296, 36.95898], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: 50
      }).addTo(mapRef.current);
  }
}, [center, zoom]);

  return(
        <>
          <div id="map" className={styles.maps}>
          </div>;
        </>
        );
}