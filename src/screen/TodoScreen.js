import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";
import Button from "../components/Button";
import Footer from "../components/Footer"

const TodoScreen = () => {
  // Initilaise local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]); // state variable = todoList and function to update it = setTodoList
  const [editId, setEditId] = useState(null); // editTodo - to keep track of the current item being edited

  // handle AddToDo
  const handleAddTodo = () => {
    // don't do anything if the task is empty
    if (todo === "") {
      return;
    }

    // Update the todoList state with the new todo item
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]); // creating a new array with the added item
    setTodo("");
  };

  // handle delete ToDo
  const handleDelete = (id) => {
    // show all the todos except the one that the user has clicked on to delete
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // handle editing the Todo List Item
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setTodo(todo.title);
  };

  // handle updating the edited todolist
  const handleUpdateTodo = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === editId) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setEditId(null);
    setTodo(""); // to clear the input field once done
  };
  // render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#B3B3F1",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            flex: 1,
          }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#6A605C"
          onPress={() => handleEdit(item)}
        ></IconButton>
        <IconButton
          icon="trash-can"
          iconColor="#6A605C"
          onPress={() => handleDelete(item.id)}
        ></IconButton>
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editId ? (
        // a reusable button that takes title, onPress, and style as props
        <Button title="Save" onPress={handleUpdateTodo} />
      ) : (
        <Button title="Add" onPress={handleAddTodo} />
      )}

      {/* {Render ToDo List} */}
      <FlatList data={todoList} renderItem={renderTodos}></FlatList>
      
      {todoList.length <= 0 && <Fallback />}

      
      <Footer></Footer>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
