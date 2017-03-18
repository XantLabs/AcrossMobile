import React from 'react';
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
