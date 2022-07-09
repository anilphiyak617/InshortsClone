import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context';
import Carousel from 'react-native-snap-carousel';
import { categories, sources } from '../API/api';
import Search from '../components/Search';

const DiscoverScreen = () => {

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  console.log("discovered section rendered")

  const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={StyleSheet.discover}>
      {/* Search */}
      <Search />
      {/* Categories */}
      <Text style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>Categories</Text>
      <Carousel
        layout={'default'}
        data={categories}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onSnapToItem={(index) => setActiveIndex(index)}   //This callback is fired when navigating to an item

        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            // onPress={() => setActiveIndex(index)}
            onPress={() => setCategory(item.name)}
          // key={item.id}
          >
            <Image source={{ uri: item.pic }}
              style={styles.categoryImage}
            />

            <Text style={{ ...styles.name, color: darkTheme ? "white" : "black" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* Sources */}
      <Text style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>Sources</Text>

      <View style={{ ...styles.sources }}
      >
        {
          sources.map((item) =>
          (<TouchableOpacity
            onPress={() => {
              setSource(item.id)
            }}
            style={styles.sourceContainer}
            key={item.id}
          >
            <Image source={{ uri: item.pic }} style={styles.sourceImage} />
          </TouchableOpacity>))
        }
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  discover: {
    flex: 1,
    alignItems: 'center',
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
  },

  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  }
  ,
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d"
  },

  sourceImage: {
    height: "100%",
    width: "100%",
    resizeMode: 'cover',
    borderRadius: 10,
  }
})
export default DiscoverScreen