import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from '@expo/vector-icons'
import SingleNews from './SingleNews'

const Search = () => {

    const {
        news: { articles }, darkTheme
    } = useContext(NewsContext)

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();
    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(articles.filter(item => item.title.includes(text)));
        // console.log(searchResults)
    }

    const handleModal = (item) => {
        setModalVisible(true);
        setCurrentNews(item);
    }


    return (
        <View style={{ width: "100%", marginTop: 5, position: "relative", paddingHorizontal: 2, flexDirection: "column", alignItems: 'center' }}>
            <TextInput style={{ ...styles.search, backgroundColor: darkTheme ? "black" : "lightgrey", color: darkTheme ? "white" : "black" }}
                placeholder="Search for news"
                placeholderTextColor={darkTheme ? "white" : "black"}
                onChangeText={(text) => { handleSearch(text) }}
            />

            {/* //TODO for search searchResults */}
            <View style={{ ...styles.searchResults }}>
                {
                    searchResults.slice(0, 5).map((item) =>
                        <TouchableOpacity
                            key={item.title} //TODO: assign appropriate keys using useKey
                            activeOpacity={0.8}
                            onPress={() => {
                                handleModal(item);
                            }}
                        >
                            <Text style={{
                                ...styles.singleResult,
                                backgroundColor: "black",
                                color: "white"
                            }}>
                                {item.title}
                            </Text>

                        </TouchableOpacity>)
                }
            </View>
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(prev => !prev);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        right: 0,
                        margin: 20,
                    }}
                >
                    <Entypo name="circle-with-cross" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal>
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10,
        marginBottom: 15
    },
    searchResults: {
        position: 'absolute',
        width: "100%",
        // backgroundColor: "red",
        zIndex: 1,
        top: 50
    }
    ,
    singleResult: {
        borderRadius: 5,
        padding: 7,
        margin: 0.8,
        shadowColor: "black",
        // elevation:5
    }
})