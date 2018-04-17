import React from 'react';
import { StyleSheet, Image, Linking } from 'react-native';
import { Text, Card, CardItem, Body, Badge, Right, Button } from 'native-base';

const PostTemplate = (props) => {
  var url;
  if (props.post.preview) {
    url = props.post.preview.images[0].source.url;
    url = url.replace(/amp;/g, '');
  }
  return (
    <Card>
      <CardItem bordered>
        <Body>
          <Text style={{ fontSize: 12 }}>r/{props.post.item.subreddit}</Text>
          <Text note style={{ fontSize: 12 }}>u/{props.post.item.author}</Text>
        </Body>
        <Right>
          <Badge style={{ backgroundColor: '#FF5700' }}>
            <Text style={{ color: 'white', fontSize: 10, marginTop: 2 }}>Score: {props.post.item.score}</Text>
          </Badge>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }} style={styles.responsiveImg} />
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>{props.post.title}</Text>
          <Text note style={{ fontSize: 14 }}>{props.post.item.selftext}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Button block onPress={() => { Linking.openURL(props.post.item.url) }} >
          <Text>Open Link</Text>
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  responsiveContainer: {
    flex: 1,
    // arbitrary width that shall not be exceeded
    width: '60%',
    // demonstrate the dimensions of the container
    backgroundColor: '#00f',
  },
  responsiveImg: {
    // Image dimensions are known: 600, 330
    aspectRatio: (600 / 400),
    // Make sure the image stretches and shrinks
    width: '100%',
    height: '100%',
    // Make sure the image doesn't exceed it's original size
    // If you want it to exceed it's original size, then
    // don't use maxWidth / maxHeight or set their
    // value to null
    maxWidth: 600,
    maxHeight: 400,
    // center horizontally
    marginLeft: 'auto',
    marginRight: 'auto',
    // make sure, the image is resized properly:
    resizeMode: 'contain',
  },
});

export default PostTemplate;
