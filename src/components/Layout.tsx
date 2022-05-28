import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import footerImage from "../imgs/footer-desk.svg";

import Menubar from "./Menubar";

export default function Layout() {
  return (
    <div id="layout">
      <Menubar />
      <div id="layoutContent">
        <Outlet />
      </div>
      <footer id="layoutFooter">
        <img src={footerImage} alt="Footer"></img>
        <div id="footerText">
          <p>Set the foundation for an aggressive growth</p>
          <button className="whiteButton">Hop on a call</button>
          <div id="footerLinksContainer">
            <div>
              <h3>Our fixes</h3>
              <Link to="placeholder">Team</Link>
              <Link to="placeholder">Expert</Link>
              <Link to="placeholder">Content</Link>
            </div>
            <div>
              <h3>Community</h3>
              <Link to="placeholder">Contact Us</Link>
              <Link to="placeholder">Privacy</Link>
            </div>
            <div>
              <h3>Social</h3>
              <a href="https://linkedin.com/company/growthcx">LinkedIn</a>
              <a href="https://twitter.com/growthcx">Twitter</a>
              <a href="https://www.facebook.com/growthcustomerx">Facebook</a>
              <a href="https://www.instagram.com/growth.cx/">Instagram</a>
            </div>
          </div>
          <div id="footerCopyright">© Copyright 2022 growth.cx</div>
        </div>
      </footer>
    </div>
  );
}
