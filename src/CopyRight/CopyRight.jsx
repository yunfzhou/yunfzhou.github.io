import React, {Component} from "react";
import { Divider } from "antd";

import "./CopyRight.css";
import Utils from "../utils.js";
import PeopleJson from "../db/people.json";

export default class CopyRight extends Component {
  constructor(props) {
    super(props);
    this.xhshu = PeopleJson.people.xhshu;
  }

  render() {
    return <div className="copyright">
      <Divider className="copyright-divider" />
      <div>This theme was inspired by Prof. <span onClick={Utils.clickCallBack(this.xhshu.site)} className="prof">{this.xhshu.name}</span>. Last modified: 22nd Dec 2023.</div>
      <div>CopyRight © 2023 Yunfan Zhou. All Rights reserved.</div>
    </div>
  }
}