import { useState } from "react";
import ProductSection from "../components/ProductSection";
import CollectionSection from "../components/CollectionSection";
import SlideShow from "../components/SlideShow";
import { bannerItems } from "../constants";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";

const Home = ({ heightNavbar }) => {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    console.log(heightNavbar);
    setLoading(false);
  }, 500);
  return (
    <>
      {isLoading ? (
        <>
          <div className="space-y-10">
            <Skeleton
              className={
                "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-[72px] aspect-2x3 w-screen lg:-mt-[144px] lg:aspect-20x9"
              }
            />
            <div className="space-y-4">
              <Skeleton
                className="h-7 w-6/12 lg:w-3/12"
                classContainer="flex justify-center"
              />
              <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
                {(() => {
                  const elements = [];
                  for (let i = 0; i < 4; i++) {
                    elements.push(
                      <div
                        className="col-span-6 h-full w-full lg:col-span-3"
                        key={i}
                      >
                        <Skeleton key={i} className={"aspect-card"} />
                      </div>,
                    );
                  }
                  return elements;
                })()}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton
                className="h-7 w-6/12 lg:w-3/12"
                classContainer="flex justify-center"
              />
              <div className="mb-7 grid h-full grid-cols-12 gap-2 lg:gap-7">
                {(() => {
                  const elements = [];
                  for (let i = 0; i < 4; i++) {
                    elements.push(
                      <div
                        className="col-span-6 h-full w-full lg:col-span-3"
                        key={i}
                      >
                        <Skeleton key={i} className={"aspect-card"} />
                      </div>,
                    );
                  }
                  return elements;
                })()}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-10" style={{ marginTop: `-${heightNavbar}px` }}>
          <SlideShow className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen lg:-mt-10">
            {bannerItems.map((item, index) => (
              <div key={index}>
                <Image
                  imgSrc={item.src}
                  hasButton={!!item.href}
                  btnType={"outline"}
                  btnIsLink={true}
                  btnUrlTarget={item.href}
                  ratio={"aspect-2x3 lg:aspect-20x9"}
                />
              </div>
            ))}
          </SlideShow>
          <ProductSection title={"New In"} />
          <ProductSection title={"Our Pick"} />
          <CollectionSection />
        </div>
      )}
    </>
  );
};

export default Home;
