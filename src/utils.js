import {customAlphabet} from "nanoid";

const _nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 30);

const myNanoid = (len) => {
  return _nanoid(len);
};

const clickCallBack = (link) => {
  return () => {
    window.open(link, "_blank");
  };
}

export default {
  myNanoid, clickCallBack
}