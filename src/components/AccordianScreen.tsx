import * as React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {List} from 'react-native-paper';

const AccordianScreen = ({route}: any) => {
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setFilteredData(route.params.data);
  }, [route.params.data]);

  const renderItem = ({item}: any) => (
    <List.Accordion
      title={item[0].subcategory}
      // left={props => <List.Icon {...props} icon="folder" />}
      titleStyle={styles.accordionTitle}>
      {item.map((element: any) => (
        <>
          <List.Item
            key={element.id}
            title={element.title}
            titleStyle={styles.itemTitle}
          />
          <Text style={styles.itemText}>{element.data}</Text>
        </>
      ))}
    </List.Accordion>
  );

  return (
    <FlatList
      data={filteredData}
      // keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
  accordionTitle: {
    fontWeight: '700',
    fontSize: 21,
  },
  itemTitle: {
    fontWeight: '700',
    fontSize: 20,
  },
  itemText: {
    fontSize: 15,
    textAlign: 'justify',
    padding: 10,
    color: 'black',
  },
});

export default AccordianScreen;
