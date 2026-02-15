import MainScreen from './components/MainScreen';
import { createStackNavigator, createAppContainer } from './App';
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator);