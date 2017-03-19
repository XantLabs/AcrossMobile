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

import NativeModules from 'NativeModules';
import ReactNativeI18n from 'react-native-i18n';

import { apikey, serverAddress } from '../apikey';

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
      // cards:this.getImages(),
      lang: null,
      newPhotos: null
    };
  }


  componentDidMount() {
      var lang = ReactNativeI18n.locale;
      this.setState({lang});

      navigator.geolocation.getCurrentPosition( (position) => {
       var initialPosition = position;
       this.setState({initialPosition});
       console.log("Got location!");
        this.getPhotos();

      }, (error) => alert(JSON.stringify(error)));

      // this.setState({
      //   cards: this.getImages()
      // })
  }


  getPhotos() {
    var url = serverAddress + "/api/photo_list";

    console.log("Starting getPhotos function.");

    var body = new FormData();
    body.append('apikey', apikey);
    body.append('userLat', this.state.initialPosition.coords.latitude);
    body.append('userLon', this.state.initialPosition.coords.longitude);
    body.append('n', 20);

    xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.onreadystatechange = function() {
      console.log(xhr.readyState, xhr.status);
      if(xhr.readyState == 4 && xhr.status == 200) {
          console.log(xhr.responseText);
          var newPhotos = JSON.parse(xhr.responseText);
          console.log(newPhotos);
          this.setState({newPhotos: newPhotos.images});

          var cards = [];
          for (var index = 0; index < newPhotos.length; index++) {
            cards.push({ img: serverAddress +"/api/media/"+ newPhotos[index]["img"]});
          }

          console.log("CARDS", cards);

          this.setState({cards});
      }
    }.bind(this);

    xhr.send(body);
  }

  handleYup (card) {
    console.log(`Liked`)
  }
  handleNope (card) {
    console.log(`Dislike`)
  }

  onButtonPress(isLike) {
    console.log(this.state);
    var temp = this.state.cards;
    var currentCard = temp[0];
    this.setState({
      cards: this.state.cards.slice(1)
    });
    (isLike) ? this.handleYup(currentCard) : this.handleNope(currentCard);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.imageContainer}>
          <SwipeCards
          cards={this.state.cards}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.dislikeButton}
            onPress={this.onButtonPress.bind(this, false)}
            accessibilityLabel="Dislike Button"
          >
              <Text style={styles.icon}>x</Text>
          </TouchableHighlight>
          <View style={styles.space}>

          </View>

          <TouchableHighlight
            style={styles.likeButton}
            onPress={this.onButtonPress.bind(this, true)}
            accessibilityLabel="Like Button"
          >
              <Text style={styles.icon}>✓</Text>
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
    backgroundColor: "transparent",
    flex: 0.125,
    flexDirection: 'row',
    justifyContent: 'center',

  },

  likeButton: {
    opacity: 1,
    width: 80,
    height: 80,
    justifyContent: 'center',
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  dislikeButton: {
    opacity: 1,
    width: 80,
    height: 80,
    justifyContent: 'center',
    borderRadius: 40,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },

  space: {
    width: 40
  },

  icon: {
    color: '#F2F1EF',
    fontSize: 35
  }

});

AppRegistry.registerComponent('PhotoViewer', () => PhotoViewer);
