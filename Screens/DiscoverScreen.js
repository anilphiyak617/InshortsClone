import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context';
import Carousel from 'react-native-snap-carousel';
import { categories } from '../API/api';

const DiscoverScreen = () => {

  const { } = useContext(NewsContext);
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  console.log("discovered section rendered")
  return (
    <View style={StyleSheet.discover}>
      {/* Search */}

      {/* Categories */}
      <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
      <Carousel
        layout={'default'}
        data={categories}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment="start"
        inactiveSlideScale={0.8}
        inactiveSlideOpacity={0.6}

        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.category}>
            <Image source={{ uri: item.pic }}
              style={styles.categoryImage}
            />

            <Text style={{ ...styles.name, color: "white" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* Sources */}
    </View>
  )
}


const styles = StyleSheet.create({
  discover: {
    flex: 1,
    alignItems: 'center'
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    alignSelf: 'center'
  },

  name: {
    fontSize: 14,
    textTransform: 'capitalize'
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: 'contain'
  },
  category:
  {
    alignItems: 'center',
    height: 130,
    margin: 10,
    justifyContent: "space-evenly"
  }
})
export default DiscoverScreen