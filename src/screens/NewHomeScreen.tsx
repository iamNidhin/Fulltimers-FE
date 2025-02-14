import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fetchData} from '../api/fetchData';
import activitiesData from '../dummydata/activities.json';
import massData from '../dummydata/holymass.json';
import prayerData from '../dummydata/prayers.json';
import songsData from '../dummydata/songs.json';

const HomeScreen = ({navigation}: any) => {
  const [prayers, setPrayers] = useState(prayerData);
  const [songs, setSongs] = useState(songsData);
  const [mass, setMass] = useState(massData);
  const [activities, setActivities] = useState(activitiesData);
  const getData = async (url: any) => {
    const res = await fetchData(url);
    if (res.length !== 0) {
      switch (url) {
        case 'prayers':
          setPrayers(res);
          break;
        case 'songs':
          setSongs(res);
          break;
        case 'holymass':
          setMass(res);
          break;
        case 'activities':
          setActivities(res);
          break;
        default:
          console.log('not available');
      }
    }
  };

  useEffect(() => {
    getData('prayers');
    getData('songs');
    getData('holymass');
    getData('activities');
  }, []);

  const categories = [
    [
      {
        id: 1,
        title: 'Prayer Book',
        url: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
        data: prayers,
        type: 'Library',
        color: '#B3B7FF',
      },
      {
        id: 2,
        title: 'Songs Library',
        url: 'https://images.unsplash.com/photo-1549401002-bcd2dba1a5c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        data: songs,
        type: 'Library',
        color: '#F7D56E',
      },
      {
        id: 3,
        title: 'Holy Mass',
        url: 'https://images.unsplash.com/photo-1518187544126-ae31d92f1b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        data: mass,
        type: 'Response',
        color: '#C8E1DB',
      },
      {
        id: 4,
        title: 'Activities',
        url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80',
        data: activities,
        type: 'Accordian',
        color: '#E7D9D4',
      },
    ],
  ];
  return (
    <LinearGradient colors={['#F5E6E0', '#FFFFFF']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          Welcome <Text style={styles.bold}>Missionary!</Text>
        </Text>
        <View style={styles.grid}>
          {categories[0].map(item => (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, {backgroundColor: item.color}]}
              onPress={() =>
                navigation.navigate(item.type, {
                  data: item.data,
                  type: item.type,
                })
              }>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
  },
  bold: {
    fontWeight: '700',
  },
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '100%',
  },
  card: {
    width: '48%',
    height: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
