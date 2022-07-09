import { View, Text, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';

//*TODO: TEST
// const FirstRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
//   );

// const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
//   );


const InshortTabs = () => {

    const { index, setIndex } = useContext(NewsContext);  // Accesing from the Context API

    const layout = useWindowDimensions();

    const [routes] = useState([
        { key: "first", title: "Discover" },
        { key: "second", title: "News" },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() =>
                <TopNavigation index={index} setIndex={setIndex} />
            }
        />
    )
}

export default InshortTabs