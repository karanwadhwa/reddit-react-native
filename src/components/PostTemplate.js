import React from 'react';
import { Text } from 'react-native';

const PostTemplate = (props) => {
  return (
  <Text>{props.post.title}</Text>
  );
};

export default PostTemplate;
