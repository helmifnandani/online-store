import React from 'react'
import ProductItem from './ProductItem'
import SlideShow from './SlideShow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productItems } from '../constants';
import Button from './Button';

const ProductSection = ({title = "Best Seller", description= 'Check out our best seller collection'}) => {
    return (
        <div className='mb-10'>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                <h3 className='text-xl'>{description}</h3>
            </div>
            <SlideShow fade={false} infinite={false} slidesToShow={3} autoplay={false} className="px-4 mb-7">
                {productItems.map((item, index)=>(
                    <div key={index}>
                        <ProductItem item={item}/>
                    </div>
                ))}
            </SlideShow>
            <div className='flex items-center justify-center'>
                <Button isLink={true} type={"outline"} text={"View More"} isPill={true} />
            </div>
        </div>
    )
}

export default ProductSection