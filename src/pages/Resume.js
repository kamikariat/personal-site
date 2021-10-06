import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
import Extracurriculars from "../components/Resume/Extracurriculars";
import References from "../components/Resume/References";

// import courses from '../data/resume/courses';
import degrees from "../data/resume/degrees";
import jobs from "../data/resume/jobs";
import extras from "../data/resume/extras";
// import { skills, categories } from '../data/resume/skills';

import Pdf from "../data/resume/resume.pdf";

const sections = [
  "Education",
  "Experience",
  // 'Skills',
  // 'Courses',
  // 'References',
  "Extracurriculars",
];

const Resume = () => (
  <Main title="Resume" description="Kevin Wu's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
          <div className="App">
            <a href={Pdf} target="_blank" rel="noreferrer">
              Click here for an exportable PDF.
            </a>
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={jobs} />
      <Extracurriculars data={extras} />
      {/* <Skills skills={skills} categories={categories} /> */}
      {/* <Courses data={courses} /> */}
      {/* <References /> */}
    </article>
  </Main>
);

export default Resume;
