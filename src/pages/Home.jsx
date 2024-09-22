import { useState } from "react";
import ProductSection from "../components/ProductSection";
import CollectionSection from "../components/CollectionSection";
import SlideShow from "../components/SlideShow";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";
import Banner1 from "../assets/images/banner-1.jpg";

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
        <>
          {imgData?.filter((image) => image.imagetype === "header_desktop")
            .length > 0 ? (
            <SlideShow className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 hidden w-screen lg:mb-16 lg:block">
              {imgData
                .filter((image) => image.imagetype === "header_desktop")
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <a
                        className={`${!item.properties ? "pointer-events-none" : ""} `}
                        target="_blank"
                        href={item.properties?.url}
                      >
                        <Image
                          imgSrc={item.imagepath}
                          hasButton={!!item.href}
                          btnType={"outline"}
                          btnIsLink={true}
                          btnUrlTarget={item.href}
                          ratio={"aspect-20x9"}
                        />
                      </a>
                    </div>
                  );
                })}
            </SlideShow>
          ) : (
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 hidden w-screen lg:mb-16 lg:block">
              <Image imgSrc={Banner1} ratio={"aspect-20x9"} />
            </div>
          )}
          {imgData.filter((image) => image.imagetype === "header_mobile")
            .length > 0 ? (
            <SlideShow className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 w-screen lg:mb-16 lg:hidden">
              {imgData
                .filter((image) => image.imagetype === "header_mobile")
                .map((item, index) => (
                  <div key={index}>
                    <a
                      className={`${!item.properties ? "pointer-events-none" : ""} `}
                      target="_blank"
                      href={item.properties?.url}
                    >
                      <Image
                        imgSrc={item.imagepath}
                        hasButton={!!item.href}
                        btnType={"outline"}
                        btnIsLink={true}
                        btnUrlTarget={item.href}
                        ratio={"aspect-[320/250]"}
                      />
                    </a>
                  </div>
                ))}
            </SlideShow>
          ) : (
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 w-screen lg:mb-16 lg:hidden">
              <Image imgSrc={Banner1} ratio={"aspect-[320/250]"} />
            </div>
          )}
        </>
      )}
      <ProductSection
        title={"New Arrival"}
        categoryId="e4554ea1-b441-474c-8a2a-b4ed1bffce4b"
        imgData={imgData}
      />
      <ProductSection
        title={"Our Picks"}
        categoryId="9074f328-aee8-4ddc-9f6e-e665c91822cb"
        imgData={imgData}
      />
      <CollectionSection categoryList={categoryList} imgData={imgData} />
    </div>
  );
};

export default Home;
