import React from 'react';

export class GeoTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { ...props.defaultPosition },
      error: null,
    };
    this.watchId = null;
  }

  // @see https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
  onSuccess = (position) => {
    console.info('GeoTracker.onSuccess', position);
    this.setState({
      position,
    });
    const { onNewPosition } = this.props;
    if (onNewPosition && (typeof onNewPosition === 'function')) {
      onNewPosition(position);
    }
  }

  // @see https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError
  onError = (error) => {
    console.error('GeoTracker.onError', error);
    this.setState({
      error,
    });
  }

  componentDidMount() {
    if (navigator.geolocation) {
      // @see https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
      const options = {
        enableHighAccuracy: true,
        timeout:            15 * 1000, // default is Infinity
        maximumAge:         15 * 1000, // default is 0; 0: use no cache, Infinity: use cache
      };
      this.watchId = navigator.geolocation.watchPosition(
        this.onSuccess,
        this.onError,
        options,
      );
    }
  }

  componentWillUnmount() {
    if (navigator.geolocation && this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  render() {
    let { longitude  = null, latitude = null } = this.state.position.coords;
    if (longitude !== null) longitude = Math.round(longitude * 10000) / 10000;
    if (latitude !== null) latitude = Math.round(latitude * 10000) / 10000;
    return (
      <i>({latitude}, {longitude})</i>
    );
  }
}