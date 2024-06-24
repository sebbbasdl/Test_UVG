import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ImageBackground } from 'react-native';
import ImagenFondo from './assets/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png';
import Instrucciones from './views/Instrucciones';
import Operaciones from './views/Operaciones';

// Componente para la pantalla de fondo
const BackgroundScreen = ({ flag }) => (
  flag ? (
    <ImageBackground source={ImagenFondo} style={styles.image}>
      <StatusBar style="auto" />
      <Instrucciones />
    </ImageBackground>
  ) : (
    <ImageBackground source={ImagenFondo} style={styles.image}>
      <StatusBar style="auto" />
      < Operaciones />
    </ImageBackground>
  )
);

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BackgroundScreen" component={() => BackgroundScreen({flag: true})} />
        <Stack.Screen name="Operaciones" component={() => BackgroundScreen({flag: false})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    
    width: wp(100),
    height: hp(105),
    
  },
});
