import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  Content,
  Grid,
  Row,
  Button,
  Icon,
  Right,
} from 'native-base';

const Filter = () => {
  return (
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
  );
};

export default Filter;