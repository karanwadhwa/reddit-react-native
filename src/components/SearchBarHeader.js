import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  Header,
  Item,
  Button,
  Input,
  Icon,
} from 'native-base';
import{ getStatusBarHeight } from 'react-native-status-bar-height';

const SearchBarHeader = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF5700",
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
})

export default SearchBarHeader;