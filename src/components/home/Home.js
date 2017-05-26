import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import homeMarkdown from './Home.md.js';

class Home extends Component {
  render() {
    return (
      <ReactMarkdown source={homeMarkdown} />
    )
  }
}

export default Home;
