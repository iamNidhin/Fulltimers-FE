import React from 'react'
import { Text, View } from 'react-native'

export default function DetailsScreen({ route, navigation }:any) {

  const { data } = route.params;

  return (
    <Text>{data}</Text>
  )
}
