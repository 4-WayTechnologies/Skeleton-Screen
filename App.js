import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainSkeleton from './Skeleton/MainSkeleton'

const App = () => {
  return (
    <View style={styles.container}>
    
    <MainSkeleton/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})