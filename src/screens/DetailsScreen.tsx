import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailsScreen({ route, navigation }:any) {

  const { title ,data } = route.params;

  return (
    <View style={{marginTop:5}}>
    <Text style={[styles.TextContainer, {fontWeight:"700"}]}>{title}</Text>
    <Text style={styles.TextContainer}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    TextContainer:{
      fontSize:20,
      textAlign:"center",
      padding:15,
      },
})