import React from 'react'
import { StyleSheet, Text, View, Linking} from 'react-native'

export default function DetailsScreen({ route, navigation }: any) {

  const { title, data, links } = route.params;

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      {title?.length>1?<Text style={[styles.TextContainer, { fontWeight: "700", fontSize: 30, marginTop: 20 }]}>{title}</Text>:<></>}
      {data?.length>1?<Text style={styles.TextContainer}>{data}</Text>:<></>}
      <Text >

      </Text>
      {links?.length>1?<Text style={[styles.TextContainer,{color:"red"}]}
        onPress={() => Linking.openURL(links)}>
        Click here to watch the video
      </Text>:<></>}
    </View>
  )
}

const styles = StyleSheet.create({
  TextContainer: {
    fontSize: 20,
    textAlign: "center",
    padding: 15,
    color: "black",
    fontWeight: "500",
  },

})