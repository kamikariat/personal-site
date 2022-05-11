import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Kevin Wu's personal website. Computer science student at Drexel University one year of junior experience."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hi! I&apos;m Kevin.</Link>
          </h2>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, check out my{" "}
        <Link to="/resume">resume</Link>, see{" "}
        <Link to="/projects">projects</Link>, view{" "}
        <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {" "}
        Source code available{" "}
        <a href="https://github.com/kevinismyname/personal-site">here</a>.
      </p>

      <p>
        Huge thanks to Michael D&apos;Angelo for providing this{" "}
        <a href="https://github.com/mldangelo/personal-site">
          templated website.
        </a>
      </p>
    </article>
  </Main>
);

export default Index;
