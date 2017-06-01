import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import homeMarkdown from './Home.md.js';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <ReactMarkdown className='home_content' source={homeMarkdown} />
    )
  }
}

export default Home;
