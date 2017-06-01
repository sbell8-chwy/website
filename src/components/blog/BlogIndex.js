import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Badge } from 'react-bootstrap';

import dateFormat from 'dateformat';

import './BlogIndex.css';

class BlogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
        blogData: []
    };
  }

  componentDidMount() {
    var self = this;
    import('./blogIndex.data.js')
    .then(blogIndexData => {
      self.setState({
        blogData: blogIndexData.default
      });
    });
  }

  render() {
    return(
      <div>
        {
          this.state.blogData.map(function(blog) {
            if (process.env.NODE_ENV !== 'development' && Date.now() < blog.publishTimestamp) {
              return '';
            }
            var header = (<div>
                  <h3>
                    <Link to={'/website/blog/' + blog.path}>{blog.title}</Link>
                    <Badge pullRight={true}>{dateFormat(blog.publishTimestamp, "fullDate")}</Badge>
                  </h3>
                </div>);
            return <Panel key={blog.id} header={header}>
                {blog.shortDescription}
              </Panel>;
          })
        }
      </div>
    )
  }
}

export default BlogIndex;
