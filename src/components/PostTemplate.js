import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Card, CardItem, Body, Badge, Right, } from 'native-base';

const PostTemplate = (props) => {
  var img;
  var imgHeight;
  if (props.post.preview) {
    img = props.post.preview.images[0].source.url;
    img = img.replace(/amp;/g, '');
    imgHeight = props.post.preview.images[0].resolutions[0].height
  }
  console.log(img);
  return (
    <Card>
      <CardItem bordered>
        <Body>
          <Text style={{ fontSize: 12 }}>r/{props.post.subreddit}</Text>
          <Text note style={{ fontSize: 12 }}>u/{props.post.author}</Text>
        </Body>
        <Right>
          <Badge style={{ backgroundColor: '#FF5700' }}>
            <Text style={{ color: 'white', fontSize: 10, marginTop: 2 }}>Score: {props.post.score}</Text>
          </Badge>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: img }} style={styles.responsiveImg} />
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.post.title}</Text>
          <Text note style={{ fontSize: 14 }}>{props.post.selftext}</Text>
        </Body>
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
