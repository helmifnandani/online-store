import { useState } from "react";
import ProductSection from "../components/ProductSection";
import CollectionSection from "../components/CollectionSection";
import SlideShow from "../components/SlideShow";
import { bannerItems } from "../constants";
import Image from "../components/Image";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <>
      {isLoading ? (
        <>
          <div className="space-y-10">
            <Skeleton
              className={
                "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 aspect-2x3 w-screen lg:aspect-20x9"
              }
            />
            <div className="space-y-4">
              <Skeleton className="h-7 w-1/12" />
              <Skeleton className="h-7 w-2/12" />
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
              <Skeleton className="h-7 w-1/12" />
              <Skeleton className="h-7 w-2/12" />
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
        <div className="space-y-10">
          <SlideShow className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-10 w-screen">
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
          <ProductSection
            title={"New In"}
            description={"We got you more styles!"}
          />
          <ProductSection title={"Tkd's Pick"} description={"Pieces we love"} />
          <CollectionSection />
        </div>
      )}
    </>
  );
};

export default Home;
