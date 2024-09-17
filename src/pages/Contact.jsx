import { useState } from "react";

const Contact = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div>
        <h2 className="mb-2 text-xl font-semibold">Email us</h2>
        <a
          className="btn-link text-primary-500 transition-all ease-linear focus-visible:ring-offset-0"
          href="mailto: its.thekoreandaily@gmail.com"
          target="_blank"
        >
          <span className="btn-text tracking-widest focus-visible:ring-offset-0">
            its.thekoreandaily@gmail.com
          </span>
        </a>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">Whatsapp us</h2>
        <a
          className="btn-link text-primary-500 transition-all ease-linear focus-visible:ring-offset-0"
          href="https://wa.me/6282323727197"
          target="_blank"
        >
          <span className="btn-text tracking-widest focus-visible:ring-offset-0">
            +62 8232 3727 197
          </span>
        </a>
        <p></p>
      </div>
    </div>
  );
};

export default Contact;
