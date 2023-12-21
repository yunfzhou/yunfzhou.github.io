import React, {Component} from "react";
import {Row, Col} from "antd";

import paperJson from "../db/papers.json";
import peopleJson from "../db/people.json";
import {NAV_OPTION, LIST_OP, ME} from "../constants.js";
import Utils from "../utils.js";
import "./Publication.css"

export default class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: this.addKey(paperJson.papers),
      listOp: LIST_OP.BY_DATE
    };
    this.teaserRootPath = "/teasers/";
    this.listPaper = this.listPaper.bind(this);
    this.listAuthors = this.listAuthors.bind(this);
  }

  addKey(list) {
    return list.map(v => {
      const {authorID, ...others} = v;
      return {
        ...others,
        authorID: authorID.map(vv => {
          return {id: vv, renderID: Utils.myNanoid(30)};
        }),
        renderID: Utils.myNanoid(30)
      }
    })
  }

  handleMe(auId, i, list) {
    const comma = ", ";
    if(auId.id !== ME.id) {
      return null;
    }

    if(i < list.length - 1) {
      return <span key={auId.renderID} >
        <span className="author-me">{ME.name}</span>
        <span>{comma}</span>
      </span>;
    } else {
      return <span key={auId.renderID} className="author-me">{ME.name}</span>;
    }
  }

  listAuthors(auId, i, list) {
    const resBlock = this.handleMe(auId, i, list);
    if(resBlock) return resBlock;

    let res = auId.id;
    const obj = peopleJson.people[res];
    if(obj) {
      res = obj.name;
    }
    if(i < list.length - 1) {
      res += ", "
    }

    if(obj) {
      return <span key={auId.renderID} onClick={Utils.clickCallBack(obj.site)}
                   className="author-haslink">{res}</span>
    } else {
      return <span key={auId.renderID}>{res}</span>
    }
  }

  showPaperLink(link) {
    if(!link) return null;
    return <div className="paper-link" onClick={Utils.clickCallBack(link)}>
      <span>{"[ "}</span>
      <img src="/icons/paperLink.svg" className="useful-link-icon"/>
      <span>{"Paper ]"}</span>
    </div>
  }

  listPaper(p) {
    if(this.state.listOp === LIST_OP.BY_DATE) {
      return <Row key={p.renderID} gutter={[50, 25]} className="paper">
        <Col flex="0 0 auto" className="paper-img-wrapper">
          <img className="paper-img" src={this.teaserRootPath + p.teaserName} alt={p.teaserName} />
        </Col>
        <Col flex="1 1 auto" className="paper-info-wrapper">
          <div className="paper-title">
            {p.documentTitle}
          </div>
          <div className="paper-author-list">
            {p.authorID.map(this.listAuthors)}
          </div>
          <div className="paper-publication-title">
            <span>{p.publicationTitle + ", "}</span>
            <span>{p.year}</span>
          </div>
          <div className="useful-links">
            {this.showPaperLink(p.paperLink)}
          </div>
        </Col>
      </Row>
    } else {
      throw Error("Unknown list option.");
    }
  }

  render() {
    return <div className="publication" id="publication">
      <div className="publication-title">{NAV_OPTION.PUBLICATION}</div>
      <div className="publication-paperlist">
        {this.state.papers.map(this.listPaper)}
      </div>
    </div>  
  }
};