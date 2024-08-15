import ProductSection from "./ProductSection"
import CollectionSection from "./CollectionSection"
const HeroSection = () => {
    return (
        <div>
            <ProductSection title={"new in"} description={"we got you more styles!"} />
            <ProductSection title={"tkd's pick"} description={"pieces we love"} />
            <CollectionSection />
        </div>
    )
}

export default HeroSection