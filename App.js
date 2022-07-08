import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Context from './API/Context';
import InshortTabs from './components/InshortTabs';
import TabViewExample from './components/TabViewExample';

 function App() {
  return (
    <View style={{...styles.container,backgroundColor:"#282C35"}}>
    <InshortTabs/> 
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

export default ()=>
{ 
 return (<Context>
  <App/>
  </Context>);
}