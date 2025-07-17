import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../../utils/navigationStrings';
import MovieDetail from '../../screens/MovieDetail/MovieDetail';
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation';
import BookTicket from '../../screens/BookTicket/BookTicket';
import BookSeat from '../../screens/BookSeat/BookSeat';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MAIN_TABS}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={SCREENS.MAIN_TABS} component={BottomTabNavigation} />
      <Stack.Screen name={SCREENS.MOVIE_DETAIL} component={MovieDetail} />
      <Stack.Screen name={SCREENS.BOOK_TICKET} component={BookTicket} />
      <Stack.Screen name={SCREENS.BOOK_SEAT} component={BookSeat} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
