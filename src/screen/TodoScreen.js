import { StyleSheet, TextInput, View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper';


const todoItems=[
    {
        id:"01",
        title:"Complete Project",
    },
    {
        id:"02",
        title:"Do Laundry",
    },
];

const TodoScreen = () => {
    const renderTodos =({item, index}) =>{
        return (
            <View style={{
                backgroundColor: "#B3B3F1",
                borderRadius: 6,
                paddingHorizontal:6,
                paddingVertical: 12,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: "center",
            }}>
                
                <Text style= {{
                    fontSize: 15,
                    fontWeight:"500",
                    flex: 1

                }}>{item.title}
                </Text>
                <IconButton icon="pencil" iconColor='#6A605C'></IconButton>
                <IconButton icon="trash-can" iconColor='#6A605C'></IconButton>
            </View>
        )
    }
  return (
    <View style={{marginHorizontal:16}}>
      <TextInput style = {{
        borderWidth:2,
        borderColor: "#1e90ff", 
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical:6
        }}
        placeholder ="Add a task">
        </TextInput>
        <TouchableOpacity style={{
            backgroundColor: '#B33951', 
            borderRadius:6, 
            paddingVertical:8, 
            marginVertical: 34, 
            alignItems: "center"}}>

            <Text style={{color:'#fff', fontWeight: "bold", fontSize:15}}>Add</Text>
        </TouchableOpacity>
        {/* {Render ToDo List} */}
        <FlatList data = {todoItems} renderItem = {renderTodos}></FlatList>
        
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})