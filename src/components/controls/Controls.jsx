import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
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
      <Container>
        <TextField
          label="Enter Url"
          variant="outlined"
          htmlFor="url-entry"
          type="text"
          id="url-input"
          fullWidth
          color="secondary"
          value={urlEntry}
          onChange={urlEntryChange}
        />
      </Container>
      <Container>
        <FormControl margin="normal" >
          <FormLabel>HTTP Requests</FormLabel>
          <RadioGroup
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
            
          >
            <FormControlLabel
              name="method"
              id="GET-radio"
              value="GET"
              checked={methodEntry === 'GET'}
              onChange={onMethodChange}
              control={<Radio />}
              label="GET"
            />
            <FormControlLabel
              name="method"
              id="POST-radio"
              value="POST"
              checked={methodEntry === 'POST'}
              onChange={onMethodChange}
              control={<Radio />}
              label="POST"
            />
            <FormControlLabel
              name="method"
              id="PUT-radio"
              value="PUT"
              checked={methodEntry === 'PUT'}
              onChange={onMethodChange}
              control={<Radio />}
              label="PUT"
            />
            <FormControlLabel
              name="method"
              id="PATCH-radio"
              value="PATCH"
              checked={methodEntry === 'PATCH'}
              onChange={onMethodChange}
              control={<Radio />}
              label="PATCH"
            />
            <FormControlLabel
              name="method"
              id="DELETE-radio"
              value="DELETE"
              checked={methodEntry === 'DELETE'}
              onChange={onMethodChange}
              control={<Radio />}
              label="DELETE"
            />
            <Button type="submit" color="default" variant="outlined">
              Go
            </Button>
          </RadioGroup>
        </FormControl>
        <TextField
          value={jsonEntry}
          onChange={jsonEntryChange}
          label="JSON"
          multiline
          variant="outlined"
          rows="5"
          fullWidth
        />
      </Container>
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
