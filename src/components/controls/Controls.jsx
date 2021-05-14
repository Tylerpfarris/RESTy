import React from 'react';
import PropTypes from 'prop-types';

function Controls({
  handleSubmit,
  onMethodChange,
  methodEntry,
  urlEntry,
  urlEntryChange,
  jsonEntry,
  jsonEntryChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="GET-radio">
        GET
        <input
          type="radio"
          name="method"
          id="GET-radio"
          value="GET"
          checked={methodEntry === 'GET'}
          onChange={onMethodChange}
        />
      </label>

      <label htmlFor="POST-radio">
        POST
        <input
          type="radio"
          name="method"
          id="POST-radio"
          value="POST"
          checked={methodEntry === 'POST'}
          onChange={onMethodChange}
        />
      </label>

      <label htmlFor="PUT-radio">
        PUT
        <input
          type="radio"
          name="method"
          id="PUT-radio"
          value="PUT"
          checked={methodEntry === 'PUT'}
          onChange={onMethodChange}
        />
      </label>

      <label htmlFor="PATCH-radio">
        PATCH
        <input
          type="radio"
          name="method"
          id="PATCH-radio"
          value="PATCH"
          checked={methodEntry === 'PATCH'}
          onChange={onMethodChange}
        />
      </label>

      <label htmlFor="DELETE-radio">
        DELETE
        <input
          type="radio"
          name="method"
          id="DELETE-radio"
          value="DELETE"
          checked={methodEntry === 'DELETE'}
          onChange={onMethodChange}
        />
      </label>
      <label htmlFor="url-input">
        URL:
        <input
          type="text"
          id="url-input"
          value={urlEntry}
          onChange={urlEntryChange}
        />
      </label>
      <button>GO</button>
      <textarea value={jsonEntry} onChange={jsonEntryChange}></textarea>
    </form>
  );
}

Controls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  methodEntry: PropTypes.string.isRequired,
  urlEntry: PropTypes.string.isRequired,
  urlEntryChange: PropTypes.func.isRequired,
  jsonEntryChange: PropTypes.func.isRequired,
  jsonEntry: PropTypes.string.isRequired,
};

export default Controls;
