import PropTypes from 'prop-types';
import React, {Component } from 'react';
import ReactMarkdown from 'react-markdown';

import DisqusThread from '../disqus/DisqusThread';

import './BlogEntry.css';

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
    const { location } = this.props;

    return(<div className="blog_entry">
      <ReactMarkdown source={this.state.blogcontent.post} />
      <DisqusThread
          identifier={this.state.blogcontent.id}
          url={'https://smbell.github.io' + location.pathname}
          title={this.state.blogcontent.title} />
    </div>)
  }
}

export default BlogEntry;
