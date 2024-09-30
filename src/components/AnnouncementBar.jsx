import { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncementBarItem from "./AnnouncementBarItem";
import { announcementBarItemsArray } from "../constants";
import axios from "axios";

const AnnouncementBar = ({ isScrolled }) => {
  const [announcementBarItems, setAnnouncementBarItems] = useState([]);

  useEffect(() => {
    const fetchAnnouncementBar = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/announcements`,
        );
        setAnnouncementBarItems(response.data);
      } catch (error) {
        console.error("Error fetching Announcement Bar:", error);
      } finally {
      }
    };
    fetchAnnouncementBar();
  }, []);

  return (
    <>
      {announcementBarItems.length > 0 && (
        <div
          className={`bg-primary-500 py-2 text-white ${isScrolled ? "h-0 max-h-0" : "h-auto max-h-10"}`}
          id="announcement_bar"
        >
          <SlideShow
            arrows={false}
            autoplay={true}
            autoplaySpeed={5000}
            fade={false}
          >
            {announcementBarItems.map((item, index) => (
              <div key={item.announcementid}>
                <AnnouncementBarItem item={item} />
              </div>
            ))}
          </SlideShow>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
