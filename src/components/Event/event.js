import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import eventimg from "../../img/event.png";
import event2 from "../../img/events2.png";

import {
    Typography
  } from "@mui/material";
import "./event.css";

function Event() {
    return(<div className="event-main">
        <Header/>
        <div className="event-banner">
            <img src={eventimg}></img>
            <p className="banner-main">JOIN US WITH OUR BEST MEMORIES</p>
        </div>
        

        <div>
            <h3 className="past-events">Past Events</h3>
            <p className="past-events-text">Farwell Reception in honour of H.E. Mr Kenji Hiramastu,Ambassador of Japan to India
October 14, 2019 , New Delhi</p>
        </div>
            <img src={event2} className="event-img2"></img>
    </div>);
}

export default Event;