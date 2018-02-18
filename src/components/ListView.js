import React from 'react';
import { Content } from 'native-base';
import PostTemplate from './PostTemplate';

class ListView extends React.Component {
  state = { posts: [] };

  componentWillMount() {
    fetch('https://www.reddit.com/best.json')
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children.map(data => data.data);
        this.setState({ posts })
      })
      .catch(err => console.log(err));
  }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostTemplate key={post.id} post={post} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <Content>
        {this.renderPosts()}
      </Content>
    );
  }
}

export default ListView;