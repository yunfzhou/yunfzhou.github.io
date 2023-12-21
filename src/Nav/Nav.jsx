import React, {Component} from "react";
import { Menu, Anchor } from "antd";

import { NAV_OPTION } from "../constants.js";
import "./Nav.css"

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: [
        {
          // label: <span>About</span>,
          label: NAV_OPTION.ABOUT,
          key: NAV_OPTION.ABOUT,
          // href: "#about",
          // title: 'About',
          className: "nav-menu-li" //Maybe only set the first element's className it will work
        },
        {
          // label: <span>Publication</span>,
          label: NAV_OPTION.PUBLICATION,
          key: NAV_OPTION.PUBLICATION,
          // href: "#publication",
          // title: 'Publication',
          className: "nav-menu-li"
        },
        {
          // label: <span>CV</span>,
          label: NAV_OPTION.CV,
          key: NAV_OPTION.CV,
          // href: "#cv",
          // title: 'CV',
          className: "nav-menu-li"
        },
      ]
    };
    this.defaultItem = NAV_OPTION.ABOUT;
    this.onNavSelect = this.onNavSelect.bind(this);
  }

  get displayItems() {
    //because "float" style will reverse the items
    return this.state.menuItem.slice();
  }

  onNavSelect(e) {
    const {key} = e;
    this.props.setCurrentItem(key);
  }

  render() {
    return <div className="nav">
      <div className="nav-edge1"></div>
      <div className="nav-edge2"></div>
      <div className="nav-menu-wrapper">
        <div className="nav-myname-wrapper">
          <div className="nav-myname">Yunfan Zhou</div>
        </div>
        {/* <Anchor items={this.displayItems} direction="horizontal" className="nav-menu-anchor"/> */}
        <Menu items={this.displayItems} mode="horizontal" className="nav-menu" defaultSelectedKeys={[this.defaultItem]} onSelect={this.onNavSelect} />
      </div>
      
    </div>
  }
}