import React, {Component} from "react";
import {Row, Col, Divider} from "antd";

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
          `Our paper \"Interactive Table Synthesis with Natural Language\" got accepted by ${STRSEP}!`, 
          ["TVCG", "https://doi.org/10.1109/TVCG.2023.3329120"]
        )
      },
      // {
      //   time: "2023.09",
      //   content: Utils.createLinkedPara(
      //     ``
      //   )
      // },
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
      const h_gutter = 50;
      const v_gutter = 0;
      return <Row key={renderID} gutter={[h_gutter, v_gutter]} className="one-news">
        <Col flex="0 0 auto" className="one-news-time">{time}</Col>
        {this.listContent(content)}
      </Row>
    });
  }

  render() {
    return <div className="news">
      <Divider />
      <div className="news-title">
        <span className="h1-bg">{NAV_OPTION.NEWS}</span>
      </div>
      <div className="news-list">
        {this.listNews()}
      </div>
    </div>
  }
}