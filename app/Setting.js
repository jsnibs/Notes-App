/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button, Appbar} from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Settings" style={styles.heading} />
        </Appbar.Header>
        <View style={styles.baseContainer}>
          <TouchableOpacity style={styles.settingTab}>
            <Text style={styles.settingText}>Delete all notes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingTab}>
            <Text style={styles.settingText}>Enable Sharing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingTab}>
            <Text style={styles.settingText}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingTab}>
            <Text style={styles.settingText}>About Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingTab}>
            <Text style={styles.settingText}>About App</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.welcome}>Feedback</Text>
            <TextInput
              style={{height: 40, marginTop: 15, backgroundColor: '#e6e6e6'}}
              onChangeText={text => console.log(text)}
              placeholder="Title"
            />
            <TextInput
              style={{
                height: 120,
                marginTop: 5,
                backgroundColor: '#e6e6e6',
                textAlignVertical: 'top',
              }}
              onChangeText={text => console.log(text)}
              placeholder="Suggest a feedback"
              multiline={true}
              numberOfLines={4}
            />
            <View style={{margin: 5}}>
              <Button mode="outlined" onPress={() => console.log('Pressed')}>
                Send Feedback
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  baseContainer: {
    padding: 10,
  },
  welcome: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'left',
  },
  instructions: {
    marginVertical: 10,
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'left',
  },
  settingTab: {
    height: 50,
    justifyContent: 'center',
    borderBottomColor: '#0d0d0d',
    borderBottomWidth: 0.3,
  },
  settingText: {
    fontSize: 16,
  },
  heading: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'transparent',
  },
});
