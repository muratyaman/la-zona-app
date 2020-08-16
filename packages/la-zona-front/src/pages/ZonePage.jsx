import React from 'react';
import { ZoneMap } from '../components/ZoneMap';

class ZonePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCenter = () => {
    const { position } = this.props;
    const { longitude, latitude } = position.coords;
    return [longitude, latitude];
  }

  render() {
    const mapProps = {
      style: 'mapbox://styles/mapbox/streets-v9',
      containerStyle: {
        height: '99vh',
        width: '99vw',
      },
      center: this.getCenter(),
      zone: this.props.zone, // custom prop
    }
    return (
      <div className="page page-zone">
        <ZoneMap {...mapProps} />
      </div>
    );
  }
}

export default ZonePage;
