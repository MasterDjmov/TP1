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
import { useNavigation } from '@react-navigation/native';

import 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// se borro --> : () => Node 

const Home = () => {

    const navitation = useNavigation();
    const navigateTo = (route) => {
        navitation.navigate(route)
    }
  return (
    <SafeAreaProvider>
      
        <Header title='Inicio'/>
        <View style={{flex:1}}>  
          <ImageBackground style={{height:HEIGHT,width:WIDTH}} source={require('../assets/images/fondo.jpg')}>
            <View style={{flexDirection:'row',flex:1}}>
              <View style={{...styles.viewGrid,backgroundColor:'blue',justifyContent:'flex-end',paddingBottom:'5%'}}>
                <TouchableOpacity style={{...styles.buttonGrid}} onPress={()=>navigateTo('Task')}>
                  <Text style={{justifyContent:'center',color:'white'}}>TAREAS</Text>
                </TouchableOpacity>
              </View>
              <View style={{...styles.viewGrid,justifyContent:'flex-end',paddingBottom:'5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid}} onPress={()=>navigateTo('Profile')}>
                  <Text style={{justifyContent:'center',color:'white'}}>PERFIL</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection:'row',flex:1}}>
              <View style={{...styles.viewGrid,justifyContent:'flex-start',paddingTop:'5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid}}  onPress={()=>navigateTo('List')}>
                  <Text style={{justifyContent:'center',color:'white'}}>LISTAS</Text>
                </TouchableOpacity>
              </View>
              <View style={{...styles.viewGrid,justifyContent:'flex-start',paddingTop:'5%'}}>
              <TouchableOpacity style={{...styles.buttonGrid}}  onPress={()=>navigateTo('Maps')}>
                  <Text style={{justifyContent:'center',color:'white'}}>MAPA</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
    </SafeAreaProvider>
  );
}; 

const styles = StyleSheet.create({
  viewGrid: {
    flex:0.5,
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

export default Home;
