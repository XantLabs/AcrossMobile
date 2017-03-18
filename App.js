import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import PhotoViewer from './src/PhotoViewer'

export default class App extends React.Component {
  render() {
    return (
        <PhotoViewer></PhotoViewer>
    );
  }
}
