import React, { Component } from "react";
import { StyleSheet, Platform, Text } from 'react-native';
import { Icon } from 'native-base';

export default class MainScreen extends Component {

  // navigationOptions
  static navigationOptions = {
    HeaderLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,

  }
  render() {
    return (
      <view style={styles.container}>
        <Text>MainScreen</Text>
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})