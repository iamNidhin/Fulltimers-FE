import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function MenuComponentWide(props: any) {
    return (
        <Pressable
            onPress={() => props.navigation.navigate(props.type, {data:props.data})}>
            <View style={[styles.ImageButton, styles.shadowProp]}>
                <Image style={styles.Image} source={{uri:props.url}}/>
                <Text style={styles.ImageButtonText}>{props.label}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ImageButton: {
        width : '100%',
        height : 200,
        marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        overflow : 'hidden'
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 8 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 7,
    },
    ImageButtonText: {
        fontSize: 30,
        color: "black",
        fontWeight: "700",
        alignSelf: "center",
    },
    Image:{
        width : '100%',
        height : '70%',
        marginBottom: 10,
    }

})