import React from 'react';
import PropTypes from 'prop-types';
import History from './History';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
const HistoryList = ({ histories }) => {
  return (
    <Container maxWidth="xs">
      <Typography
        variant="h4"
        color="textSecondary"
        gutterBottom
        align="center"
      >
        History
      </Typography>
      <Container>
        <ul
          aria-label="history-list"
          style={{
            listStyleType: 'none',
            padding: '0px',
          }}
        >
          {histories.map(({ method, url }, i) => (
            <li key={`${method}-${url}-${i}`}>
              <History method={method} url={url} />
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
};

HistoryList.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoryList;
