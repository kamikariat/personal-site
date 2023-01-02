import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const skills = () => (
  <Main title="Skills" description="Tony Kam's Skill Tree.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="skills">Skills</Link>
            {"  "}
          </h2>
        </div>
      </header>
      <a href="https://lovely-cousin-bb9.notion.site/Skill-Tree-ef7d2e2a329b4fedb9de31926116e264" target="_blank" rel="noreferrer">See my skill tree on notion</a>
    </article>
  </Main>
);

export default skills;
