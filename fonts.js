import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./public/fonts/Raleway/Raleway-Regular.ttf') format('ttf');
      }
      /* latin */
      @font-face {
        font-family: 'Raleway';
        font-style: bold;
        font-weight: 900;
        font-display: swap;
        ssrc: url('./public/fonts/Raleway/Raleway-ExtraBold.ttf') format('ttf');
      }
      `}
  />
);
export default Fonts;