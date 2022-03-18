import React from "react";
import Star from "./Star.js";
import PropTypes from "prop-types";
import shortid from "shortid";

export default function Stars({ count }) {
  if (!Number.isInteger(count) || count > 5 || count < 1) return null;

  let stars = [];
  for (let index = 0; index < count; index++) {
    stars.push(
      <li key={shortid.generate()}>
        <Star />
      </li>
    );
  }

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
