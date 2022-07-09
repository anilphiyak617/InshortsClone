import { useContext } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Context, { NewsContext } from './API/Context';
import InshortTabs from './components/InshortTabs';

function App() {

  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={{
      ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white"
    }}>
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
});

export default () => {
  return (<Context>
    <App />
  </Context>);
}