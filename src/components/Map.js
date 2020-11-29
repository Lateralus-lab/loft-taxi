import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibGF0ZXJhbHV6IiwiYSI6ImNraTNjamR3MzFtcWczNG9hNHgyM2hpN24ifQ.BtoSnjdsU_mvncszvjL-qQ';

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-0.118092, 51.509865],
        zoom: 10,
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div className="map-wrapper">
      <div
        className="map"
        data-testid="map"
        ref={(el) => (mapContainer.current = el)}
      />
    </div>
  );
};

export default Map;
