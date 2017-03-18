import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, StatusBar, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationButton } from '../NavigationButton';

import Camera from "react-native-camera";

import NativeModules from 'react-native-image-to-base64';

import { styles } from '../Styles';

export class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Main Screen"
  }

  constructor() {
    super();
    this.state = {
      image: null,
      hasCameraPermission: null
    }
  }

  render() {
    console.log(this.state);

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
          captureQuality={"720p"}
          orientation={"portrait"}
          >
        </Camera>

        <Image source={{uri: this.state.image}} style={StyleSheet.absoluteFill} />

        {imageOn}
        
        { this.state.image == null && <TouchableHighlight onPress={this.takePicture.bind(this)} underlayColor={null} style={{ zIndex: 2, alignItems: 'center', position: 'absolute', bottom: 50, left: 0, right: 0}}>
          <View style={{height: 50, width: 50, borderRadius: 128, backgroundColor: '#232528', opacity:0.7}}>
            <View style={{left: 2, top: 2, height: 46, width: 46, borderRadius: 128, backgroundColor: 'white', opacity: 0.7}}>
              
            </View>
          </View>
        </TouchableHighlight> }

        <NavigationButton navigation={this.props.navigation} styleType={"SettingsButton"} name={"⚙"} link={"Settings"} />
        
        <StatusBar hidden={false} />

        { this.state.image == null && <NavigationButton navigation={this.props.navigation} styleType={"ViewQueueButton"} name={"View Queue"} link={"Queue"} /> }
      </View>
    );
  }
  
  async sendImage() {
    var url = "http://<SOME_IP>/api/upload";
    let file = NativeModules.RNImageToBase64.getBase64String(uri, (err, base64) => {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          file: base64,
          lat: "Lat",
          lon: "Long",
          caption: "",
          language: "en_us",
          apikey: "ApiKey"
        })
      });

      let responseJson = await response.json();
    })
  }

  clearImage() {
    this.setState({image:null});
  }

  takePicture() {
    this.camera.capture()
      .then((data) => { 
        this.setState({image:data.path});
      })
    }
}