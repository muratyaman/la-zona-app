// Royal Air Force Memorial
const defaultPosition = {
  coords: {
    longitude: -0.1235005,
    latitude:  51.5040432,
  },
}

export const config = {
  defaultPosition,
  map: {
    factorySettings: {
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      // minZoom: 0,
      // maxZoom: 20,
      interactive: false,
      trackResize: true,
    },
    componentDefaultProps: {
      center: [ defaultPosition.coords.longitude, defaultPosition.coords.latitude ],
      zoom: [ 13 ],  // Default: [ 11 ]
      // pitch: [ 30 ], // Pitch (tilt) of the map at initialisation, range : 0 - 60
    },
  },
};

