/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  BackHandler,
  FlatList,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {connect} from 'react-redux';

import NewNote from './view_newNote';
import SingleNote from './view_singleNote';
import NotesViewCard from '../lib/NotesViewCard';
import AddNoteButton from '../lib/AddNoteButton';
import {deleteNote} from '../actions';
import {styles} from './styles';
import {getColor} from '../lib/helpers';

class AllNotes extends Component {
  constructor(props) {
    super(props);

    this._handleBackButton = this._handleBackButton.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this._handleBackButton,
    );
  }

  _handleBackButton() {
    if (this.props.navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <View style={styles.allNotesContainer}>
        <StatusBar
          backgroundColor="#ffffff"
          barStyle="light-content"
          animated={true}
        />
        <Appbar.Header style={styles.header}>
          <Appbar.Content title="Notes" style={styles.heading} />
        </Appbar.Header>

        {this.renderList()}

        <AddNoteButton onBtnPress={this.addNewNote.bind(this)} />
      </View>
    );
  }

  addNewNote() {
    this.props.navigator.push({component: NewNote, type: 'addingNote'});
  }

  goToNote(noteId, title, description) {
    this.props.navigator.push({
      component: SingleNote,
      type: 'editingNote',
      passProps: {noteId, title, description},
    });
  }

  longPressNote(noteId) {
    Alert.alert('Delete Note', 'Do you want to delete this note?', [
      {text: 'YES', onPress: () => this.deleteNote(noteId)},
      {text: 'No'},
    ]);
  }

  deleteNote(noteId) {
    this.props.deleteNote(noteId);
  }

  renderList() {
    if (this.props.notes.length <= 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Image
            style={styles.imageContainer}
            source={require('../assets/addDocument.png')}
            resizeMode="contain"
          />
          <Text style={styles.emptyList}>nothing in Notes ...for now</Text>

          <Text>
            {this.props.notes.map(note => (
              <Text>{note.title.toUpperCase()}</Text>
            ))}
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.notes}
          renderItem={({item}) => (
            <NotesViewCard
              title={item.title}
              description={item.description}
              id={item.id}
              onPressBtn={this.goToNote.bind(this)}
              onLongPressBtn={this.longPressNote.bind(this)}
            />
          )}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {notes: state.allNotes};
}

export default connect(
  mapStateToProps,
  {deleteNote},
)(AllNotes);
