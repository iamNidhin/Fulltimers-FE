import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

export default function Library({route, navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(route.params.data);
  }, [route.params.data]);

  const handleSearchInputChange = (text: string) => {
    setSearchQuery(text);

    const filterData = route.params.data.filter(
      (item: any) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.category.toLowerCase().includes(text.toLowerCase()) ||
        item.subcategory.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filterData);
  };

  const renderItem = ({item}: any) => (
    <View style={styles.ListItem}>
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            title: item.title,
            data: item.data,
            links: item.link,
            category: item.category,
          })
        }>
        <Text style={styles.ListText}>{item.title}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.Container}>
      {/* <ScrollView horizontal={true} style={styles.CupertinoFilter}>
        <View style={styles.RowSpaceBetween}>
          <Pressable
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('')}>
            <Text>All</Text>
          </Pressable>
          <Pressable
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('English')}>
            <Text>English</Text>
          </Pressable>
          <Pressable
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('Hindi')}>
            <Text>Hindi</Text>
          </Pressable>
          {route.params.type === 'Songs Library' ? (
            <>
              <Pressable
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Malayalam')}>
                <Text>Malayalam</Text>
              </Pressable>
              <Pressable
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Liturgy')}>
                <Text>Liturgy</Text>
              </Pressable>
              <Pressable
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Worship')}>
                <Text>Praise & Worship</Text>
              </Pressable>
              <Pressable
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Action Songs')}>
                <Text>Action Songs</Text>
              </Pressable>
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView> */}
      <Searchbar
        onChangeText={handleSearchInputChange}
        placeholder="Search... "
        value={searchQuery}
        style={styles.Searchbar}
        mode="view"
        showDivider={false}
        elevation={2}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={renderItem}
        style={styles.FlatListStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  Search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
  List: {
    height: '85%',
  },
  ListItem: {
    marginBottom: 5,
    width: '100%',
    height: 30,
    padding: 5,
    alignSelf: 'center',
    borderRadius: 5,
  },
  ListText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
  },
  CupertinoFilter: {
    flexDirection: 'row',
    height: '10%',
  },
  FilterChip: {
    marginLeft: 15,
    fontSize: 15,
    padding: 0,
  },
  IconStyle: {
    marginLeft: 10,
    flex: 1,
  },
  FlatListStyle: {
    padding: 10,
  },
  Searchbar: {
    backgroundColor: 'white',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    padding: 2,
    marginVertical: '5%',
    height: 35,
    minHeight: 35,
  },
  RowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
