import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/DoctorProfile/DoctorProfileScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';
import LoginScreen from '../screens/Authentication/LoginScreen'
import LocationScreen from '../screens/doctorloc/LocationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen'
import Signup from '../screens/Authentication/SignupScreen'
import IngredientsDetailsScreen from '../screens/DoctorDetails/DoctorDetailsScreen';
import Appointement from '../screens/Appointement/Appointement'
import Blogs from '../screens/Blogs/Blogs'
import Localisation from '../screens/Localisation'


const Stack = createStackNavigator();


function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
          color: '#fff'
        },
        headerStyle: {
          backgroundColor: '#006480', 
       }
      }
    }
      
    >
      {/* <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}  />
      <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}  /> */}
      
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Localisation' component={Localisation} />
      <Stack.Screen name='Location' component={LocationScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='Doctor profile' component={RecipeScreen} />
      <Stack.Screen name='Appointement' component={Appointement} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Blogs' component={Blogs} />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}


console.disableYellowBox = true;