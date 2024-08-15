import React from 'react'
import SlideShow from './SlideShow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collectionItems } from '../constants';
import Image from './Image';

const CollectionSection = ({title = "Best Seller", description= 'Check out our best seller collection'}) => {
    return (
        <div className='mb-10'>
            <div className='flex flex-col gap-2 mb-5'>
                <h2 className='text-4xl font-semibold'>{title}</h2>
                <h3 className='text-xl'>{description}</h3>
            </div>
            <div className='flex gap-12 items-center justify-center'>
                {collectionItems.map((item, index)=>(
                    <div className="flex relative" key={index}>
                        <Image imgSrc={item.img_src} ratio={"aspect-1x1"} text={item.text} objectFit='object-contain'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollectionSection