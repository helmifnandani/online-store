import React from "react";
import Icon from "./Icons";
import Button from "./Button";
import Image from "./Image";
import Banner2 from "../assets/images/banner-2.jpg";
import Skeleton from "./Skeleton";

const Footer = ({ imgData, isLoadingImage }) => {
  return (
    <div
      className="container relative mx-auto space-y-4 px-6 pb-3 text-sm lg:space-y-10 lg:px-4"
      id="footer"
    >
      <div className="border-b pb-4">
        {isLoadingImage && (
          <Skeleton
            className={
              "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-14 aspect-4x5 w-screen lg:mb-16 lg:aspect-20x9"
            }
          />
        )}
        {!isLoadingImage && (
          <>
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 hidden w-screen lg:mb-10 lg:block">
              <a
                target="_blank"
                href="https://www.instagram.com/the.koreandaily"
              >
                <Image
                  imgSrc={
                    imgData.find((img) => img.imagetype === "footer_desktop")
                      ? imgData.find(
                          (img) => img.imagetype === "footer_desktop",
                        ).imagepath
                      : Banner2
                  }
                  className={"w-full"}
                  objectFit="object-cover"
                  btnUrlTarget={"https://www.instagram.com/titipkitadi"}
                  ratio={"aspect-20x9"}
                />
              </a>
            </div>
            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8 w-screen lg:mb-10 lg:hidden">
              <a
                target="_blank"
                href="https://www.instagram.com/the.koreandaily"
              >
                <Image
                  imgSrc={
                    imgData.find((img) => img.imagetype === "footer_mobile")
                      ? imgData.find((img) => img.imagetype === "footer_mobile")
                          .imagepath
                      : Banner2
                  }
                  className={"w-full"}
                  objectFit="object-cover"
                  btnUrlTarget={"https://www.instagram.com/titipkitadi"}
                  ratio={"aspect-[320/250]"}
                />
              </a>
            </div>
          </>
        )}
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
                text={"Shipping & Returns"}
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
