import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

import { styles } from './Styles';

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