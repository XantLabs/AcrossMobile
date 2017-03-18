import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import { MainScreen } from './src/screens/MainScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { QueueScreen } from './src/screens/QueueScreen';
import PhotoViewer from './src/PhotoViewer';

export default App = TabNavigator({
  Main: {screen: MainScreen},
  Settings: {screen: SettingsScreen},
  Queue: {screen: PhotoViewer}
}, {
  navigationOptions: {
    tabBar: {
      visible: false
    }
  }
});
