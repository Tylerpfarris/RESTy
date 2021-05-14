import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
export class Resty extends Component {
  state = {
    method: 'GET',
    url: '',
    json: '',
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };
  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };
  handleJsonChange = ({ target }) => {
    this.setState({ json: target.value });
  };

  render() {
    const { method, url, json } = this.state;
    return (
      <>
        <h1>Hello</h1>
        <Controls
          handleSubmit={this.handleSubmitChange}
          methodEntry={method}
          onMethodChange={this.handleMethodChange}
          urlEntry={url}
          urlEntryChange={this.handleUrlChange}
          jsonEntry={json}
          jsonEntryChange={this.handleJsonChange}
        />
      </>
    );
  }
}

export default Resty;
