import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, Linking, useWindowDimensions } from 'react-native'
import React from 'react'

const SingleNews = ({ item, index }) => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  return (
    <View style={{
      width: windowWidth,
      height: windowHeight,
      transform: [{ scaleY: -1 }],
    }} key={index}>

      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />

      <View style={{ ...styles.description, backgroundColor: "#282C35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title.slice(0, 60)}...</Text>
        <Text style={{ ...styles.content, color: "white" }}>{item.description}</Text>
        <Text style={{ color: "white" }}>
          News by-
          <Text>{item.author ?? 'Anonymous'}</Text>
        </Text>
      </View>


      {/* ----Footer--- */}
      <ImageBackground
        style={styles.footer}
        blurRadius={30}
        source={{ uri: item.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(item.url)} >
          <Text style={{ fontSize: 15, color: "white" }}>{item?.content?.slice(0, 45)}...</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>Read More</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  image: {
    height: "45%",
    width: Dimensions.get('window').width,
    resizeMode: "cover",
  },

  description:
  {
    padding: 14,
    flex: 1,
    justifyContent: 'space-between'
    // alignItems: 'center'
  },
  content: {
    fontSize: 17,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    opacity: 0,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    // backgroundColor:"#d7be69"
    justifyContent: 'center',
    paddingHorizontal: 20
  }
})


export default SingleNews