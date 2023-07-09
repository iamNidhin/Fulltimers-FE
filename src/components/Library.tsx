import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Chip, Searchbar} from 'react-native-paper';

export default function Library({route, navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log(route.params.type)
    setFilteredData(route.params.data);
  }, []);

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
        <Icon
          name="play"
          size={20}
          style={{marginLeft: 10, flex: 1}}
          color="black"
        />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.Container}>
      <Searchbar
        placeholder="Search Category"
        onChangeText={handleSearchInputChange}
        value={searchQuery}
        mode="view"
        showDivider
        elevation={2}
      />
      {route.params.type=='Songs Library'?
        <View style={styles.CupertinoFilter}>
        <Chip
          icon="translate"
          style={styles.FilterChip}
          onPress={() => handleSearchInputChange('Hindi')}>
          Hindi
        </Chip>
        <Chip
          icon="translate"
          style={styles.FilterChip}
          onPress={() => handleSearchInputChange('Malayalam')}>
          Malayalam
        </Chip>
        <Chip
          icon="translate"
          style={styles.FilterChip}
          onPress={() => handleSearchInputChange('English')}>
          English
        </Chip>
      </View>
      :<></>}
      <View style={styles.List}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          style={{padding: 10}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
  },
  Search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    padding: 5,
    borderRadius: 10,
  },
  List: {
    margin: 10,
    height: '82%',
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
    padding: 10,
    justifyContent: "space-between"
  },
  FilterChip: {
    width: '30%',
  },
});
