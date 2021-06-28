// ExampleTemplates Component
// --------------------------------------------------------

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ExampleTemplates = ({ propsName }) => {
  const [example, setExample] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${example} times`;
  });

  return (
    <tag>
      Functional Component (Stateless Component)
    </tag>
  );
}

ExampleTemplates.propTypes = {
propsName: PropTypes.string,
};

ExampleTemplates.defaultProps = {
propsName: '',
};

export default ExampleTemplates;
