import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ResponsePrayer({route}: any) {
  const [massData, setMassData] = useState([]);

  useEffect(() => {
    setMassData(route.params.data);
  }, [route.params.data]);

  return (
    <ScrollView style={styles.container}>
      {massData.map((item: any, index: number) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            {item.message ? (
              <Text style={styles.message}>({item.message})</Text>
            ) : (
              <></>
            )}
            {item.leader ? (
              <Text style={styles.leader}>Celebrant: {item.leader}</Text>
            ) : (
              <></>
            )}
            {item.response ? (
              <Text style={styles.response}>People: {item.response}</Text>
            ) : (
              <></>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 10,
  },
  message: {
    color: 'gray',
    alignSelf: 'center',
    textAlign: 'justify',
    fontWeight: '600',
    fontSize: 15,
  },
  leader: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'justify',
    fontWeight: '600',
    fontSize: 20,
  },
  response: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'justify',
    fontWeight: '600',
    fontSize: 20,
  },
  itemContainer: {
    marginBottom: 15,
  },
});
