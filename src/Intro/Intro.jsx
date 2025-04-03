import React, {Component} from "react";

import peopleJson from "../db/people.json";
import institutesJson from "../db/institutes.json";
import "./Intro.css"

export default class Intro extends Component {
  constructor(props) {
    super(props);
    // this.mixClass = {
    //   site: "http://ckc.zju.edu.cn/ckcen/2022/0225/c44633a2500659/page.htm",
    //   name: "The Mixed Class",
    // };
    
    this.hmqu = peopleJson.people.hmqu;
    this.ycwu = peopleJson.people.ycwu;
    this.dweng = peopleJson.people.dweng;
    this.ywhuang = peopleJson.people.ywhuang;
    this.shliu = peopleJson.people.shliu;
    this.htli = peopleJson.people.htli;

    this.zju = institutesJson.institutes.zju;
    this.ckc = institutesJson.institutes.ckc;
    this.cst = institutesJson.institutes.cst;
    this.zjuidg = institutesJson.institutes.zjuidg;
    this.vislab = institutesJson.institutes.vislab;
    this.hkust = institutesJson.institutes.hkust;
    
    this.firstpaper = {
      site: "https://doi.org/10.19655/j.cnki.1005-4642.2023.03.002",
      name: "paper"
    };
  }

  introV20231222() {
    return (
      <div className="intro-text-wrapper">
        <p>
        Welcome to visit my site!

        I'm currently a final-year undergraduate student in College of Computer Science and Technology (<a href={this.cst.site}>{this.cst.name}</a>), and Chu Kochen Honors College (<a href={this.ckc.site}>{this.ckc.name}</a>) in Zhejiang University (<a href={this.zju.site}>{this.zju.name}</a>).
        
        I'm an incoming PhD student in Interactive Data Group, Zhejiang University (<a href={this.zjuidg.site}>{this.zjuidg.name}</a>) in 2024 fall, under the joint supervision of Prof. <a href={this.ycwu.site}>{this.ycwu.name}</a> and Prof. <a href={this.dweng.site}>{this.dweng.name}</a>.
        
        I'm now also a visiting internship student in <a href={this.vislab.site}>{this.vislab.name}</a>, Hong Kong University of Science and Technology (<a href={this.hkust.site}>{this.hkust.name}</a>), supervised by Prof. <a href={this.hmqu.site}>{this.hmqu.name}</a>.
        </p>
        <p>
        During the last year I was fortunate to have opportunities of internship study in ZJUIDG and worked closely with <a href={this.shliu.site}>{this.shliu.name}</a> and <a href={this.ywhuang.site}>{this.ywhuang.name}</a>, supervised by Prof. {this.ycwu.name}.
        
        In 2021, supervised by Prof. Yuan Zheng in School of Physics, Zhejiang University, I worked with two schoolmates to explore experimental data collection utilizing Convolutional Neural Network, which was my first {this.firstpaper.name} submission.
        </p>
        <p>
        Now my research interest is data visualization and interactive data wrangling.
        </p>
      </div>
    );
  }

  introV20250402() {
    return (
      <div className="intro-text-wrapper">
        <p>
        Welcome to visit my site!

        I'm currently a first-year PhD student in Interactive Data Group (<a href={this.zjuidg.site}>{this.zjuidg.name}</a>), Zhejiang University (<a href={this.zju.site}>{this.zju.name}</a>), under the joint supervision of Prof. <a href={this.ycwu.site}>{this.ycwu.name}</a> and Prof. <a href={this.dweng.site}>{this.dweng.name}</a>.

        Before that, I received my bachelor's degree in Computer Science and Technology in 2024.
        </p>
        <p>
        Previously, I was fortunate to have opportunities of internship study in <a href={this.vislab.site}>{this.vislab.name}</a>, Hong Kong University of Science and Technology (<a href={this.hkust.site}>{this.hkust.name}</a>), supervised by Prof. <a href={this.hmqu.site}>{this.hmqu.name}</a>.

        There, I met many friends and collaborated with Dr. <a href={this.htli.site}>{this.htli.name}</a> to complete my first submission.

        I also worked closely with Xiwen Cai, <a href={this.shliu.site}>{this.shliu.name}</a>, <a href={this.ywhuang.site}>{this.ywhuang.name}</a> and other exceptional colleagues in ZJUIDG.

        Now my research interest is data visualization and interactive data wrangling.
        </p>
      </div>
    );
  }

  render() {
    return <div className="intro-wrapper">
      {this.introV20250402()}
    </div>
  }
}
