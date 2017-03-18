import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, StatusBar, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationButton } from '../NavigationButton';

import {takeSnapshot} from "react-native-view-shot";

import Expo from 'expo';

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

  async componentWillMount() {
    const { status } = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }  

  render() {
    console.log(this.state);

    let imageURL = {  
      uri: "https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg"
    };

    let cameraURL = {
      uri: "http://www.iconsdb.com/icons/preview/white/camera-xxl.png"
    }

    let camera = <Expo.Components.BarCodeScanner
          style={StyleSheet.absoluteFill}
          type="back"
        />;

    // this.setState({cameraRef: camera});

    imageLoc = this.state.image || "http://www.iconsdb.com/icons/preview/white/camera-xxl.png";
    var element = null;
    if (imageLoc != null) {
      element = <Image source={{uri: imageLoc}} style={{backgroundColor:'black', width:200, height:200}} />
    }

    return (
      <View ref="home" style={styles.container} collapsable={false}>
        <View ref="test" collapsable={false}>
        <Expo.Components.BarCodeScanner ref="a"
          style={{backgroundColor:"red", width:200, height:200}}
          type="back"
        />
        </View>
        <TouchableHighlight onPress={this._pickImage} style={{alignItems: 'center', position: 'absolute', bottom: 50, left: 0, right: 0}}>
          <View ref="swag" style={{height: 50, width: 50, borderRadius: 128, backgroundColor: 'black', opacity:0.7}}>
            <View style={{left: 2, top: 2, height: 46, width: 46, borderRadius: 128, backgroundColor: 'white', opacity: 0.7}}>
              
            </View>
          </View>
        </TouchableHighlight>

        <NavigationButton navigation={this.props.navigation} styleType={"SettingsButton"} name={"⚙"} link={"Settings"} />
        <StatusBar hidden={true} />

        <NavigationButton navigation={this.props.navigation} styleType={"ViewQueueButton"} name={"View Queue"} link={"Queue"} />

        {element}
      </View>
    );
  }
  
  _pickImage = async () => {
    // let result = await Expo.ImagePicker.launchCameraAsync({
    //   allowsEditing: false,
    //   aspect: [4,3]
    // });

    // console.log(result);
    console.log(this.cameraRef);
    let result = await Expo.takeSnapshotAsync(this.refs["a"], {
      format: "png",
      quality: 1,
      result: "file",
      height: 500,
      width: 500
    });
    // let result = await takeSnapshot(this.refs["swag"], {
    //   result: "file",
    //   height: 500,
    //   width: 500
    // })
    // console.log("DONE!");
    // console.log(result);
    if (result) {
      console.log(result);
      this.setState({image: result});
    }
  }
}
