import { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";
import axios from "axios";
import { collectionItems } from "../constants";

const CollectionSection = ({}) => {
  // const [collections, setCollection] = useState([]); // State to store the collection data
  // const [loading, setLoading] = useState(true); // State to manage loading state
  // const [error, setError] = useState(null); // State to handle errors
  // useEffect(() => {
  //   const fetchCollections = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://localhost:8000/collectionItems`,
  //       );
  //       setCollection(response.data); // Set the fetched data to the collection state
  //     } catch (error) {
  //       setError(error.response ? error.response.data.message : error.message); // Handle any errors
  //     } finally {
  //       setLoading(false); // Set loading to false after the request completes
  //     }
  //   };

  //   // Call the fetch function
  //   fetchCollections();
  // }, []);
  return (
    <div className="mb-10">
      <div className="flex items-center justify-center gap-3">
        {collectionItems?.map((item, index) => (
          <div className="relative flex" key={index}>
            <Image
              imgSrc={item.img_src}
              ratio={"aspect-card"}
              text={item.text}
              objectFit="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
