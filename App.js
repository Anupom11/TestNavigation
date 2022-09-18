import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigation}) {
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={{margin: 10, fontSize:20, color:'black'}}>Hello World!</Text>
        <Button title="Click Me" onPress={()=>navigation.navigate("Details", {"name":"Anupom"})} />
        {/* <Button title="Click Me" onPress={()=>navigation.navigate("Details", {screen:"Settings", params:{"name":"Anupom"}})} /> */}
      </View>
    </View>
  );
}

function DetailsScreen({route, navigation}) {

  const {name} = route.params;

  return(
    <View style={{margin:10}}>
      <Text style={{fontSize:20, color:'black', marginLeft:30}}>Details Screen: {name}</Text>
      <View style={{marginTop:10, padding:30}}>
        <View style={{padding:10}}>
          <Button title='Pop' onPress={()=> navigation.popToTop()}  />
        </View>
        <View style={{padding:10}}>
          <Button title='Push' onPress={()=> navigation.push('Details', {"name":"Anupom"})}  />
        </View>
        <View style={{padding:10}}>
          <Button title='Go Back' onPress={()=> navigation.goBack()} />
        </View>
      </View>
  </View>
  );
}

function SettingScreen({navigation}) {
  return(
    <View>
      <Text>Hello world!</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Text>Home Screen</Text>
  );
}

//--------------------------------------------------------------
// Code section to do the bottom tab navigation
function HomeTab() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsTab() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
//--------------------------------------------------------------

const stack = createNativeStackNavigator();
const tab   = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      
      {/* <stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{headerTitle:(props)=><LogoTitle {...props}/>}} />
        <stack.Screen 
          name="Details" 
          component={DetailsScreen} />
        <stack.Screen 
          name="Settings" 
          component={SettingScreen} 
          options={{ headerShown: false }} />
      </stack.Navigator> */}

      <tab.Navigator
        screenOptions={({route})=> ({
          tabBarIcon:({focused, color, size})=> {
            let iconName;
            if(route.name === 'HomeTab') {
              iconName = focused ? 'add-circle' : 'add-circle';
            }
            else if(route.name === 'SettingsTab') {
              iconName = focused ? 'alarm' : 'alarm';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },

          tabBarActiveTintColor:'tomato',
          tabBarInactiveTintColor:'gray',
        })}
      >
        <tab.Screen
          name="HomeTab"
          component={HomeTab}/>
        
        <tab.Screen
          name="SettingsTab"
          component={SettingsTab}/>
      </tab.Navigator>
      
    </NavigationContainer>  
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0aee',
    padding: 8,
    color: 'white',
  },
});