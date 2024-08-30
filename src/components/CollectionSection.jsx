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
    <>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 flex h-full w-screen flex-row flex-wrap lg:flex-nowrap">
        {collectionItems?.map((item, index) => (
          <div className="relative flex w-1/2 lg:w-full" key={index}>
            <Image
              imgSrc={item.img_src}
              className={"w-full"}
              text={item.text}
              objectFit="object-cover"
              btnUrlTarget={item.href}
              ratio={"aspect-card"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CollectionSection;
