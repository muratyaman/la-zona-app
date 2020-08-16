import React from 'react';
import {  config } from '../config';

export const GeoLocationContext = React.createContext({
  position: config.defaultPosition,
  error: null,
});

GeoLocationContext.displayName = 'GeoLocationContext';
