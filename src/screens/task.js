/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Header  from '../components/AppHeader';

import 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// se borro --> : () => Node 

const Task = () => {

  return (
    <SafeAreaProvider>
      <Header title='Listas'/>
        <View style={styles.viewGrid}>  
        <Text style={styles.textButton}>Tareas</Text>
          {/* <ImageBackground style={{height:HEIGHT,width:WIDTH}} source={require('../assets/images/fondo.jpg')}>
            

          </ImageBackground> */}
        </View>
    </SafeAreaProvider>
  );
}; 

const styles = StyleSheet.create({
textButton: {
    justifyContent:'center',
    fontSize:20,
    fontWeight:'700'
},
    viewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
    height: '100%'
  },
  buttonGrid: {
    elevation:3,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#606060',
    width: WIDTH*0.4,
    height: WIDTH*0.4,
    opacity:0.8
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Task;
