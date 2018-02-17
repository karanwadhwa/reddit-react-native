import React from 'react';
import { StyleSheet, Platform, StatusBar, Text, View } from 'react-native';
import { Spinner, Container, Header, Title, Content, Body, Right, Left, Icon, Button } from 'native-base';
import { Font } from "expo";

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