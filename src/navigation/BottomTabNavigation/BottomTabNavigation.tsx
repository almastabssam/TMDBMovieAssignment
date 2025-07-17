import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../../utils/navigationStrings';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Watch from '../../screens/Watch/Watch';
import MediaLibrary from '../../screens/MediaLibrary/MediaLibrary';
import More from '../../screens/More/More';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { Icons } from '../../utils/icons';
import {
  scaleHorizontal,
  scaleModerate,
  scaleVertical,
} from '../../utils/responsive';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.DASHBOARD}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          borderRadius: scaleModerate(24),
          marginBottom: scaleModerate(10),
          height: scaleModerate(60),
          marginHorizontal: scaleModerate(10),
          borderColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.PoppinsRegular,
          textAlign: 'center',
          fontSize: scaleModerate(10),
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case SCREENS.DASHBOARD:
              iconSource = Icons.dashboardIcon;
              break;
            case SCREENS.WATCH:
              iconSource = Icons.watchIcon;
              break;
            case SCREENS.MEDIA_LIBRARY:
              iconSource = Icons.mediaLibraryIcon;
              break;
            case SCREENS.MORE:
              iconSource = Icons.moreIcon;
              break;
            default:
              iconSource = Icons.dashboardIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: scaleHorizontal(24),
                height: scaleVertical(18),
                tintColor: focused ? Colors.WHITE : Colors.GREY,
              }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={SCREENS.WATCH} component={Watch} />
      <Tab.Screen name={SCREENS.MEDIA_LIBRARY} component={MediaLibrary} />
      <Tab.Screen name={SCREENS.MORE} component={More} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
