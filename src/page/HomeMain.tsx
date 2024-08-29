import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Personajes from './Personajes'
import Momentos from './Momentos';
import HomeScreen from './HomeScreen'
import Acerca from './Acerca';
import Contratame from './Contratame'
import MiVida from './MiVida'


export type RootTabParamList = {
  Home: undefined;
  Character: undefined;
  Moments: undefined;
  About: undefined;
  InMyLife: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Home: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Character':
                iconName = 'person';
                break;
              case 'Moments':
                iconName = 'images';
                break;
              case 'About':
                iconName = 'information-circle';
                break;
              case 'InMyLife':
                iconName = 'heart';
                break;
              case 'Contact':
                iconName = 'call';
                break;
              default:
                iconName = 'home';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#B22222', // transparent background
            borderTopWidth: 0, // remove top border
            position: 'absolute', // make the tab bar float
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            height: 80, // adjust height as needed
            color:'#fff',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Character" component={Personajes} />
        <Tab.Screen name="Moments" component={Momentos} />
        <Tab.Screen name="About" component={Acerca} />
        <Tab.Screen name="Contact" component={Contratame} />
        <Tab.Screen name="InMyLife" component={MiVida} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;