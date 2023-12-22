import React, {Component} from "react";
import { Menu, Anchor } from "antd";

import { NAV_OPTION, NAV_OPTION_U } from "../constants.js";
import "./Nav.css"

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: [
        {
          label: NAV_OPTION_U.ABOUT,
          key: NAV_OPTION.ABOUT,
          className: "nav-menu-li" //Maybe only set the first element's className it will work
        },
        {
          label: NAV_OPTION_U.PUBLICATION,
          key: NAV_OPTION.PUBLICATION,
          className: "nav-menu-li"
        },
        {
          label: NAV_OPTION_U.CV,
          key: NAV_OPTION.CV,
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