import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen({navigation}:any) {
  return (
        <View style={styles.Container}>
            <Text style={styles.Welcome}>Welcome Missionary !</Text>
            <Pressable
                onPress={() => navigation.navigate('Songs')}
            >
                <View style={[styles.ImageButton,styles.shadowProp]}>
                    <Text style={styles.ImageButtonText}>Songs Library</Text>
                    <Icon name="headphones" size={30} style={{marginLeft:10}} color="black" />
                </View>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('Settings')}
            >
                <View style={[styles.ImageButton,styles.shadowProp]}>
                    <Text style={styles.ImageButtonText}>Settings</Text>
                    <Icon name="cog" size={30} style={{marginLeft:10}} color="black" />
                </View>
            </Pressable>
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
    ImageButton:{
        height:100,
        width:"100%",
        borderRadius:10,
        marginTop:50,
        backgroundColor:"white",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:1,
    },
    ImageButtonText:{
        fontSize:30,
        color:"black",
        fontWeight:"700",
        alignSelf:"center",
    },

})