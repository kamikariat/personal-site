import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Blog = () => (
  <Main
    title="Blog"
    description="My thoughts"
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/blog">Blog</Link>
          </h2>
          <p>Some of my thoughts in words</p>
        </div>
      </header>
      Coming soon!
    </article>
  </Main>
);

export default Blog;
