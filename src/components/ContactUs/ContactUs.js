import Header from "../Header/header";
import Footer from "../Footer/footer";
import contact_banner from "../../img/contact-banner.png";
import leaf from "../../img/leaf.png"

import React from "react";
import "./ContactUs.css";

import {
    Typography,
  } from "@mui/material";

function Gallery() {
  return <div>
       <Header />
      <div className="banner">
        <img src={contact_banner} alt="banner" />
        </div>
        <div className="about-approach">
        <Typography variant="h1">Get In Touch</Typography>
        </div>
        <div className="">
        <img src={leaf} alt="leaf" className="contact-leaf"></img>
        </div>
  </div>;
}
export default Gallery;
