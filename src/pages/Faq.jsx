import { useState } from "react";
import Icon from "../components/Icons";
import Button from "../components/Button";

const Faq = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">F.A.Q</h1>
      <div>
        <h2 className="text-xl font-semibold">Order</h2>
        <div className="grid divide-y divide-neutral-200 border-b">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How to order your items?</span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                You can purchase through the Shopee & Tokopedia links provided
                in the product page, or you can also click the Whatsapp link to
                contact us personally to order your items
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Why can’t I order through the website?</span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                As this website is just an online catalog, purchasing through
                the website is not available. Please proceed to use the Shopee,
                Tokopedia, and Whatsapp links to purchase
              </p>
            </details>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Preorder</h2>
        <div className="grid divide-y divide-neutral-200 border-b">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>
                  How to order items that are marked “Available by Preorder”?
                </span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                Please contact us through Whatsapp to place your order
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How long does preorder items take to be shipped?</span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                Generally 2-3 weeks from your purchase date, and another 1-3
                days for the domestic shipping
              </p>
            </details>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Sizing</h2>
        <div className="grid divide-y divide-neutral-200 border-b">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How to know my size?</span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                You can find all sizing and measurements in the product page.
                Please note that the measurements are all different for every
                product.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Favorites</h2>
        <div className="grid divide-y divide-neutral-200 border-b">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How to use the Favorites page?</span>
                <span className="transition group-open:rotate-180">
                  <Icon name="chevron-down" />
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                Think of the Favorites page as your wishlist! Login with your
                email and click the heart icon when you want to save the product
                to your Favorites.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Shipping & Returns</h2>
        <p className="inline-flex gap-1">
          Please refer to the{" "}
          <Button
            className={"!justify-start !font-normal"}
            isLink={true}
            type={"link"}
            text={"Shipping & Returns"}
            btnTextClass={"!tracking-normal !text-base !text-black"}
            urlTarget="/Shipping"
          />{" "}
          page for any questions regarding this matter
        </p>
      </div>
    </div>
  );
};

export default Faq;
