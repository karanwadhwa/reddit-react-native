import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import {
  Container, Header, Title, Body, Content, Grid, Row,
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
          <Icon name="logo-reddit" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
          <Grid>
            <Row style={{ backgroundColor: '#EFEFED', height: 45 }}>
              <Button iconLeft transparent style={{ paddingRight: 25 }}>
                <Icon name='ios-funnel' style={{ fontSize: 20, color: '#A5A4A4', paddingRight: 10 }} />
                <Text>Sort</Text>
              </Button>
              <Button iconLeft transparent style={{ paddingRight: 25 }}>
                <Icon name='md-list' style={{ fontSize: 25, color: '#A5A4A4', paddingRight: 10 }} />
                <Text>List</Text>
              </Button>
              <Right>
                <Button iconLeft transparent style={{ paddingRight: 25 }}>
                  <Icon name='ios-code' style={{ fontSize: 25, color: '#A5A4A4', marginRight: -10 }} />
                </Button>
              </Right>
            </Row>
          </Grid>
        </Content>
    </Container>
    );
  }
}
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