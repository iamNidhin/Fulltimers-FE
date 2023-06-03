import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function MenuComponentWide(props: any) {
    return (
        <Pressable
            onPress={() => props.navigation.navigate("Library", {data:props.data})}>
            <View style={[styles.ImageButton, styles.shadowProp]}>
                <Text style={styles.ImageButtonText}>{props.label}</Text>
                <Icon name={props.icon} size={30} style={{ marginLeft: 10 }} color="black" />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ImageButton: {
        height: 100,
        width: "100%",
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
    },
    ImageButtonText: {
        fontSize: 30,
        color: "black",
        fontWeight: "700",
        alignSelf: "center",
    },

})