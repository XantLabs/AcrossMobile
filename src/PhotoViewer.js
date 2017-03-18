import React, { Component } from 'react';
import { AppRegistry,Dimensions,StyleSheet, Text, Image,View, Button } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <Image style={styles.image} source = {{uri:this.props.img}}/>
    )
  }
})

class NoMoreCards extends Component {
  render() {
    return(
      <Text>No more photos available!</Text>
    )
  }
}

const Cards = [
  {img:"http://i.imgur.com/qEzKzk9.jpg"},
  {img:"http://i.imgur.com/qEzKzk9.jpg"},
  {img:"http://i.imgur.com/qEzKzk9.jpg"},
  {img:"http://i.imgur.com/qEzKzk9.jpg"},
  {img:"http://i.imgur.com/qEzKzk9.jpg"},
]

export default class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:Cards
    };
  }
  handleYup (card) {
    console.log(`Liked`)
  }
  handleNope (card) {
    console.log(`Dislike`)
  }
  render() {
    return (
      <View style={styles.imageContainer}>

      <SwipeCards
      cards={this.state.cards}

      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}

      handleYup={this.handleYup}
      handleNope={this.handleNope}
      />

      <Button
        onPress={onButtonPress}
        title="Like"
        accessibilityLabel="Like Button"
      />

      <Button
        onPress={onButtonPress}
        title="Dislike"
        accessibilityLabel="Dislike Button"
      />
      </View>
    );
  }
}

const onButtonPress = () => {
  console.log("Button Pressed");
};

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    height: 450,
    width: 350
  }
});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
