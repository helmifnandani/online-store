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
import Close from "./Icons/icon-close.jsx";
import Menu from "./Icons/icon-menu.jsx";
import Filter from "./Icons/icon-filter.jsx";
import Sort from "./Icons/icon-sort.jsx";
import Whatsapp from "./Icons/icon-whatsapp.jsx";

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
    case "close":
      return <Close {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "sort":
      return <Sort {...props} />;
    case "whatsapp":
      return <Whatsapp {...props} />;
    default:
  }
};

export default Icon;
