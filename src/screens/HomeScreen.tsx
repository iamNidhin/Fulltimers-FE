import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MenuComponentWide from '../components/MenuComponentWide';

import songsData from '../dummydata/songs.json';
import prayerData from '../dummydata/prayers.json';

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.Container}>
            <Text style={styles.Welcome}>Welcome Missionary !</Text>
            <ScrollView>
                <MenuComponentWide navigation={navigation} label="Songs Library" icon="headphones" data={songsData} />
                <MenuComponentWide navigation={navigation} label="Prayer Book" icon="book" data={prayerData} />
                <MenuComponentWide navigation={navigation} label="Settings" icon="cogs" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        padding: 15,
        height: "100%",
    },
    Welcome: {
        marginTop: 20,
        fontSize: 50,
        color: "black",
    },

})