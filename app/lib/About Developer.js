/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{textAlign: 'justify'}}>
          <Text style={styles.welcome}>
            About Developer{' '}
            <Icon name="studiovinari" size={25} color="#000000" />
          </Text>
          <Text style={styles.instructions}>
            Hey! I am James, I develop as a hobby and I am trying my hands on
            making apps for the first time. It is my hope that I make apps that
            is extremely useful for regular people ...and get some little
            donation doing so.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  welcome: {
    fontSize: 16,
    margin: 5,
    textAlign: 'left',
  },
  instructions: {
    margin: 5,
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'left',
  },
  settingTab: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
});
