import { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncementBarItem from "./AnnouncementBarItem";
import { announcementBarItemsArray } from "../constants";

const AnnouncementBar = ({ isScrolled }) => {
  const [announcementBarItems, setAnnouncementBarItems] = useState([]);

  useEffect(() => {
    setAnnouncementBarItems(announcementBarItemsArray);
    console.log(announcementBarItems);
  }, []);
  return (
    <div
      className={`bg-primary-500 py-2 text-white ${isScrolled ? "h-0 max-h-0" : "h-auto max-h-10"}`}
    >
      <SlideShow
        arrows={false}
        autoplay={true}
        autoplaySpeed={5000}
        fade={false}
      >
        {announcementBarItemsArray.map((item, index) => (
          <div key={index}>
            <AnnouncementBarItem item={item} />
          </div>
        ))}
      </SlideShow>
    </div>
  );
};

export default AnnouncementBar;
