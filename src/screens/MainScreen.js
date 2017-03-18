import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View, Image, StatusBar, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationButton } from '../NavigationButton';

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

    return (
      <View style={styles.container}>

        <Expo.Components.BarCodeScanner
          style={StyleSheet.absoluteFill}
          type="back"
        />
        <TouchableHighlight onPress={this._pickImage} style={{alignItems: 'center', position: 'absolute', bottom: 50, left: 0, right: 0}}>
          <View style={{height: 50, width: 50, borderRadius: 128, backgroundColor: 'black', opacity:0.7}}>
            <View style={{left: 2, top: 2, height: 46, width: 46, borderRadius: 128, backgroundColor: 'white', opacity: 0.7}}>
              
            </View>
          </View>
        </TouchableHighlight>

        <NavigationButton navigation={this.props.navigation} styleType={"SettingsButton"} name={"⚙"} link={"Settings"} />
        <StatusBar hidden={true} />

        <NavigationButton navigation={this.props.navigation} styleType={"ViewQueueButton"} name={"View Queue"} link={"Queue"} />

        <Image source={{uri: this.state.image || null}} style={{width:200, height:200}} />
      </View>
    );
  }
  
  _pickImage = async () => {
    // let result = await Expo.ImagePicker.launchCameraAsync({
    //   allowsEditing: false,
    //   aspect: [4,3]
    // });

    // console.log(result);

    let result = await Expo.takeSnapshotAsync();
    console.log(result);
    if (result) {
      this.setState({image: result.uri});
    }
  }
}
