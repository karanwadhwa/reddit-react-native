import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import { Container, Header, Title, Content, Body, Right, Left, Icon, Button } from 'native-base';
import { Font } from "expo";

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>{/*
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left> */}
          <Body>
            <Title>reddit-client</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
        android: {
          // avoid statusbar overlap in android
          marginTop: StatusBar.currentHeight
        }
    })
  },
  header: {
    backgroundColor: "#FF5700",
  },
})