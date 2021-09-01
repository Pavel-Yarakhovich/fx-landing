import React from "react";
import Head from "next/head";

import FACEBOOK_PIXEL from "./facebook/pixel";

const Pixel = ({ name }) => {
  return <Head>{name === "FACEBOOK_PIXEL" && <FACEBOOK_PIXEL />}</Head>;
};

export default Pixel;
