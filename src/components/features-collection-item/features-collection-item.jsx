import React from 'react';
import PropTypes from 'prop-types';

function FeaturesCollectionItem({ icon, heading, content }) {
  return (
    <div>FeaturesCollectionItem</div>
  )
}

FeaturesCollectionItem.propTypes = {
    icon: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default FeaturesCollectionItem