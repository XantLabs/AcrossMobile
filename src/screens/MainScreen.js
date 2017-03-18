import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, StatusBar, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationButton } from '../NavigationButton';

import {takeSnapshot} from "react-native-view-shot";

// import Expo from 'expo';

import Camera from "react-native-camera";

import { styles } from '../Styles';

export class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Main Screen"
  }

  constructor() {
    super();
    this.state = {
      image: null,
      hasCameraPermission: null,
      cameraRef: null
    }
  }

  // async componentWillMount() {
  //   // const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA);
  //   // this.setState({hasCameraPermission: status === 'granted'});
  // }  

  render() {
    console.log(this.state);

    let imageURL = {  
      uri: "https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg"
    };

    var imageOn = null;

    if (this.state.image != null) {
      imageOn = <View style={{width: 50, height: 50, position: 'absolute', left: 10, top: 10}}>
        <Button onPress={this.clearImage.bind(this)} title="X" />
      </View>
    }

    return (
      <View style={styles.container} collapsable={false}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={StyleSheet.absoluteFill}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
          captureQuality={"480p"}
          orientation={"portrait"}
          >
        </Camera>

        <Image source={{uri: this.state.image}} style={StyleSheet.absoluteFill} />

        {imageOn}
        
        <TouchableHighlight onPress={this.takePicture.bind(this)} style={{ zIndex: 2, alignItems: 'center', position: 'absolute', bottom: 50, left: 0, right: 0}}>
          <View style={{height: 50, width: 50, borderRadius: 128, backgroundColor: 'black', opacity:0.7}}>
            <View style={{left: 2, top: 2, height: 46, width: 46, borderRadius: 128, backgroundColor: 'white', opacity: 0.7}}>
              
            </View>
          </View>
        </TouchableHighlight>

        <NavigationButton navigation={this.props.navigation} styleType={"SettingsButton"} name={"⚙"} link={"Settings"} />
        <StatusBar hidden={true} />

        <NavigationButton navigation={this.props.navigation} styleType={"ViewQueueButton"} name={"View Queue"} link={"Queue"} />
      </View>
    );
  }
  
  clearImage() {
    this.setState({image:null});
  }

  takePicture() {
    this.camera.capture()
      .then((data) => this.setState({image:data.path}))
      .catch(err => console.error(err));
  }
}