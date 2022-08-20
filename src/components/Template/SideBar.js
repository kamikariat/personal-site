import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tony Kam</h2>
        <ContactIcons />
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Tony. I like building things.
        I am a Systems Software Engineer based in Bay Area.
        I am interested in building a sustainable future and decentralized web.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/about") ? (
            <Link to="/about" className="button">
              Learn More
            </Link>
          ) : (
            <Link href="#0 " className="button">About Me</Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <p className="copyright">
        &copy; Tony Kam <Link to="/">tonykam.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
