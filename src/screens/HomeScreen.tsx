import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuComponentWide from '../components/MenuComponentWide';

export default function HomeScreen({navigation}:any) {
  return (
        <View style={styles.Container}>
            <Text style={styles.Welcome}>Welcome Missionary !</Text>
            <ScrollView>
            <MenuComponentWide navigation={navigation} label="Prayer Book" icon="book"/>
            <MenuComponentWide navigation={navigation} label="Songs Library" icon="headphones"/>
            <MenuComponentWide navigation={navigation} label="Jesus Youth" icon="fire"/>
            <MenuComponentWide navigation={navigation} label="Settings" icon="cogs"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        padding:15,
        backgroundColor:"purple",
        height:"100%",
    },
    Welcome:{
        marginTop:20,
        fontSize:50,
        color:"white",
    },

})