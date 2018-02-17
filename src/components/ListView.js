import React from 'react';
import { View } from 'react-native';
import { Content, Text } from 'native-base';

class ListView extends React.Component {
  state = { posts: [] };

  componentWillMount() {
    fetch('https://www.reddit.com/best.json')
      .then(response => response.json())
      .then(data => {
        var posts = data.data.children.map(data => data.data);
        this.setState({ posts })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <Content>
        <Text> Posts </Text>
      </Content>
    );
  }
}

export default ListView;