import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Home from './src/screens/home'
import Form from './src/screens/forms'



export default function App() {
   const [activate, setActive] = useState(false)
  return (
    <View style={styles.container}>
      <View style ={{display:activate? 'none' : 'contents' }}>
        <Home setActive={setActive} />
      </View>
      <View style={{display:activate? 'contents' : 'none' }}>
        <Form setActive={setActive}/>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'contents'
  },
});
