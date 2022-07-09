import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../components/SingleNews';

const NewsScreen = () => {

  const { darkTheme } = useContext(NewsContext)
  const windowHeight = Dimensions.get('window').height;

  const { news: { articles } } = useContext(NewsContext);


  const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={styles.carousel}>
      {
        articles &&
        <Carousel
          layout={'stack'}
          data={articles.slice(0, 15)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (<SingleNews item={item} index={index} />)}
          onSnapToItem={(index) => setActiveIndex(index)}   //This callback is fired when navigating to an item
        />
      }
    </View>
  )
}


//--------Styles
const styles = StyleSheet.create(
  {
    carousel: {
      flex: 1,
      backgroundColor: 'black',
      transform: [{ scaleY: -1 }]

    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      paddingBottom: 10,
      color: "white"
    }
  }
)

export default NewsScreen