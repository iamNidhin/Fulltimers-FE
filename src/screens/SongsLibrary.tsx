import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import songsData from '../dummydata/songs.json';


export default function SongsLibrary({ navigation }: any) {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState(songsData);

    const handleSearchInputChange = (text: string) => {
        setSearchQuery(text);

        const filteredData = songsData.filter(
            (song) =>
                song.title.toLowerCase().includes(text.toLowerCase()) ||
                song.category.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSongs(filteredData);
    };

    const renderSongItem = ({ item }: any) => (
        <View style={styles.ListItem}>
            <Pressable
                onPress={() => navigation.navigate('Details', { title: item.title, data: item.lyrics, links: item.links })}
            >
                <Text style={styles.ListText}>{item.title}</Text>
                <Icon name="play" size={20} style={{ marginLeft: 10, flex: 1 }} color="black" />
            </Pressable>
        </View>
    );


    return (
        <View style={styles.Container}>
            <View style={[styles.Search, { borderWidth: 0.2, borderRadius: 5 }]}>
                <TextInput
                    value={searchQuery}
                    onChangeText={handleSearchInputChange}
                    placeholder="Search songs"
                    style={[styles.ListText, { height: 50, color: "purple", flex: 5 }]}
                />
                <Icon name="search" size={20} style={{ flex: 1, marginLeft: 100 }} color="purple" />
            </View>
            <View style={styles.List}>
                <FlatList
                    data={filteredSongs}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderSongItem}
                    style={{ padding: 10 }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: "100%",
        width: "100%",
        backgroundColor: "purple"
    },
    Search: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 30,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "white"
    },
    List: {
        borderWidth: 0.2,
        borderRadius: 5,
        margin: 10,
        height: "80%",
        backgroundColor: "white"
    },
    ListItem: {
        marginBottom: 10,
        width: "100%",
        height: 50,
        padding: 10,
        alignSelf: "flex-start",
        borderBottomWidth: 1,
        borderColor: "black",
        borderRadius: 5
    },
    ListText: {
        fontWeight: "700",
        fontSize: 20,
        color: "purple"
    },

})
