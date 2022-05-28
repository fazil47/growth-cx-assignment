import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./Menubar.css";

import MenuItem from "./MenuItem";

import LogoMain from "../imgs/logo-main.svg";

export default function Menubar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <div
      id="menubar"
      className={isMenuExpanded ? "expandedMenu" : "collapsedMenu"}
    >
      <div id="menuMainContainer">
        <Link to="" id="menuLogo">
          <img src={LogoMain} alt="Main Logo"></img>
        </Link>
        <button
          title="Menu Button"
          id="menuButton"
          onClick={() => {
            setIsMenuExpanded(!isMenuExpanded);
          }}
          type="button"
        >
          {isMenuExpanded ? (
            <XIcon id="closeMenuIcon" />
          ) : (
            <MenuIcon id="openMenuIcon" />
          )}
        </button>
      </div>
      <div id="menuLinkContainer">
        <div
          id="menuLinks"
          onClick={() => {
            setIsMenuExpanded(false);
          }}
        >
          <MenuItem to="placeholder" name="Why us?" />
          <MenuItem to="placeholder" name="Our fixes" />
          <MenuItem to="placeholder" name="Growth" />
          <MenuItem to="placeholder" name="Eye-openers" />
          <MenuItem to="" name="Customers" />
          <button className="blackButton">Talk to out CEO</button>
        </div>
      </div>
    </div>
  );
}
