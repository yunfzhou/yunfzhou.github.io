import React, {Component} from "react";
import {Avatar} from "antd";

import Utils from "../utils.js";
import "./Greet.css";

export default class Greet extends Component {
  constructor(props) {
    super(props);
    this.myemail = {
      site: "mailto:yunfzhou@zju.edu.cn",
      name: "yunfzhou@zju.edu.cn",
    };
    this.mygit = {
      site: "https://github.com/zyfZD123",
      name: "My Github"
    };
    this.mytwitter = {
      site: "https://twitter.com/yunf_zhou",
      name: "My Twitter"
    }
  }

  render() {
    return <div className="greet" id="about">
      <div className="postcard">
        <div className="postcard-text">
          <span className="postcard-firstline">Nice to meet you! I'm Yunfan Zhou&nbsp;&nbsp;</span>
          <span className="postcard-firstline-chinese">(周云帆)</span>
        </div>
        <div className="postcard-text">
          <span className="postcard-secondline">CS Undergraduate @ Zhejiang University</span>
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
      <div className="intro-image-wrapper">
        <Avatar src="/aboutme/self.png" shape="circle" size={130} className="intro-image"></Avatar>
      </div>
    </div>
  }
}