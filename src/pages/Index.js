import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Tony Kam's personal website. Electrical Engineering & Computer Science student at UC Berkeley."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">New!</Link>
          </h2>
        </div>
      </header>
      <p>
        {" "}
        Welcome to my website. Please feel free to read {" "}
        <Link to="/about">about me</Link>, see{" "}
        <Link to="/projects">projects</Link>, check out my{" "}
        <Link to="/blog">blog</Link>, or {" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <li>
        1/2/23 - This site has been revived!
      </li>
    </article>
  </Main>
);

export default Index;
