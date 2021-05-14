import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Display from '../components/display/Display';
import { getJson } from '../service/jsonApi';
export class Resty extends Component {
  state = {
    method: 'GET',
    url: '',
    body: '',
    display: [],
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
    const display = await getJson({url, method, body});
    this.setState({
      display
    })
  };

  render() {
    const { method, url, body, display } = this.state;
    return (
      <>
        <h1>Hello</h1>
        <Controls
          handleSubmit={this.handleSubmitChange}
          methodEntry={method}
          onMethodChange={this.handleMethodChange}
          urlEntry={url}
          urlEntryChange={this.handleUrlChange}
          jsonEntry={body}
          jsonEntryChange={this.handleJsonChange}
        />
        <Display display={display}/>
      </>
    );
  }
}

export default Resty;
