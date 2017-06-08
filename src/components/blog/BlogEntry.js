import PropTypes from 'prop-types';
import React, {Component } from 'react';
import ReactMarkdown from 'react-markdown';

class BlogEntry extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      blogcontent: ''
    };
  }

  componentDidMount() {
    var self = this;
    const { location } = this.props;
    import(location.pathname.replace('/website/blog', '.') + '.md.js')
    .then(blogEntry => {
      self.setState({
        blogcontent: blogEntry.default
      });
    })
    .catch(err => {
      self.setState({
        blogcontent: '## Error, Blog not found.'
      });
    });
  }

  render() {
    return(<ReactMarkdown source={this.state.blogcontent} />)
  }
}

export default BlogEntry;