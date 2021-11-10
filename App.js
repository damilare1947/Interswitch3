/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './src/auth/LoginScreen';
import {CustomHeader} from './src/CustomHeader';
import {CustomDrawerContent} from './src';
import {HomeScreen} from './src/tab/HomeScreen';

// function CustomHeader({title, isHome, navigation}) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         height: 50,
//         margin: 20,
//       }}>
//       <View style={{flex: 1, marginTop: 10}}>
//         {isHome ? (
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Image
//               style={{
//                 width: 30,
//                 height: 30,
//                 marginLeft: 5,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//               source={require('./src/images/menu.png')}
//             />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//             }}
//             onPress={() => navigation.goBack()}>
//             <Image
//               style={{width: 20, height: 20, marginLeft: 5}}
//               source={require('./src/images/back.png')}
//               resizeMode="contain"
//             />
//             <Text>Back</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       <View
//         style={{
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         {/* <Text>{title}</Text> */}
//       </View>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'space-between',
//         }}>
//         <Image
//           style={{
//             alignItems: 'flex-end',
//             justifyContent: 'space-between',
//           }}
//           source={require('./src/images/i.png')}
//         />
//       </View>
//     </View>
//   );
// }
// function HomeScreen({navigation}) {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <CustomHeader title="Home" isHome={true} navigation={navigation} />
//       <View style={{flex: 1, margin: 30}}>
//         <Text>My Accounts</Text>
//         {/* <TouchableOpacity
//           style={{marginTop: 20}}
//           onPress={() => navigation.navigate('HomeDetail')}>
//           <Text> Go to Home screen</Text>
//         </TouchableOpacity> */}
//       </View>
//     </SafeAreaView>
//   );
// }

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        {/* <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('SettingDetail')}>
          <Text> Go to Settings screen</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const StackHome = createNativeStackNavigator();
const StackSettings = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      {/* <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      /> */}
    </StackHome.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? require('./src/images/home.png')
              : require('./src/images/home2.png');
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('./src/images/Settings2.png')
              : require('./src/images/settings.png');
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        style: {
          margin: 20,
        },
        tabStyle: {
          backgroundColor: '#DC2D2D',
        },
      }}>
      <Tab.Screen name="Dashboard" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function SettingStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      {/* <StackSettings.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={navOptionHandler}
      /> */}
    </StackSettings.Navigator>
  );
}
// function CustomDrawerContent(props) {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#DC2D2D'}}>
//       <ScrollView>
//         <TouchableOpacity
//           style={{marginTop: 60, marginLeft: 30, flexDirection: 'row'}}
//           onPress={() => props.navigation.navigate('Home')}>
//           <Image
//             source={require('./src/images/home.png')}
//             style={{width: 30, height: 30}}
//           />
//           <Text style={{color: 'white', paddingLeft: 5, fontSize: 25}}>
//             {' '}
//             Dashboard
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{marginTop: 20, marginLeft: 30, flexDirection: 'row'}}
//           onPress={() => props.navigation.navigate('Settings')}>
//           <Image
//             source={require('./src/images/Settings2.png')}
//             style={{width: 30, height: 30}}
//           />
//           <Text style={{color: 'white', paddingLeft: 8, fontSize: 25}}>
//             Settings
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{marginTop: 20, marginLeft: 30, flexDirection: 'row'}}>
//           <Image
//             source={require('./src/images/help.png')}
//             style={{width: 30, height: 30}}
//             resizeMode="contain"
//           />
//           <Text style={{color: 'white', paddingLeft: 8, fontSize: 25}}>
//             Help
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// function LoginScreen({navigation}) {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Login Screen</Text>
//         <TouchableOpacity
//           style={{marginTop: 20}}
//           onPress={() => navigation.navigate('HomeApp')}>
//           <Text> Login</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen
        name="MenuTab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
}

const StackApp = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
