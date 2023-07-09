import React from 'react'
import { StyleSheet, Text, View, Linking, ScrollView} from 'react-native'

export default function DetailsScreen({ route, navigation }: any) {

  const { title, data, links ,category} = route.params;

  return (
    <ScrollView style={{ height: "100%", backgroundColor: "white" }}>
      {title?.length>1?<Text style={[styles.TextContainer1, { fontWeight: "700", fontSize: 30, marginTop: 20, color:"red" }]}>{title}</Text>:<></>}
      {data?.length>1?<Text style={category=="Prayer"?styles.TextContainer2:styles.TextContainer1}>{data}</Text>:<></>}
      <Text>
      </Text>
      {links?.length>1?<Text style={[styles.TextContainer1,{color:"red"}]}
        onPress={() => Linking.openURL(links)}>
        Click here to watch video
      </Text>:<></>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  TextContainer1: {
    fontSize: 20,
    textAlign: "center",
    padding: 15,
    color: "black",
    fontWeight: "500",
  },
  TextContainer2: {
    fontSize: 20,
    textAlign: "justify",
    padding: 15,
    color: "black",
    fontWeight: "500",
  },
})