import React, { Component } from 'react';
import { AppRegistry,Dimensions,StyleSheet, Text, Image,View, Button, TouchableHighlight } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <Image resizeMode='contain' style={styles.image} source = {{uri:this.props.img}}/>
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
  {img:"http://i.imgur.com/qEzKzk9.jpg",id:1},
  {img:"http://i.imgur.com/8OXR0a5.jpg",id:2},
  {img:"http://i.imgur.com/USrrDph.jpg",id:3},
  {img:"http://imgur.com/4YsfeYp.jpg",id:4},
  {img:"http://i.imgur.com/qEzKzk9.jpg",id:5},
]

export default class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:this.getImages()
    };
  }
  handleYup (card) {
    console.log(`Liked`)
  }
  handleNope (card) {
    console.log(`Dislike`)
  }

  //Return an array of images
  getImages() {
    return Cards
  }

  onButtonPress() {
    console.log(this.refs["swipecard"]);
    this.setState({
      cards: this.state.cards.splice(0,1)
    })
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.imageContainer}>
          <SwipeCards
          cards={this.state.cards}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          ref = "swipecard"
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.dislikeButton}
            onPress={this.onButtonPress.bind(this)}
            accessibilityLabel="Dislike Button"
          >
              <Text style={styles.icon}>✖</Text>
          </TouchableHighlight>
          <View style={styles.space}>

          </View>

          <TouchableHighlight
            style={styles.likeButton}
            onPress={this.onButtonPress.bind(this)}
            accessibilityLabel="Like Button"
          >
              <Text style={styles.icon}>✔</Text>
          </TouchableHighlight>




        </View>
      </View>
    );
  }


}

var {height,width} = Dimensions.get('window');
var styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F2F1EF'
  },
  imageContainer: {
    flex: 0.7,
    alignItems: 'stretch',
    borderRadius: 500
  },
  image: {
    height: height*0.8,
    width: width*0.8,
    backgroundColor: '#333'
  },
  buttonContainer: {
    flex: 0.125,
    flexDirection: 'row',
    justifyContent: 'center',

  },

  likeButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'green',
    alignItems: 'center',
  },

  dislikeButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'red',
    alignItems: 'center'
  },

  space: {
    width: 40
  },

  icon: {
    color: '#F2F1EF',
    fontSize: 30
  }

});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
