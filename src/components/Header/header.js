import React, { useState } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../img/logo.png";
import { slide as Menu } from "react-burger-menu";

function Header() {
  const pathname = window.location.pathname;
  var navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "black" : "black",
      textDecoration: "none",
    }
  };

  return (
    <div>
      <Menu disableAutoFocus>
        <Stack className="do-menu" direction="row" spacing={2}>
          <Link to="/" style={{ navLinkStyles }}>
            Home
          </Link>

          <Link className="" to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>
        </Stack>
      </Menu>

      <Box className="do-header">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" />
          Friendship Center
        </Typography>
        <Stack className="do-menu" direction="row" spacing={2}>
          <Link to="/" style={{navLinkStyles}}>
            Home
          </Link>
          <Link className="" to="/about" style={{ textDecoration: "none" }}>
            About Us
          </Link>
          <Link to="/event" style={{ textDecoration: "none" }}>
            Event
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            Gallery
          </Link>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default Header;
