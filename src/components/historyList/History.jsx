import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

function History({ method, url }) {
  return (
    <Container
      style={{
        border: 'lightgrey solid 2px',
        borderRadius: '4px',
      }}
    >
      <p>
        {method}: {url}
      </p>
    </Container>
  );
}

History.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default History;
