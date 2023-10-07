import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import index from './src/components/screen';
import ConverterComprimento from './src/components/screen/ConverterComprimento';
import ConverterTempo from './src/components/screen/ConverterTempo';
import ConverterVolume from './src/components/screen/ConverterVolume';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UnidadeProvider } from './src/components/screen/contexts/contextsUnidade'; 
import Resultado from './src/components/screen/Resultado';


const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <UnidadeProvider>

    <NavigationContainer>
      <navStack.Navigator initialRouteName="Index">
        <navStack.Screen name="Tela Inicial " component={index} />
        <navStack.Screen name="ConverterComprimento" component={ConverterComprimento} />
        <navStack.Screen name="ConverterTempo" component={ConverterTempo} />
        <navStack.Screen name="ConverterVolume" component={ConverterVolume} />
        <navStack.Screen name="Resultado" component={Resultado} />

      </navStack.Navigator>
    </NavigationContainer>
    </UnidadeProvider>

    </SafeAreaProvider>
  );
}
