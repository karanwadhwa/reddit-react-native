import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import {
  Container, Header, Title, Body,
  Right, Left, Icon, Button, Spinner, Input, Item,
  Card, CardItem, } from 'native-base';
import { Font } from "expo";
import{ getStatusBarHeight } from 'react-native-status-bar-height';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Spinner color='#FF5700'/>
        </View>
      );
    }
    return (
      <Container style={styles.container}>
      <Header searchBar rounded style={styles.header}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    </Container>
    );
  }
}
console.log(getStatusBarHeight());
const styles = StyleSheet.create({
  container: {
    flex: 1,
/*     ...Platform.select({
        android: {
          // avoid statusbar overlap in android
          paddingTop: StatusBar.currentHeight
        }
    }) */
  },
  header: {
    backgroundColor: "#FF5700",
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
})