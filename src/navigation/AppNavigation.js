import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListofMovies from "../screens/ListofMovies";
import MovieDetail from "../screens/MovieDetail";

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name='ListofMovies' component={ListofMovies} />
        <Stack.Screen name='MovieDetail' component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
