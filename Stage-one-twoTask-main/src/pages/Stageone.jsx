import React from 'react'
import ProfileImage from "../images/IMG_E5718 (2).JPG";
import Slack from "../images/slack-new.png";
import Github from "../images/Icon (1).png";
import Links from "../images/Icon (2).png";
import { FiCamera } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {Link} from 'react-router-dom';
import "../index.css";
import Footer from '../component/Footer';


function Stageone() {
    const buttons = [
        {
          linkName: "Twitter Link",
          href: "https://mobile.twitter.com/M_Roheemoh",
          id: "twitter",
        },
        {
          linkName: "Zuri Team",
          href: "https://training.zuri.team/",
          id: "btn__zuri",
        },
        {
          linkName: "Zuri Books",
          href: "http://books.zuri.team",
          id: "books",
        },
        {
          linkName: "Python Books",
          href: "https://books.zuri.team/python-for-beginners?ref_id=drdonice",
          id: "book__python",
        },
        {
          linkName: "Background Check for Coders",
          href: "https://background.zuri.team,",
          id: "pitch",
        },
        {
          linkName: "Design Books",
          href: "https://books.zuri.team/design-rules ",
          id: "book__design",
        },
      ];
    
  return (
  <div className="App">
      <div>
        <div className="rightDesktop hidden md:block w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20 hover:bg-gray-200">
          <img src={Links} alt="icon" />
        </div>
        <div className="rightMobile block md:hidden w-10 h-10 mt-4 mr-6 font-bold border-2 border-dashed rounded-full md:mr-20">
          <BiDotsHorizontalRounded />
        </div>
      </div>

      <div className="container w-30 flex flex-col sm-auto justify-center items-center">
        <img
          src={ProfileImage}
          alt="Profile"
          id="profile__img"
          className="img mt-8 w-24 rounded-full border-sky-500 md:w-28 md:hover:brightness-50"
        />
        <div className="overlay">
          <a href="www.ghjk" className="icon">
            <FiCamera />
          </a>
        </div>
      </div>

      <p id="slack" style={{ display: "none" }}>
        M_Roheemoh
      </p>
      <h1 className="text-2xl py-4 font-bold">M_Roheemoh</h1>

      <div className="w-4/5 md:w-3/5 ">
        {buttons.map((button) => (
          <div key={button.id} className="bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
            <a href={button.href} id={button.id}>
              {button.linkName}
            </a>
          </div>
        ))}
        <div className="bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
          <button id='btn_contact'><Link to="/contact">Contact Me</Link></button>
        </div>
      </div>

      <div className="flex">
        <a href="https://">
          <img
            src={Slack}
            alt="slack"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
        <a href="https://github.com/oluwabukola2610" id="github">
          <img
            src={Github}
            alt="github"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
      </div>

      <div className="border w-full mt-8"></div>

      <Footer />
    </div>
  );
    
 
}

export default Stageone