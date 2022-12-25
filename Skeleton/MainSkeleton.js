import React from 'react'
import CardSkeleton from './CardSkeleton'
import {View,ScrollView} from "react-native"
function MainSkeleton() {
  return (
    <ScrollView style={{flex:1,backgroundColor:"#26262D",padding:10,}}>
    <View style={{marginVertical:10,}}>
    <CardSkeleton height={410} width={370} borderRadius={5} />
    </View>
    <View style={{marginVertical:10,marginLeft:10}}>

    <CardSkeleton height={20} width={90} borderRadius={5} />
    </View>
    <View style={{marginVertical:5,marginLeft:10}}>

    <CardSkeleton height={25} width={223} borderRadius={5}/>
    </View>
    <View style={{marginVertical:5,marginLeft:10}}>

    <CardSkeleton height={20} width={367} borderRadius={5}/>
    </View>
    <View style={{marginVertical:5,marginLeft:10,marginLeft:10}}>

    <CardSkeleton height={32} width={110} borderRadius={25} />
    </View>
    <View style={{flexDirection:"row",marginVertical:20}}>


<View style={{marginLeft:20}}>
<CardSkeleton height={60} width={60} borderRadius={50} />
</View>
<View style={{marginLeft:30}}>
<CardSkeleton height={60} width={60} borderRadius={50} />
</View>
<View style={{marginLeft:30}}>
<CardSkeleton height={60} width={60} borderRadius={50} />
</View>
<View style={{marginLeft:30}}>
<CardSkeleton height={60} width={60} borderRadius={50} />
</View>


    </View>
    </ScrollView>
  )
}

export default MainSkeleton