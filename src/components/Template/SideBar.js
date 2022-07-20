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
        <p>
          <a href="mailto:tony.shek.kam@gmail.com">tony.shek.kam@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I&apos;m Tony. I like reading and building things. I
        am a <a href="https://www.berkeley.edu/">UC Berkeley</a> student in
        Berkeley, CA.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/about") ? (
            <Link to="/about" className="button">
              Learn More
            </Link>
          ) : (
            <Link href="#0 " className="button">You&apos;re currently learning more about me!</Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Tony Kam <Link to="/">tonykam.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
