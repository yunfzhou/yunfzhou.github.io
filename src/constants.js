const _firstUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

export const NAV_OPTION = {
  ABOUT: "about",
  PUBLICATION: "publication",
  CV: "cv",
  NEWS: "news"
};

export const NAV_OPTION_U = { //U = Upper case
  ABOUT: _firstUpper(NAV_OPTION.ABOUT),
  PUBLICATION: _firstUpper(NAV_OPTION.PUBLICATION),
  CV: NAV_OPTION.CV.toUpperCase(),
  NEWS: _firstUpper(NAV_OPTION.NEWS)
}

export const LIST_OP = {
  BY_DATE: 0,
};

export const ME = {
  name: "Yunfan Zhou",
  id: "yfzhou"
};

export const STRSEP = "$$$";

export const WINDOW_WIDTH_THRES = 660; //window width threshold: 660px