import React from "react";
import "../index.css";
import Ingresive from "../images/I4G.svg";
import Zuri from "../images/Vector (1).png";

function Footer() {
  return (
    <div>
      <div className="my-8 w-full text-left md:flex md:space-x-64 md:justify-center md:align-middle">
        <img src={Zuri} alt="zuri" className="w-30 border-sky-500 mb-2" />
        <span className="text-gray-500 mb-2">
          HNG Internship 9 Frontend Task
        </span>
        <img
          src={Ingresive}
          alt="IG4"
          className="w-28 border-sky-500 mt-2 md:w-28"
        />
      </div>
    </div>
  );
}

export default Footer;
