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
        <View style={styles.ListItem}>
            <Pressable
                onPress={() => navigation.navigate('Details', {title: item.title, data: item.lyrics })}
            >
                <Text style={styles.ListText}>{item.title}</Text>
            </Pressable>
        </View>
    );


    return (
        <View style={styles.Container}>
            <TextInput
                value={searchQuery}
                onChangeText={handleSearchInputChange}
                placeholder="Search songs"
                style={[styles.ListText, styles.shadowProp, { height: 70, margin: 15, marginTop: 20, padding: 15 }]}
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
        height:50,
        padding:10,
        alignSelf: "flex-start",
        borderBottomWidth:1,
    },
    ListText: {
        fontWeight: "700",
        fontSize:20,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:1,
    },

})
