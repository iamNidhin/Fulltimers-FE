import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function HomeScreen({navigation}:any) {
  return (
        <View>
            <Text>Home</Text>
            <Pressable onPress={()=>navigation.navigate('Songs')}>
                <Text>Press here to go to songs</Text>
            </Pressable>
        </View>
    )
}
