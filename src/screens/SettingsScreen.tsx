import React, { useEffect, useState } from 'react';
import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import { getAnnouncements } from '../api/messageApi';

export default function SettingsScreen() {

  interface data {
    title: string,
    message: string,
    links: string,
  }

  const [data,setData] = useState([])

  const getData = async () => {
    const res = await getAnnouncements() as unknown
    setData(res);
  } 

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <ScrollView style={styles.Container}>
      <Text style={[styles.ImageButtonText,{color:"#05445E", fontWeight:"600"}]}>Wishes and Thoughts</Text>
      {data.length!=0?
      data.map((item:data)=>
      <View style={[styles.ImageButton, styles.shadowProp]}>
        {item.title?<Text style={styles.ImageButtonText}>{item.title}</Text>:<></>}
        {item.message?<Text style={styles.ImageButtonText}>"{item.message}"</Text>:<></>}
        {item.links?<Text style={{}}
        onPress={() => Linking.openURL(item.links)}
        >
        Click Here for more
      </Text>:<></>}
      </View>
      )
      :<></>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container:{
    padding:10,
    height:"100%",  
    backgroundColor:"white"
  },
  ImageButton: {
    width: '100%',
    marginTop:25,
    borderRadius: 15,
    backgroundColor: '#05445E',
    overflow: 'hidden',
    padding:15,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 8},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 7,
  },
  ImageButtonTitle: {
    fontSize: 20,
    color: '#D4F1F4',
    fontWeight: '700',
    textAlign:'justify',
    alignSelf: 'center',
  },
  ImageButtonText: {
    fontSize: 20,
    color: '#D4F1F4',
    textAlign:'justify',
    fontWeight: '400',
    alignSelf: 'center',
  },
});
