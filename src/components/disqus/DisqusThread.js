import PropTypes from 'prop-types';
import React, {Component} from 'react';

class DisqusThread extends Component {
  static propTypes = {
    identifier: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  componentDidMount() {
    var d = document, s = d.createElement('script');
    s.src = 'https://smbell-github-io-website.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  render() {
    return (
      <div {...this.props}>
        <div id="disqus_thread"/>
      </div>)
  }
};

export default DisqusThread;

/*
    var disqus_config = function () {
      this.page.url = 'https://smbell.github.io' + location.pathname;
      this.page.identifier = this.state.blogcontent.id;
      this.page.title = this.state.blogcontent.title;
    }
      <div id="disqus_thread"></div>
      <script>
      (function() { // DON'T EDIT BELOW THIS LINE
      })();
      </script>
 */
