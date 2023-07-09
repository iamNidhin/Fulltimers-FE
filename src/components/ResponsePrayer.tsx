import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ResponsePrayer({route, navigation}: any) {

  const [massData,setMassData] = useState([])

  useEffect(() => {
    
    setMassData(route.params.data)
   
  }, [])
    

  return (
    <ScrollView style={styles.container}>
            {route.params.data.map((item: any) => {
                return(
                <View style={{marginBottom:15}}>
                <Text style={styles.title}>{item.title}</Text>
                {item.message?<Text style={styles.message}>({item.message})</Text>:<></>}
                {item.leader?<Text style={styles.leader}>Celebrant: {item.leader}</Text>:<></>}
                {item.response?<Text style={styles.response}>People: {item.response}</Text>:<></>}
                </View>
                )
            })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:"white"
    },
    title:{
        color:"black",
        alignSelf:"center",
        fontWeight:"700",
        fontSize:20,
        marginBottom:10,
    },
    message:{
        color:"gray",
        alignSelf:"center",
        textAlign:"justify",
        fontWeight:"600",
        fontSize:15,
    },
    leader:{
        color:"black",
        alignSelf:"center",
        textAlign:"justify",
        fontWeight:"600",
        fontSize:20,
    },
    response:{
        color:"red",
        alignSelf:"center",
        textAlign:"justify",
        fontWeight:"600",
        fontSize:20,
    }
})