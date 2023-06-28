import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import songsData from '../dummydata/songs.json'
import prayerData from '../dummydata/prayers.json'
import Library from './Library';


const MyComponent = (navigation: any) => {

    const MusicRoute = () => <Library data={songsData} navigation={navigation} />;

    const AlbumsRoute = () => <Library data={prayerData} navigation={navigation} />;
    const RecentsRoute = () => <Text>Recents</Text>;
    const SettingRoute = () => <Text>Settings</Text>;
    const HomeRoute = () => <Text>Home</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Songs', icon: 'queue-music' },
        { key: 'albums', title: 'Prayers', icon: 'album' },
        { key: 'home', title: 'Home', icon: 'history' },
        { key: 'recents', title: 'Recents', icon: 'history' },
        { key: 'setting', title: 'Settings', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        setting: SettingRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;