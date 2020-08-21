import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { config } from './config';
import HomePage from './pages/HomePage';
import { GeoTracker } from './components/GeoTracker';
import { InTheZone } from './components/InTheZone';

import london from './data/london.json';
import { Hamburger } from './components/Hamburger';
import { Sidebar } from './components/Sidebar'; // TODO: use api

const zone = london;//.map(([lat, lon]) => ([lon, lat]));

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: config.defaultPosition,
      sidebarVisible: false,
    }
  }

  onNewPosition = position => {
    this.setState({ position });
  }

  onClickHamburger = () => {
    this.setState({ sidebarVisible: true });
  }

  onSidebarClose = () => {
    this.setState({ sidebarVisible: false });
  }

  render() {
    const { position, sidebarVisible } = this.state;
    const homeProps = {
      position, zone, sidebarVisible, onSidebarClose: this.onSidebarClose,
    };
    const sidebarStatus = sidebarVisible ? '' : 'hidden';
    console.log('sidebarStatus', sidebarStatus);
    return (
      <>
        <Router>
          <nav>
            <ul>
              <li><Hamburger onClick={this.onClickHamburger} /></li>
              <li><Link to="/">La Zona</Link></li>
              <li className='inthezone'><InTheZone position={position} zone={zone} /></li>
              <li className='geotracker'><GeoTracker defaultPosition={position} onNewPosition={this.onNewPosition} /></li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/">
                <HomePage {...homeProps} />
              </Route>
            </Switch>
          </main>
          <Sidebar className={`sidebar sidebar-${sidebarStatus}`} onClose={this.onSidebarClose} />
        </Router>
      </>
    );
  }
}

export default App;
