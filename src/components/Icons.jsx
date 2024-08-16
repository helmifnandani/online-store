import React from "react";
import Logo from "./Icons/icon-logo.jsx";
import Heart from "./Icons/icon-heart.jsx";
import Profile from "./Icons/icon-profile.jsx";
import Instagram from "./Icons/icon-instagram.jsx";
import ChevronRight from "./Icons/icon-chevron-right.jsx";
import ChevronLeft from "./Icons/icon-chevron-left.jsx";
import Eye from "./Icons/icon-eye.jsx";
import Shopee from "./Icons/icon-shopee.jsx";
import Tokopedia from "./Icons/icon-tokopedia.jsx";

const Icon = (props) => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "profile":
      return <Profile {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "chevron-right":
      return <ChevronRight {...props} />;
    case "chevron-left":
      return <ChevronLeft {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "shopee":
      return <Shopee {...props} />;
    case "tokopedia":
      return <Tokopedia {...props} />;
    default:
      return;
  }
};

export default Icon;
