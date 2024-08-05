import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View>
      <Image 
      source={require("../../assets/to-do-list.png")} 
      style ={{
        height:300,
        width:300
      }}/>
      <Text>Start adding tasks and watch your productivity soar!</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})