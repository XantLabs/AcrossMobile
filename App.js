import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import { SnapchatImageView } from './snapimageview';

class Snap extends React.Component {
  componentDidMount() {
    console.log("mounted");
    console.log(this);
  }

  passResultsUp() {
    console.log(this);
    this.props.buttonCallback(1);
  }

  render() {
    return <View>
      <Text>{this.props.text}</Text>
      <Button onPress={this.passResultsUp.bind(this)} title="Hehe" />
    </View>
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }
  
  process(data) {
    console.log("ye");
    this.setState({num:data})
  }

  render() {
    let imageURL = {  
      uri: "https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg"
    };

    return (
      <View style={styles.container}>
        <Snap buttonCallback={this.process.bind(this)} text={this.state.num} />
        <Image source={imageURL} style={{width:200, height:200}} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
