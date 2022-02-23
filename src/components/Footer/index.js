import React from "react";
import commercial from "../../assets/large/commercial/0.png";
import commercial2 from "../../assets/large/commercial/1.png";
import commercial3 from "../../assets/large/commercial/2.png";

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <a href="https://linkedin.com/in/danika-pearson">
          <img
            src={commercial}
            className="my-2"
            style={{ width: "64px", height: "64px" }}
            alt="0.png"
          />
        </a>
      </li>

      <li>
        <a href="https://github.com/karmadog72">
          <img
            src={commercial2}
            className="my-2"
            style={{ width: "64px", height: "64px" }}
            alt="1.png"
          />
        </a>
      </li>
      <li>
        {/* <a href="mailto:danika.m.pearson@gmail.com"> */}
        <a href="https://dashboard.heroku.com/apps">
          <img
            src={commercial3}
            className="my-2"
            style={{ width: "64px", height: "64px" }}
            alt="2.png"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
