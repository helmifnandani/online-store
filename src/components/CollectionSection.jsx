import Image from "./Image";
import axios from "axios";
import { collectionItems } from "../constants";
import placeholderImg from "../assets/images/placeholder-image.jpg";

const CollectionSection = ({ categoryList, imgData }) => {
  return (
    <div className="mb-12 lg:mb-14">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex h-full w-screen flex-row flex-wrap lg:flex-nowrap">
        {collectionItems?.map((item, index) => (
          <div className="relative flex w-1/2 lg:w-full" key={index}>
            <Image
              imgSrc={
                imgData.find(
                  (image) =>
                    image.imagetype.split("_")[0] === item.categoryid &&
                    image.imagetype.split("_")[1] === item.categoryname,
                )?.imagepath
                  ? imgData.find(
                      (image) =>
                        image.imagetype.split("_")[0] === item.categoryid &&
                        image.imagetype.split("_")[1] === item.categoryname,
                    ).imagepath
                  : placeholderImg
              }
              className={"w-full"}
              objectFit="object-cover"
              btnUrlTarget={item.href}
              ratio={"aspect-card"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
