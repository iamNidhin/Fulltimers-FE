import React from 'react';
import {Linking, ScrollView, StyleSheet, Text} from 'react-native';

export default function DetailsScreen({route}: any) {
  const {title, data, links, category} = route.params;

  return (
    <ScrollView style={styles.ScrollView}>
      {title?.length > 1 ? (
        <Text style={[styles.TextContainer1, styles.TitleText]}>{title}</Text>
      ) : (
        <></>
      )}
      {data?.length > 1 ? (
        <Text
          style={
            category == 'Prayer' ? styles.TextContainer2 : styles.TextContainer1
          }>
          {data}
        </Text>
      ) : (
        <></>
      )}
      <Text />
      {links?.length > 1 ? (
        <Text
          style={[styles.TextContainer1, styles.LinkText]}
          onPress={() => Linking.openURL(links)}>
          Click here to watch video
        </Text>
      ) : (
        <></>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextContainer1: {
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
    color: 'black',
    fontWeight: '500',
  },
  TextContainer2: {
    fontSize: 20,
    textAlign: 'justify',
    padding: 15,
    color: 'black',
    fontWeight: '500',
  },
  TitleText: {
    fontWeight: '700',
    fontSize: 30,
    marginTop: 20,
    color: 'red',
  },
  ScrollView: {
    height: '100%',
    backgroundColor: 'white',
  },
  LinkText: {
    color: 'red',
  },
});
