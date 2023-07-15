import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MenuComponentWide from '../components/MenuComponentWide';
import { fetchData} from '../api/fetchData';

import songsData from '../dummydata/songs.json';
import prayerData from '../dummydata/prayers.json';
import activitiesData from '../dummydata/activities.json';
import jyData from '../dummydata/jy.json';
import massData from '../dummydata/holymass.json';

export default function HomeScreen({navigation}: any) {

  const [prayers,setPrayers] = useState(prayerData)
  const [songs,setSongs] = useState(songsData)
  const [jy,setJY] = useState(jyData)
  const [mass,setMass] = useState(massData)
  const [activities,setActivities] = useState(activitiesData)


  const getData = async (url:any) => {
    const res = await fetchData(url)
    if(res.length!=0)
    {
    switch(url){
      case 'prayers': setPrayers(res);break;
      case 'songs': setSongs(res);break;
      case 'holymass': setMass(res);break;
      case 'activities': setActivities(res);break;
      case 'jesusyouth': setJY(res);break;
      default : console.log("not available");
    }
  }
  } 

  useEffect(() => {
    getData("prayers");
    getData("songs");
    getData("holymass");
    getData("activities");
    getData("jesusyouth");
  }, [])
  

  return (
    <View style={styles.Container}>
      <Text style={styles.Welcome}>Welcome Missionary !</Text>
      <ScrollView>
        <MenuComponentWide
          navigation={navigation}
          label="Prayer Book"
          url="https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          data={prayers}
          type={"Library"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Songs Library"
          url="https://images.unsplash.com/photo-1549401002-bcd2dba1a5c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          data={songs}
          type={"Library"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Holy Mass"
          url="https://images.unsplash.com/photo-1518187544126-ae31d92f1b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          data={mass}
          type={"Response"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Activities"
          url="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80"
          data={activities}
          type={"Accordian"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Jesus Youth"
          url="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
          data={jy}
          type={"Accordian"}
        />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    height: '100%',
    backgroundColor: '#D4F1F4',
  },
  Welcome: {
    marginTop: 20,
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
});
