import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Gurucharan Sahay. This is portfilo <b> Program </b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/gurucharan4233/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/@romilsahay7584/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/gurucharan4233/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/gurucharan-sahay-2650118244/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
