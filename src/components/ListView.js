import React from 'react';
import { FlatList } from 'react-native';
import { Content } from 'native-base';
import PostTemplate from './PostTemplate';

class ListView extends React.Component {
  state = { posts: [] };

  componentWillMount() {
    fetch('https://www.reddit.com/best.json?')
      .then(response => response.json())
      .then(data => {
        const posts = data.data.children.map(data => data.data);
        this.setState({ posts });
      })
      .catch(err => console.log(err));
  }

  renderPosts(post) {
    return <PostTemplate key={post.id} post={post} />;
  }

  render() {
    return (
      <Content padder>
        <FlatList
          data={this.state.posts}
          keyExtractor={(post) => post.id.toString()}
          renderItem={this.renderPosts}
        />
      </Content>
    );
  }
}

export default ListView;