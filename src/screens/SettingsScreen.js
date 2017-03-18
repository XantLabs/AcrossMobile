import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewContainer}>
          <Text style={styles.title}>Photo Resolution</Text>
          <Text style={styles.description}>Set the resolution of photos taken
          through the camera.</Text>
          <View style={styles.settingView}>
            <Text style={styles.settingText}>1920 * 1080</Text>
          </View>
            <View style={styles.buttonStyle}>
          <Button
            onPress={onButtonPress}
            title="Edit"
            accessibilityLabel=""
          />
          </View>
        </View>

        <View style={styles.viewContainer}>
        <Text style={styles.title}>Language</Text>
        <Text style={styles.description}>Change your preferred language.</Text>
        <View style={styles.settingView}>
          <Text style={styles.settingText}>English</Text>
        </View>
          <View style={styles.buttonStyle}>
            <Button
              onPress={onButtonPress}
              title="Edit"
              accessibilityLabel=""
            />
          </View>
        </View>

        <View style={styles.viewContainer}>
        <Text style={styles.title}>Region</Text>
        <Text style={styles.description}>Change your current region.</Text>
        <View style={styles.settingView}>
          <Text style={styles.settingText}>Australia</Text>
        </View>
          <View style={styles.buttonStyle}>
          <Button
            onPress={onButtonPress}
            title="Edit"
            accessibilityLabel=""
          />
          </View>
        </View>

      </View>
    )
  }
}

const onButtonPress = () => {
  console.log("Button Pressed");
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'stretch',
  },
  viewContainer: {
    flex: 1,
    margin: 15,
    padding: 10,
    position: "relative",
    backgroundColor: "#D2D7D3"
  },
  settingView: {
    backgroundColor: "white",
    marginTop: 15
  },
  settingText: {
    textAlign: "center",
    fontSize: 20,
  },
  buttonStyle: {
    position: "absolute",
    bottom: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  description: {
    fontSize: 15
  }

});
