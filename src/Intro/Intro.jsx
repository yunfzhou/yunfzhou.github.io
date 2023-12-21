import React, {Component} from "react";

import peopleJson from "../db/people.json";
import "./Intro.css"

export default class Intro extends Component {
  constructor(props) {
    super(props);
    // this.mixClass = {
    //   site: "http://ckc.zju.edu.cn/ckcen/2022/0225/c44633a2500659/page.htm",
    //   name: "The Mixed Class",
    // };
    this.ckc = {
      site: "http://ckc.zju.edu.cn/ckcen/wbout/list.htm",
      name: "CKC"
    };
    this.cs = {
      site: "http://www.en.cs.zju.edu.cn/",
      name: "College of Computer Science and Technology"
    }
    this.zju = {
      site: "https://www.zju.edu.cn/english/",
      name: "ZJU"
    };
    this.zjuidg = {
      site: "https://zjuidg.org/",
      name: "ZJUIDG",
    };
    this.ycwu = peopleJson.people.ycwu;
    this.dweng = peopleJson.people.dweng;
    this.vislab = {
      site: "http://vis.cse.ust.hk/index.html",
      name: "VisLab"
    };
    this.hmqu = peopleJson.people.hmqu;
    this.firstpaper = {
      site: "https://doi.org/10.19655/j.cnki.1005-4642.2023.03.002",
      name: "paper"
    };
    this.ywhuang = peopleJson.people.ywhuang;
    this.shliu = peopleJson.people.shliu;
  }

  render() {
    return <div className="intro-wrapper">
      <div className="intro-text-wrapper">
        <p>
        Welcome to visit my site!

        I'm currently a final-year undergraduate student in {this.cs.name}, and Chu Kochen Honors College (<a href={this.ckc.site}>{this.ckc.name}</a>) in Zhejiang University (<a href={this.zju.site}>{this.zju.name}</a>).
        
        I'm an incoming PhD student in Interactive Data Group, Zhejiang University (<a href={this.zjuidg.site}>{this.zjuidg.name}</a>) in 2024 fall, under the joint supervision of Prof. <a href={this.ycwu.site}>{this.ycwu.name}</a> and Prof. <a href={this.dweng.site}>{this.dweng.name}</a>.
        
        I'm now also a visiting internship student in <a href={this.vislab.site}>{this.vislab.name}</a>, Hong Kong University of Science and Technology (HKUST), supervised by Prof. <a href={this.hmqu.site}>{this.hmqu.name}</a>.
        </p>
        <p>
        During the last year I was fortunate to have opportunities of internship study in ZJUIDG and worked closely with <a href={this.shliu.site}>{this.shliu.name}</a> and <a href={this.ywhuang.site}>{this.ywhuang.name}</a>, supervised by Prof. {this.ycwu.name}.
        
        In 2021, supervised by Prof. Yuan Zheng in School of Physics, Zhejiang University, I worked with two schoolmates to explore experimental data collection utilizing Convolutional Neural Network, which was my first {this.firstpaper.name} submission.
        </p>
        <p>
        Now my research interest is data visualization and interactive data wrangling.
        </p>
      </div>
    </div>
  }
}
