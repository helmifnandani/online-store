import React from "react";
import Icon from "./Icons";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="container relative mx-auto space-y-10 px-6 py-3 text-sm lg:px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-bold lg:text-3xl">want more styles?</p>
        <p className="text-xl font-bold lg:text-3xl">
          follow our travelling sister
        </p>
        <Button
          isLink={true}
          type={"link"}
          text={"@titipkitadi"}
          urlTarget="https://www.instagram.com/titipkitadi"
          openNewTab={true}
          className={"text-xl !font-bold lg:text-3xl"}
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
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Contact"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"FAQ"}
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
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Shipping"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"Careers"}
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
