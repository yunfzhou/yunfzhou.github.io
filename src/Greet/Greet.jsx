import React, {Component} from "react";
import { Avatar } from "antd";

import Utils from "../utils.js";
import { NAV_OPTION } from "../constants.js";
import "./Greet.css";

export default class Greet extends Component {
  constructor(props) {
    super(props);
    this.myemail = {
      site: "mailto:yf.zhou@zju.edu.cn",
      name: "yf.zhou@zju.edu.cn",
    };
    this.mygit = {
      site: "https://github.com/yunfzhou",
      name: "My Github"
    };
    this.mytwitter = {
      site: "https://twitter.com/yunf_zhou",
      name: "My Twitter"
    }
  }

  render() {
    const rootId = NAV_OPTION.ABOUT;
    return <div className="greet" id={rootId}>
      <div className="intro-image-wrapper">
        <Avatar src="/aboutme/self.png" shape="circle" size={130} className="intro-image"></Avatar>
      </div>
      <div className="postcard">
        <div className="postcard-text">
          <span className="postcard-firstline">
            Nice to meet you! I'm <span className="h1-bg">Yunfan Zhou</span>
          </span>
          &nbsp;&nbsp;
          (<span className="postcard-firstline-chinese">周云帆</span>)
        </div>
        <div className="postcard-text">
          <span className="postcard-secondline">CS PhD Student @ Zhejiang University</span>
        </div>
        <div className="postcard-text">
          <span className="postcard-thirdline">Data Visualization | Human-Computer Interaction | Data Wrangling</span>
        </div>
        <div className="intro-contact-bar">
          <img src="/icons/mail.svg" className="intro-contact-icon"
               onClick={Utils.clickCallBack(this.myemail.site)}/>
          <img src="/icons/github.svg" className="intro-contact-icon"
               onClick={Utils.clickCallBack(this.mygit.site)}/>
          <img src="/icons/twitter.svg" className="intro-contact-icon"
               onClick={Utils.clickCallBack(this.mytwitter.site)}/>
        </div>
      </div>
    </div>
  }
}