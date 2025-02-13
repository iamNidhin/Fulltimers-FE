import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Chip, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        <Icon name="play" size={20} style={styles.IconStyle} color="black" />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.Container}>
      <Searchbar
        placeholder="Search Category"
        onChangeText={handleSearchInputChange}
        value={searchQuery}
        style={styles.Searchbar}
        mode="view"
        showDivider
        elevation={2}
      />
      <ScrollView horizontal={true} style={styles.CupertinoFilter}>
        <View style={styles.RowSpaceBetween}>
          <Chip
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('')}>
            All
          </Chip>
          <Chip
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('English')}>
            English
          </Chip>
          <Chip
            style={styles.FilterChip}
            onPress={() => handleSearchInputChange('Hindi')}>
            Hindi
          </Chip>
          {route.params.type === 'Songs Library' ? (
            <>
              <Chip
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Malayalam')}>
                Malayalam
              </Chip>
              <Chip
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Liturgy')}>
                Liturgy
              </Chip>
              <Chip
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Worship')}>
                Praise & Worship
              </Chip>
              <Chip
                style={styles.FilterChip}
                onPress={() => handleSearchInputChange('Action Songs')}>
                Action Songs
              </Chip>
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      <View style={styles.List}>
        <FlatList
          data={filteredData}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={renderItem}
          style={styles.FlatListStyle}
        />
      </View>
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
    margin: 30,
    padding: 5,
    borderRadius: 10,
  },
  List: {
    margin: 10,
    height: '80%',
  },
  ListItem: {
    marginBottom: 10,
    width: '100%',
    height: 50,
    padding: 10,
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  ListText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  CupertinoFilter: {
    flexDirection: 'row',
    marginBottom: 5,
    height: 130,
    padding: 10,
  },
  FilterChip: {
    marginLeft: 15,
    height: 40,
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
  },
  RowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
