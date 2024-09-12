import { useState } from "react";
import ProductSection from "../components/ProductSection";
import CollectionSection from "../components/CollectionSection";
import SlideShow from "../components/SlideShow";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";

const Home = ({ heightNavbar, imgData, isLoadingImage, categoryList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);
  return (
    <div style={{ marginTop: `-${heightNavbar}px` }}>
      {isLoadingImage && (
        <Skeleton
          className={
            "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-[72px] mb-14 aspect-4x5 w-screen lg:-mt-[128px] lg:mb-16 lg:aspect-20x9"
          }
        />
      )}
      {!isLoadingImage && (
        <SlideShow className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 w-screen lg:mb-16">
          {imgData
            .filter((image) => image.imagetype === "header")
            .map((item, index) => (
              <div key={index}>
                <Image
                  imgSrc={item.imagepath}
                  hasButton={!!item.href}
                  btnType={"outline"}
                  btnIsLink={true}
                  btnUrlTarget={item.href}
                  ratio={"aspect-4x5 lg:aspect-20x9"}
                />
              </div>
            ))}
        </SlideShow>
      )}
      <ProductSection
        title={"New Arrivals"}
        categoryId="e4554ea1-b441-474c-8a2a-b4ed1bffce4b"
        imgData={imgData}
      />
      <ProductSection
        title={"Our Pick"}
        categoryId="9074f328-aee8-4ddc-9f6e-e665c91822cb"
        imgData={imgData}
      />
      <CollectionSection categoryList={categoryList} imgData={imgData} />
    </div>
  );
};

export default Home;
