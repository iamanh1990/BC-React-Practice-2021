import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox.styles.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWFtYW5oIiwiYSI6ImNrbjR2b2Q1ZTBhdWgydm9mOTY2azV3d3kifQ.38V8156UvgSpmG2pYFKQLw';

const Map = (props) => {
  const { coordinates, zoom } = props;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/iamanh/ckn4vyzps021i17nzkb2a1z3u',
      center: [coordinates.lng, coordinates.lat],
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map);
  }, [coordinates, zoom]);

  return (
    <div
      id='map'
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
