import React from 'react';
import PropTypes from 'prop-types';
import FeaturesCollectionItem from '../features-collection-item/features-collection-item';

function FeaturesCollectionPreview({ features }) {
  return (
    <div>
        <FeaturesCollectionItem />     
    </div>
  )
}

FeaturesCollectionPreview.propTypes = {
    features: PropTypes.arrayOf(PropTypes.object)
}
 
export default FeaturesCollectionPreview;