import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

function Display({ display }) {
  return (
    <Container
      maxWidth="xl"
      style={{
        paddingRight: 'none',
      }}
    >
      <pre
        style={{
          height: '800px',
          //  width: '800px',
          border: 'lightgrey solid 2px',
          borderRadius: '4px',
          overflow: 'scroll',
          whiteSpace: 'pre-wrap',
        }}
      >
        <code>
          <p>{display}</p>
        </code>
      </pre>
    </Container>
  );
}

Display.propTypes = {
  display: PropTypes.any.isRequired,
};

export default Display;
