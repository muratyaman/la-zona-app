import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ZoneMap } from '../components/ZoneMap';
import { ContentAbout } from './ContentAbout';

class HomePage extends React.Component {
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
      <div className='page'>
        <div className='map-container'>
          <ZoneMap {...mapProps} />
        </div>
        <Switch>
          <Route path='/about'>
            <ContentAbout />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default HomePage;
