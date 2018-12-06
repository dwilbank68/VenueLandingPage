import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/Header.jsx';
import Featured from './components/Featured/Featured.jsx';
import VenueInfo from './components/VenueInfo/VenueInfo.jsx';
import Highlight from './components/Highlights/Highlights.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Location from './components/Location/Location.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div  className="App"
            style={{height:'1500px', background: 'cornflowerblue'}}>
          <Header/>
          <Element name='Featured'><Featured/></Element>
          <Element name='VenueInfo'><VenueInfo/></Element>
          <Element name='Highlight'><Highlight/></Element>
          <Element name='Pricing'><Pricing/></Element>
          <Element name='Location'><Location/></Element>
          <Footer/>
      </div>
    );
  }
}

export default App;
