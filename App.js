import React from 'react';
<<<<<<< HEAD
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
=======
import { TabNavigator } from 'react-navigation';

import { MainScreen } from './src/screens/MainScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { QueueScreen } from './src/screens/QueueScreen';

export default App = TabNavigator({
  Main: {screen: MainScreen},
  Settings: {screen: SettingsScreen},
  Queue: {screen: QueueScreen}
}, {
  navigationOptions: {
    tabBar: {
      visible: false
    }
  }
});
>>>>>>> ad356df81e657bc8689c4df246a11a745ef7c815
