import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  SettingsButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 50,
    opacity: 0.4
  },

  ViewQueueButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.4
    // width: 50,
    // height: 50
  }  
});