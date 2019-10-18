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
  subtle: "rgb(88, 135, 251)",
  height: "100%",

  //font
  primaryFont: fontFamily([
    "Montserrat",
    "Calibri",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ]),
  fontSizeSmall: "80%",

  //avatar
  botAvatarImage: logo,
  botAvatarBackgroundColor: "rgb(40, 150, 68)",
  avatarSize: 30,

  //root
  rootHeight: "100%"
};

export default WEB_CHAT_STYLE;