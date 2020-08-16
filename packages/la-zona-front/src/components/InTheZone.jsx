import React from 'react';
import { geoContains } from 'd3-geo';

export function InTheZone(props) {
  const { position, zone } = props;
  if (!position || !zone) return null; // no need to render anything
  const { coords } = position;
  if (!coords) return null;
  const { longitude, latitude } = coords;
  const myPoint = [longitude, latitude]; // [longitude, latitude] in degrees
  const geoJson = {
    type: 'Polygon',
    coordinates: [ zone ],
  };
  const message = geoContains(geoJson, myPoint) ? 'You are in the zone!' : ' ';
  console.log(myPoint, 'InTheZone', geoJson, 'message', message);
  return (
    <i>{message}</i>
  );
}
