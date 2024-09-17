import { useState } from "react";

const Careers = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">Careers</h2>
      <div className="space-y-2">
        <p className="">
          Interested in joining TKD’s team? We’re always looking for creative
          individuals that loves fashion and the Korean scene as much as we do!
        </p>
        <p className="">
          We’re currently looking for:
          <ul className="list-inside list-disc space-y-1">
            <li className="ms-4">Fashion Photographer</li>
            <li className="ms-4">Content Creator</li>
            <li className="ms-4">Based in Surabaya</li>
          </ul>
        </p>
        <p className="">
          If you think you’re the perfect fit, email us your CV and portfolio!
          <a
            className="btn-link transition-all ease-linear focus-visible:ring-offset-0"
            href="mailto: its.thekoreandaily@gmail.com"
            target="_blank"
          >
            <span className="btn-text focus-visible:ring-offset-0">
              {" "}
              its.thekoreandaily@gmail.com
            </span>
          </a>
        </p>
        <p className="">Looking forward to see you soon!</p>
      </div>
    </div>
  );
};

export default Careers;
