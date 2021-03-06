import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import OrphanageMap from './pages/OrphanageMap'
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './pages/components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false , cardStyle: { 
        backgroundColor: "#F2F3F5"
      }}}>
        <Screen 
          name="OrphanageMap" 
          component={OrphanageMap}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" />
          }} 
        />
        
        <Screen 
          name="OrphanageDetails" 
          component={OrphanageDetails} 
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }} 
        />

        <Screen 
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }} 
        />

        <Screen 
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }} 
        />
      </Navigator>
    </NavigationContainer>
  );
}