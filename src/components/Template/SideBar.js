import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/kevin.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Wu</h2>
        <p>
          <a href="mailto:wu.kevin.2520@gmail.com">wu.kevin.2520@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi! I&apos;m Kevin. I like learning about and socializing with others. I
        am a <a href="https://drexel.edu/">Drexel University</a> student in
        Philadelphia, PA.
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
        &copy; Kevin Wu <Link to="/">kevinismyna.me</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
