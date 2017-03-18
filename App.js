import React from 'react';
import { StyleSheet, Text, View, Image, Button, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { NavigationButton } from './src/NavigationButton';

class MainScreen extends React.Component {
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

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    )
  }
}

export default App = TabNavigator({
  Main: {screen: MainScreen},
  Settings: {screen: SettingsScreen}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
