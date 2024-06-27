import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from '../../assets/ME.jpg';
import HeaderSocials from "./HeaderSocials";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.root);
  const { portfolioData } = state;
  const introData = portfolioData && portfolioData.intro;
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const intro = introData && introData[0];
  const fullName = intro && intro.fullName;
  const title = intro && intro?.title;
  const image = intro && intro?.image;
  console.log("Base URL:", process.env.REACT_APP_BASE_URL);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{fullName || ""}</h1>
        <h5>{title || ""}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={`${BaseURL}/${image}`} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
