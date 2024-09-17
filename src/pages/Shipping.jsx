import { useState } from "react";

const Shipping = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">SHIPPING & RETURNS</h1>
      <div>
        <h2 className="mb-2 text-xl font-semibold">SHIPPING</h2>
        <p>
          Please allow 1-3 business days for your orders to be shipped from our
          warehouse via JNE, Paxel, or Grab (Surabaya area only) according to
          your courier of choice. Please contact us through Whatsapp if you
          would like to request your tracking number.
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">DEFECT</h2>
        <p>
          If your item is damaged or has a defect, please reach us to us via
          Whatsapp complete with an unboxing video, we will gladly help you
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">RETURNS</h2>
        <p>Strictly NO RETURNS under any circumstances</p>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">EXCHANGES</h2>
        <ul className="list-inside list-disc space-y-1">
          <li className="ms-4">
            Exchanges can only be made for the same style, in a different color
            or size and is subject to availability
          </li>
          <li className="ms-4">
            Exchanges for preorder items are not available, we will try to sell
            it for you but it will incur a 10% service fee
          </li>
          <li className="ms-4">
            Please make sure the exchanged products are: new, unused, unwashed
            and with all tags still attached with the same packaging that TKD
            sent the package with
          </li>
          <li className="ms-4">Exchanges can only occur once</li>
          <li className="ms-4">Any form of sale items are not exchangeable</li>
          <li className="ms-4">
            All shipping fees will be borne by customers, including the shipping
            fee to send exchanged items back to customers.
          </li>
          <li className="ms-4">
            Exchanges that are damaged, soiled, perfumed or altered are not
            accepted and will be sent back to the customer (shipping cost will
            be covered by customer)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
