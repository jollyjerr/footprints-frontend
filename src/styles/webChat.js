import logo from '../assets/footprint.png'

function fontFamily(fonts) {
  return fonts.map(font => `'${font}'`).join(', ');
}

const WEB_CHAT_STYLE = {
  //color and padding
  backgroundColor: "rgb(230, 229, 230)",
  accent: "rgb(88, 135, 251)",
  paddingRegular: 10,
  paddingWide: 20,

  //font
  primaryFont: fontFamily(["Calibri", "Helvetica Neue", "Arial", "sans-serif"]),
  fontSizeSmall: "80%",

  //avatar
  botAvatarImage: logo,
  avatarSize: 30
};

export default WEB_CHAT_STYLE;