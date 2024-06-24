import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Operaciones from './Operaciones';
import Instrucciones from './Instrucciones';


export default function Navigation() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Instrucciones">
        <Stack.Screen name="Instrucciones" component={Instrucciones} />
        <Stack.Screen name="Operaciones" component={Operaciones} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


