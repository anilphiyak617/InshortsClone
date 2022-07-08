import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const TopNavigation = ({ setIndex, index }) => {


  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>

      {index === 0 ?
        (<TouchableOpacity style={styles.left}>
          <Text>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>) : (
          <TouchableOpacity style={styles.left}
            onPress={() => setIndex(index == 0 ? 1 : 0)}
          >
            <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
            {/* <Feather name="chevron-left" size={24} color="black" /> */}
            <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
          </TouchableOpacity>
        )}

      {/* //*TODO: Middle Section  */}
      <Text style={{ ...styles.center, color: "white" }}>
        {index ? "All News" : "Discover"}
      </Text>

      {/* //*TODO: Right Section */}

      {
        index ?
          (<TouchableOpacity style={styles.right}>
            <Text style={styles.text}>
              <SimpleLineIcons name="reload" size={24} color="#007FFF" />
            </Text>
          </TouchableOpacity>)
          :
          (
            <TouchableOpacity
              style={styles.left}
              onPress={() => setIndex(index == 0 ? 1 : 0)}>
              <Text style={{ ...styles.text, color: "white" }}>All News</Text>
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
    borderBottomColor: "black",
    borderBottomWidth: 0.5
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
    fontWeight: "700"
  },
  text: {
    fontSize: 16,
  }
})

export default TopNavigation