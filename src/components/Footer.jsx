import React from "react";
import Icon from "./Icons";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="container relative mx-auto px-4 py-3 text-sm">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="basis-auto border-b pb-4 lg:basis-1/3 lg:border-0">
          <ul className="flex flex-col gap-3">
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"about"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"contact"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"faq"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"careers"}
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
                text={"sign in"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"returns & exchanges"}
              />
            </li>
            <li>
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"shipping"}
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
                text={"thekoreandaily"}
                iconName={"instagram"}
                iconWidth={20}
              />
              <Button isLink={true} type={"link"} href={"#"} />
            </li>
            <li className="flex items-center gap-2">
              <Button
                className={"!justify-start"}
                isLink={true}
                type={"link"}
                text={"titipkitadi"}
                iconName={"instagram"}
                iconWidth={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
