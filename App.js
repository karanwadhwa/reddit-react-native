import React from 'react';
import { View } from 'react-native';
import { Container, Spinner } from 'native-base';
import { Font } from "expo";
import SearchBarHeader from './src/components/SearchBarHeader';
import Filter from './src/components/Filter';
import ListView from './src/components/ListView';

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
      <Container style={{ flex: 1 }}>
      <SearchBarHeader />
      <Filter />
      <ListView />
    </Container>
    );
  }
}
