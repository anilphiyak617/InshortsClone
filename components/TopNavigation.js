import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { NewsContext } from '../API/Context';

const TopNavigation = ({ setIndex, index }) => {
  const { category, fetchNews, setDarkTheme, darkTheme } = useContext(NewsContext);
  // console.log(category);

  return (
    <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282c35" : "white" }}>

      {index === 0 ?
        (<TouchableOpacity style={styles.left}
          onPress={() => {
            setDarkTheme(prev => !prev);
            console.log(darkTheme)
          }}
        >
          <Text>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>) : (
          <TouchableOpacity style={styles.left}
            onPress={() => setIndex(index == 0 ? 1 : 0)}
          >
            <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
            {/* <Feather name="chevron-left" size={24} color="black" /> */}
            <Text style={{ ...styles.text, color: darkTheme ? "white" : "black" }}>Discover</Text>
          </TouchableOpacity>
        )}

      <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
        {
          index ? category : "Discover"
        }
      </Text>


      {
        index ?
          (<TouchableOpacity
            onPress={() => {
              // console.log("news fetched")
              fetchNews('general');  //TODO: fetch news not working fixing
            }}
            style={styles.right}>
            <Text style={styles.text}>
              <SimpleLineIcons name="reload" size={24} color="#007FFF" />
            </Text>
          </TouchableOpacity>)
          :
          (
            <TouchableOpacity
              style={styles.left}
              onPress={() => setIndex(index == 0 ? 1 : 0)}>
              <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>{category}</Text>
              <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
            </TouchableOpacity>
          )
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: 'center',
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.7
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between"
  },

  right: {
    width: 80,
    alignItems: 'flex-end'
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
    textTransform: 'capitalize'
  },
  text: {
    fontSize: 16,
    textTransform: 'capitalize'

  }
})

export default TopNavigation