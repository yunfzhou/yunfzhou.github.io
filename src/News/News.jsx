import React, {Component} from "react";
import {Row, Col} from "antd";

import PeopleJson from "../db/people.json";
import institutesJson from "../db/institutes.json";
import { STRSEP, NAV_OPTION } from "../constants.js";
import Utils from "../utils.js";
import "./News.css";

const { people } = PeopleJson;
const { hmqu } = people;

const { institutes } = institutesJson;
const { vislab } = institutes;

export default class News extends Component {
  constructor(props) {
    super(props);
    const news = [
      {
        time: "2023.10",
        content: Utils.createLinkedPara(
          `Our paper \"${STRSEP}\"got accepted by TVCG!`, 
          ["Interactive Table Synthesis with Natural Language", "https://doi.org/10.1109/TVCG.2023.3329120"]
        )
      },
      {
        time: "2023.09",
        content: Utils.createLinkedPara(
          `I started my 5-month internship study under the supervision of Prof. ${STRSEP} in ${STRSEP}, Hong Kong University of Science and Technology (HKUST).`,
          [hmqu.name, hmqu.site],
          [vislab.name, vislab.site]
        )
      }
    ];
    this.addKey(news);
    this.state = {
      news,
    };
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
      console.log(time, content, renderID);
      return <Row key={renderID} gutter={[50, 25]} className="one-news">
        <Col flex="0 0 auto" className="one-news-time">{time}</Col>
        {this.listContent(content)}
      </Row>
    });
  }

  render() {
    return <div className="news">
      <div className="news-title">{NAV_OPTION.NEWS}</div>
      <div className="news-list">
        {this.listNews()}
      </div>
    </div>
  }
}