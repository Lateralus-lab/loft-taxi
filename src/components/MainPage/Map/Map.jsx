import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const [map] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibGF0ZXJhbHV6IiwiYSI6ImNraTNjamR3MzFtcWczNG9hNHgyM2hpN24ifQ.BtoSnjdsU_mvncszvjL-qQ';

    const initializeMap = ({ mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [30.3056504, 59.9429126],
        zoom: 12,
      });

      return () => map.remove();
    };

    if (!map) initializeMap({ mapContainer });
  }, [map]);

  return <div data-testid="map" ref={(el) => (mapContainer.current = el)} />;
};

export default Map;
