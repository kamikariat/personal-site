/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Cell = ({ data }) => (
  <div className="cell-container">
    {data.image ? (
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <time className="published">
            {dayjs(data.date).format("MMMM, YYYY")}
          </time>
        </header>
        <a href={data.link} className="image">
          <img
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt={data.title}
          />
        </a>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    ) : (
      <div>
        <article className="mini-post">
          <div>
            <header>
              <h3>
                <a href={data.link}>{data.title}</a>
              </h3>
              <time className="published">
                {dayjs(data.date).format("MMMM, YYYY")}
              </time>
            </header>
            <div style={{ margin: '0px 20px' }}>
              <p>{data.desc}</p>
            </div>
          </div>
        </article>
      </div>
    )}
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
