import ProductSection from "../components/ProductSection";
import CollectionSection from "../components/CollectionSection";
import SlideShow from "../components/SlideShow";
import { bannerItems } from "../constants";
import Image from "../components/Image";

const Home = () => {
  return (
    <div>
      <SlideShow className="mb-10 px-4" centerMode={true}>
        {bannerItems.map((item, index) => (
          <div key={index}>
            <Image imgSrc={item.src} ratio={"aspect-20x9"} />
          </div>
        ))}
      </SlideShow>
      <ProductSection
        title={"new in"}
        description={"we got you more styles!"}
      />
      <ProductSection title={"tkd's pick"} description={"pieces we love"} />
      <CollectionSection />
    </div>
  );
};

export default Home;
