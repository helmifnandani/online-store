import React from "react";
import Icon from "./Icons";
import Button from "./Button";
import Banner from "../assets/images/banner-3.jpg";
import Image from "./Image";

const Footer = () => {
  return (
    <div className="container relative mx-auto space-y-10 px-6 pb-3 text-sm lg:px-4">
      <div className="mb-12 flex flex-col items-center justify-center text-center lg:mb-14">
        <Image
          imgSrc={Banner}
          className={"w-full"}
          objectFit="object-cover"
          btnUrlTarget={"https://www.instagram.com/titipkitadi"}
          ratio={"aspect-2x3 lg:aspect-20x9"}
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="basis-auto border-b pb-4 lg:basis-1/3 lg:border-0">
          <ul className="flex flex-col gap-3">
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"About"}
                urlTarget="About"
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Contact"}
                urlTarget="Contact"
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"FAQ"}
                urlTarget="Faq"
              />
            </li>
          </ul>
        </div>
        <div className="basis-auto border-b pb-4 lg:basis-1/3 lg:border-0">
          <ul className="flex flex-col gap-3">
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Returns & Exchanges"}
                urlTarget="ReturnsExchanges"
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Shipping"}
                urlTarget="Shipping"
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Careers"}
                urlTarget="Careers"
              />
            </li>
          </ul>
        </div>
        <div className="basis-auto pb-4 lg:basis-1/3">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"the.koreandaily"}
                urlTarget="https://www.instagram.com/the.koreandaily"
                iconName={"instagram"}
                iconWidth={20}
                openNewTab={true}
              />
              <Button isLink={true} type={"link"} href={"#"} />
            </li>
            <li className="flex items-center gap-2">
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                urlTarget="https://www.instagram.com/titipkitadi"
                text={"titipkitadi"}
                iconName={"instagram"}
                iconWidth={20}
                openNewTab={true}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
