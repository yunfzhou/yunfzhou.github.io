import React, {Component} from "react";
import {Row, Col, Divider} from "antd";

import PeopleJson from "../db/people.json";
import institutesJson from "../db/institutes.json";
import { STRSEP, NAV_OPTION, NAV_OPTION_U } from "../constants.js";
import Utils from "../utils.js";
import "./News.css";

const { people } = PeopleJson;
const { hmqu, ycwu, dweng } = people;

const { institutes } = institutesJson;
const { vislab, zjuidg, hkust } = institutes;

export default class News extends Component {
  constructor(props) {
    super(props);
    const news = [
      this.createANews("2025.07", `Our paper "ViseGPT: Towards Better Alignment of LLM-generated Data Wrangling Scripts and User Prompts" has been accepted by ${STRSEP}!`,
        ["ACM UIST 2025", "https://doi.org/10.1145/3746059.3747689"],
      ),
      this.createANews("2025.06", `We have released Xavier on ${STRSEP} and ${STRSEP}!`,
        ["GitHub", "https://github.com/CHI25-Xavier/Xavier"],
        ["PyPI", "https://pypi.org/project/idgxavier/"]
      ),
      this.createANews("2025.04", `I presented my paper "Xavier: Toward Better Coding Assistance in Authoring Tabular Data Wrangling Scripts" at ${STRSEP}!`,
        ["ACM CHI 2025", "https://programs.sigchi.org/chi/2025/program/content/188471"]
      ),
      this.createANews("2024.06", `I graduated from Zhejiang University (B.Eng. in Computer Science and Technology)!`),
      this.createANews("2023.10", 
        `Our paper "Interactive Table Synthesis with Natural Language" got accepted by ${STRSEP}!`,
        ["IEEE TVCG", "https://doi.org/10.1109/TVCG.2023.3329120"]
      ),
      // this.createANews("2023.09",
      //   `I passed the interview of PhD application for ${STRSEP}! I became a "year-zero" PhD student supervised by Prof. ${STRSEP} and Prof. ${STRSEP}.`,
      //   [zjuidg.name, zjuidg.site],
      //   [ycwu.name, ycwu.site],
      //   [dweng.name, dweng.site]
      // ),
      this.createANews("2023.09",
        `I started my five-month internship study under the supervision of Prof. ${STRSEP} in ${STRSEP}, Hong Kong University of Science and Technology (${STRSEP}).`,
        [hmqu.name, hmqu.site],
        [vislab.name, vislab.site],
        [hkust.name, hkust.site]
      ),
      // this.createANews("2022.11", `I was awarded Scholarship of Zhejiang Provincial Government for the second time!`),
      this.createANews("2022.08",
        `I started my internship study in ${STRSEP}, supervised by Prof. ${STRSEP}.`,
        [zjuidg.name, zjuidg.site],
        [ycwu.name, ycwu.site]
      ),
    ];
    this.addKey(news);
    this.state = {
      news,
    };
  }

  createANews(time, text, ...links) {
    return {time, content: Utils.createLinkedPara(text, ...links)};
  }

  addKey(list) {
    for(let i = 0; i < list.length; i++) {
      list[i].renderID = Utils.myNanoid();
    }
  }

  listContent(cList) {
    return <Col flex="1 1 auto" className="one-news-content">
      {cList.map((c) => {
        if(c.link) {
          return <a key={c.renderID} href={c.link}>{c.text}</a>
        } else {
          return <span key={c.renderID}>{c.text}</span>
        }
      })}
    </Col>
  }

  listNews() {
    return this.state.news.map((v) => {
      const {time, content, renderID} = v;
      const h_gutter = 50;
      const v_gutter = 0;
      return <Row key={renderID} gutter={[h_gutter, v_gutter]} className="one-news">
        <Col flex="0 0 auto" className="one-news-time">{time}</Col>
        {this.listContent(content)}
      </Row>
    });
  }

  render() {
    const rootId = NAV_OPTION.NEWS;
    return <div className="news" id={rootId}>
      <Divider />
      <div className="news-title">
        <span className="h1-bg">{NAV_OPTION_U.NEWS}</span>
      </div>
      <div className="news-list">
        {this.listNews()}
      </div>
    </div>
  }
}