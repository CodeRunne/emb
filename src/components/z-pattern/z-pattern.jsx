import React from "react";
import PropTypes from "prop-types";

function ZPattern({ title, content, imageSorce, type }) {
  return (
    <section className="my-5" role="article">
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>

      <figure>
        <img src={imageSorce} alt={type} />
      </figure>
    </section>
  );
}

ZPattern.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSorce: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default ZPattern;
