import {customAlphabet} from "nanoid";
import { STRSEP } from "./constants.js";

const _nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 30);

const myNanoid = (len) => {
  return _nanoid(len);
};

const clickCallBack = (link) => {
  return () => {
    window.open(link, "_blank");
  };
};

const createLinkedPara = (fstr, ...args) => {
  const fstrList = fstr.split(STRSEP);
  if(fstrList.length !== args.length + 1) {
    throw Error("[createLinkedPara] Error: string mismatched.");
  }
  const res = [];
  fstrList.forEach((s, i, a) => {
    res.push({
      renderID: myNanoid(),
      text: s,
      link: null
    });
    if(i < a.length - 1) {
      res.push({
        renderID: myNanoid(),
        text: args[i][0],
        link: args[i][1],
      });
    }
  });
  return res;
};

export default {
  myNanoid, clickCallBack, createLinkedPara
}