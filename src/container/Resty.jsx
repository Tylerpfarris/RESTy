import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';
import HistoryList from '../components/historyList/HistoryList';
import { fetchJson } from '../service/jsonApi';
export class Resty extends Component {
  state = {
    method: '',
    url: '',
    body: '',
    display: '',
    history: [],
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };
  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };
  handleJsonChange = ({ target }) => {
    this.setState({ body: target.value });
  };

  handleSubmitChange = async (e) => {
    e.preventDefault();
    const { url, method, body } = this.state;
    const display = await fetchJson({ url, method, body });
    this.setState((prevState) => ({
      display,
      history: [...prevState.history, { url, body, method }],
    }));
  };

  render() {
    const { method, url, body, display, history } = this.state;
    return (
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          color="textSecondary"
          alignleft="true"
          gutterBottom
        >
          RESTy
        </Typography>

        <Controls
          handleSubmit={this.handleSubmitChange}
          methodEntry={method}
          onMethodChange={this.handleMethodChange}
          urlEntry={url}
          urlEntryChange={this.handleUrlChange}
          jsonEntry={body}
          jsonEntryChange={this.handleJsonChange}
        />
        <Container
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Display display={display} />

          <HistoryList histories={history} method={method} url={url} />
        </Container>
      </Container>
    );
  }
}

export default Resty;
