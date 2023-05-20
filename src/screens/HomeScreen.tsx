import React from 'react'
import { Button, Text, View } from 'react-native'

export default function HomeScreen({navigation}:any) {
  return (
        <View>
            <Text>Home</Text>
            <Button
                onPress={() => navigation.navigate('Songs')}
                title="Go to songs"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
