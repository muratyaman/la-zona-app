import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { config } from './config';
import ZonePage from './pages/ZonePage';
import HomePage from './pages/HomePage';
import { GeoTracker } from './components/GeoTracker';
import { InTheZone } from './components/InTheZone';

import london from './data/london.json'; // TODO: use api

const zone = london;//.map(([lat, lon]) => ([lon, lat]));

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: config.defaultPosition,
    }
  }

  onNewPosition = position => {
    this.setState({ position });
  }

  render() {
    const { position } = this.state;
    return (
      <>
        <Router>
            <nav>
              <ul>
                <li><Link to="/">La Zona</Link></li>
                <li><Link to="/zone">Zone</Link></li>
                <li className='inthezone'><InTheZone position={position} zone={zone} /></li>
                <li className='geotracker'><GeoTracker defaultPosition={position} onNewPosition={this.onNewPosition} /></li>
              </ul>
            </nav>
            <main>
              <Switch>
                <Route path="/zone"><ZonePage position={position} zone={zone} /></Route>
                <Route path="/"><HomePage /></Route>
              </Switch>
            </main>
        </Router>
      </>
    );
  }
}

export default App;
