import React, { useState, Component, createRef } from 'react';

import { NAV_OPTION } from './constants.js';
import Nav from './Nav/Nav.jsx';
import Greet from './Greet/Greet.jsx';
import Intro from './Intro/Intro.jsx';
import News from './News/News.jsx';
import Publication from "./Publication/Publication.jsx";
import CV from './CV/CV.jsx';
import CopyRight from './CopyRight/CopyRight.jsx';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: NAV_OPTION.ABOUT,
    };
    this.setCurrentItem = this.setCurrentItem.bind(this);
  }

  setCurrentItem(cur) {
    const splitres = window.location.href.split("#");
    if(splitres.length === 1) {
      window.location.href = splitres[0] + `#${cur.toLowerCase()}`;
    } else {
      splitres.pop();
      window.location.href = splitres.join("#") + `#${cur.toLowerCase()}`;
    }
    this.setState({currentItem: cur.toLowerCase()});
  }

  render() {
    return (
      <>
        <Nav currentItem={this.state.currentItem} setCurrentItem={this.setCurrentItem} />
        {
          (this.state.currentItem !== NAV_OPTION.CV) ? 
          (<div className="main-container1">
            <Greet />
            <Intro />
            <News />
            <Publication />
            <CopyRight />
          </div>) :
          (<div className="main-container2">
            <CV />
          </div>)
        }
      </>
    )
  }
}