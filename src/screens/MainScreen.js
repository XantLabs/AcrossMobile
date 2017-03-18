import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationButton } from '../NavigationButton';

import { styles } from '../Styles';

export class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Main Screen"
  }

  constructor() {
    super();
    this.state = {}
  }

  render() {
    let imageURL = {  
      uri: "https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg"
    };

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavigationButton navigation={this.props.navigation} styleType={"SettingsButton"} name={"⚙"} link={"Settings"} />
        <StatusBar hidden={true} />
        <Image source={imageURL} style={{width:200, height:200}} />
        <Text>Hello!</Text>
        <NavigationButton navigation={this.props.navigation} styleType={"ViewQueueButton"} name={"View Queue"} link={"Queue"} />
      </View>
    );
  }  
}