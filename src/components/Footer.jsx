import React from 'react'
import Icon from './Icons';

const Footer = () => {
  return (
    <div className="container px-8 py-3 mx-auto relative text-sm">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="basis-auto border-b lg:border-0 pb-4 lg:basis-1/3">
          <ul className='flex flex-col gap-3'>
            <li>about</li>
            <li>contact</li>
            <li>faq</li>
            <li>careers</li>
          </ul>
        </div>
        <div className="basis-auto border-b lg:border-0 pb-4 lg:basis-1/3">
          <ul className='flex flex-col gap-3'>
            <li>sign in</li>
            <li>returns & exchanges</li>
            <li>shipping</li>
          </ul>
        </div>
        <div className="basis-auto git branch -M mainpb-4 lg:basis-1/3">
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <span>
                <Icon name="instagram" width={20} />
              </span>
              thekoreandaily</li>
            <li className='flex items-center gap-2'>
              <span>
                <Icon name="instagram" width={20} />
              </span>
              titipkitadi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer