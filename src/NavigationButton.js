import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const styles = StyleSheet.create({
  SettingsButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 50
  },

  ViewQueueButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    // width: 50,
    // height: 50
  }
});

export class NavigationButton extends React.Component {
  render() {
    var style = styles[this.props.styleType]

    return (
      <View style={style}>
        <Button onPress={() => { this.props.navigation.navigate(this.props.link) }} title={this.props.name} />
      </View>
    );
  }
}