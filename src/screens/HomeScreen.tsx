import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MenuComponentWide from '../components/MenuComponentWide';

import songsData from '../dummydata/songs.json';
import prayerData from '../dummydata/prayers.json';
import activitiesData from '../dummydata/activities.json';
import jyData from '../dummydata/jy.json';
import massData from '../dummydata/holymass.json';

export default function HomeScreen({navigation}: any) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Welcome}>Welcome Missionary !</Text>
      <ScrollView>
        <MenuComponentWide
          navigation={navigation}
          label="Prayer Book"
          url="https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          data={prayerData}
          type={"Library"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Songs Library"
          url="https://images.unsplash.com/photo-1549401002-bcd2dba1a5c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          data={songsData}
          type={"Library"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Holy Mass"
          url="https://images.unsplash.com/photo-1518187544126-ae31d92f1b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          data={massData}
          type={"Response"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Activities"
          url="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80"
          data={activitiesData}
          type={"Accordian"}
        />
        <MenuComponentWide
          navigation={navigation}
          label="Jesus Youth"
          url="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
          data={jyData}
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
    backgroundColor: 'white',
  },
  Welcome: {
    marginTop: 20,
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
  },
});
