import React, { Component } from 'react';
import { AppRegistry,Dimensions,StyleSheet, Text, Image,View, Button } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

let PhotoCard = React.createClass({
  render() {
    return (
      <Image style={styles.image} source = {{uri:this.props.img}}/>
    )
  }
})

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
    this.state = {cards:Cards};
  }
  handleYup (card) {
    console.log(`Yup`)
  }
  handleNope (card) {
    console.log(`Nope`)
  }
  render() {
    return (
      <View style={styles.imageContainer}>

      <SwipeCards
      cards={this.state.cards}

      renderCard={(cardData) => <PhotoCard {...cardData} />}
      // renderNoMoreCards={() => <NoMoreCards />}

      handleYup={this.handleYup}
      handleNope={this.handleNope}
      />

      <Button
        onPress={onButtonPress}
        title="Like"
        accessibilityLabel="See an informative alert"
      />

      <Button
        onPress={onButtonPress}
        title="Dislike"
        accessibilityLabel="See an informative alert"
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
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
