import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {Appbar} from 'react-native-paper';

import ToDo from './ToDo';

const {width, height} = Dimensions.get('window');

export default class toDoContainer extends React.Component {
  state = {
    newToDo: '',
    todos: [],
  };

  componentWillMount() {
    this.getAsyncItem('todos');
  }

  render() {
    const {newToDo, todos} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder={'+ add a new task'}
            value={newToDo}
            returnKeyType={'done'}
            onSubmitEditing={this.addToDo}
            onChangeText={text => {
              this.setState({
                newToDo: text,
              });
            }}
          />
        </View>
        <ScrollView style={styles.sroll}>
          <ToDo
            completeToDo={this.completeToDo}
            deleteToDo={this.deleteToDo}
            editToDo={this.editToDo}
            todos={this.state.todos}
            setAsyncItem={this.setAsyncItem}
          />
        </ScrollView>
      </View>
    );
  }

  addToDo = () => {
    let todos = this.state.todos;
    let todoText = this.state.newToDo;

    if (todoText != '') {
      let todoItem = {
        text: todoText,
        isCompleted: false,
        isEditing: false,
      };

      todos.push(todoItem);

      this.setState({
        todos: todos,
        newToDo: '',
      });
    }
    //alert(JSON.stringify(this.state.todos)) //should be removed

    this.setAsyncItem('todos', JSON.stringify(this.state.todos));
  };

  deleteToDo = index => {
    let todos = this.state.todos;

    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });

    this.setAsyncItem('todos', JSON.stringify(this.state.todos));
  };

  completeToDo = index => {
    let todos = this.state.todos;

    todos[index].isCompleted = !todos[index].isCompleted;

    this.setState({
      todos: todos,
    });
    this.setAsyncItem('todos', JSON.stringify(this.state.todos));
  };

  editToDo = index => {
    let todos = this.state.todos;

    todos[index].isEditing = !todos[index].isEditing;

    this.setState({
      todos: todos,
    });

    this.setAsyncItem('todos', JSON.stringify(this.state.todos));
  };

  async setAsyncItem(key, data) {
    await AsyncStorage.setItem(key, data);
  }

  async getAsyncItem(key) {
    await AsyncStorage.getItem(key)
      .then(res => {
        if (res == null) {
          this.setState({
            todos: [],
          });
          this.setAsyncItem('todos', JSON.stringify(this.state.todos));
        } else {
          let parsedRes = JSON.parse(res);
          this.setState({
            todos: parsedRes,
          });
        }

        //alert(this.state.todos)
      })
      .catch(error => {
        alert('error occurred');
      });
  }

  async removeAsyncItem(key) {
    await AsyncStorage.removeItem(key).catch(error => {
      alert('error occurred');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
  sroll: {
    alignSelf: 'stretch',
  },
});
