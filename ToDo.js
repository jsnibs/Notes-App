import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ToDo extends Component {
  /*todosArray = this.props.todos
  state = {
    todos: todosArray
  }*/

  /*componentWillMount() {
    let todos = this.props.todos

    this.setState({
      todos: todos
    })
  }*/

  render() {
    const {todos} = this.props;
    return (
      <View style={styles.container}>
        {this.props.todos.map((todoItem, index) => {
          return (
            <View key={index} style={styles.elements}>
              <View style={styles.sectiona}>
                <TouchableOpacity
                  onPress={this.props.completeToDo.bind(this, index)}>
                  <View
                    style={[
                      styles.circle,
                      todoItem.isCompleted
                        ? styles.completeCircle
                        : styles.uncompleteCircle,
                    ]}
                  />
                </TouchableOpacity>

                {todoItem.isEditing ? (
                  <TextInput
                    style={styles.input}
                    placeholder={todoItem.text}
                    value={todoItem.text}
                    onChangeText={text => {
                      todos[index].text = text;
                    }}
                  />
                ) : (
                  <Text style={styles.text}>{todoItem.text}</Text>
                )}
              </View>

              <View style={styles.sectionb}>
                {todoItem.isEditing ? (
                  <View style={styles.buttongrp}>
                    <TouchableOpacity
                      onPress={this.props.editToDo.bind(this, index)}>
                      <Text style={[styles.text, styles.btn]}>✅</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.buttongrp}>
                    <TouchableOpacity
                      onPress={this.props.editToDo.bind(this, index)}>
                      <Text style={[styles.text, styles.btn]}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.props.deleteToDo.bind(this, index)}>
                      <Text style={[styles.text, styles.btn]}>❌</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 15,
  },
  elements: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.25,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 5,
    borderColor: '#e57e86',
  },
  completeCircle: {
    borderColor: '#bbb',
  },
  uncompleteCircle: {
    borderColor: '#e57e86',
  },
  text: {
    color: '#444444',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buttongrp: {
    flexDirection: 'row',
  },
  btn: {
    paddingHorizontal: 10,
  },
  sectiona: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  sectionb: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  input: {
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    backgroundColor: '#e0ded0',
    fontSize: 14,
    width: width / 1.4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignSelf: 'stretch',
    paddingLeft: 5,
  },
});
