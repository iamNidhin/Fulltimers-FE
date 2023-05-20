import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import songsData from '../dummydata/songs.json';


export default function SongsLibrary({ navigation }: any) {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState(songsData);

    const handleSearchInputChange = (text: string) => {
        setSearchQuery(text);

        const filteredData = songsData.filter(
            (song) =>
                song.title.toLowerCase().includes(text.toLowerCase()) ||
                song.artist.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSongs(filteredData);
    };

    const renderSongItem = ({ item }: any) => (
        <View style={[styles.ListItem,styles.shadowProp]}>
            <Pressable
                onPress={() => navigation.navigate('Details', { data: item.lyrics })}
            >
                <Text style={styles.ListText}>{item.id}{') '}{item.title}</Text>
            </Pressable>
        </View>
    );


    return (
        <View style={styles.Container}>
            <TextInput
                value={searchQuery}
                onChangeText={handleSearchInputChange}
                placeholder="Search songs"
                style={[styles.ListText, { height: 50, marginBottom: 20, marginTop: 20, padding: 10 }]}
            />
            <FlatList
                data={filteredSongs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderSongItem}
                style={{ padding: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: "100%",
        width: "100%",
    }
    ,
    ListItem: {
        marginBottom: 10,
        width:"100%",
        height:40,
        padding:5,
        alignSelf: "flex-start",
    },
    ListText: {
        fontWeight: "700",
        color: "#841584",
        fontSize:20,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:3,
    },

})
