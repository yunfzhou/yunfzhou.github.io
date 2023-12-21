import React, {Component} from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import "./CV.css";

export default function CV(props) {
  const defaultScale = 1; //zoom: 100%
  const workerUrl = "/lib/pdf.worker.min.js";
  const cvURL = "/aboutme/CV_Yunfan_Zhou.pdf";
  const DLP = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [], //remove sidebar at the left
  });

  return <div className="my-cv">
    <Worker workerUrl={workerUrl}>
      <Viewer fileUrl={cvURL} plugins={[DLP]} defaultScale={defaultScale}/>
    </Worker>
  </div>
};