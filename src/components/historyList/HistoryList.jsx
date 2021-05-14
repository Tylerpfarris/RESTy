import React from 'react';
import PropTypes from 'prop-types';

const HistoryList = ({ histories }) => {
      return (
            <ul aria-label="history-list">
                  {histories.map(history => (
                        <li></li>
                  ))}
            </ul>
      )
};

History.propTypes = {};

export default HistoryList;
