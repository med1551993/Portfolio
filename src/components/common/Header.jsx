import React from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <img src="./images/logo1.png" data-aos="zoom-in-right" alt="logo" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((link) => (
              <Link to={link.url} key={link.id} data-aos="zoom-in-left">
                {link.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
