import React from 'react';
import ReactMapboxGl, { Marker, Source, Layer } from 'react-mapbox-gl';
import { config } from '../config';
import { TargetSvg } from './TargetSvg';

// factory @see: https://github.com/alex3165/react-mapbox-gl/blob/master/docs/API.md
const Mapbox = ReactMapboxGl(config.map.factorySettings);

export function ZoneMap(props) {
  const mapProps = {
    ...config.map.componentDefaultProps,
    ...props,
  };
  const { center, zone } = mapProps;
  let sourceNode = null, layerNode = null;
  if (zone) {
    const geoJson = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [ zone ],
      },
    };
    const sourceProps = {
      id: 'zoneSource',
      type: 'geojson',
      data: geoJson,
    };
    const layerProps = {
      id: 'zoneLayer',
      source: 'zoneSource',
      //data: geoJson,
      type: 'fill',
      layout: {
        //visibility: 'visible',
      },
      paint: {
        'fill-color': '#700',
        'fill-opacity': 0.5,
      },
    };
    sourceNode = <Source {...sourceProps} />;
    layerNode = <Layer {...layerProps} />;
  }
  const markerProps = {
    coordinates: center,
    style: {
      backgroundColor: 'white',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
    },
  }
  return (
    <Mapbox { ...mapProps }>
      <Marker {...markerProps}><TargetSvg /></Marker>
      {sourceNode}
      {layerNode}
    </Mapbox>
  );
}
