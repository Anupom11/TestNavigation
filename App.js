import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

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

function ProfileScreen({navigation}) {
  return (
    <View style={{marginStart:20, marginEnd:20}}>
      <Text>Profile Screen</Text>
      <Button
        title='Toggle'
        onPress={()=>navigation.toggleDrawer()}/>  
    </View>
  );
}

//--------------------------------------------------------------
// Code section to do the bottom tab navigation
function HomeTab({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home!</Text>
      <Button 
        title="Goto Setting"
        onPress={()=>navigation.navigate('SettingsTab')} />
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

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

//--------------------------------------------------------------

//--------------------------------------------------------------
function HomeStack() {
  return (
    <tab.Navigator>
      <tab.Screen name="Home1" component={HomeTab} />
      <tab.Screen name="Feed" component={SettingScreen} />
      <tab.Screen name="Notifications" component={SettingsTab} />
    </tab.Navigator>
  );
}

//--------------------------------------------------------------

// method to enclose drawer navigation
function DrawerStack() {
  return (
    <drawerNavigator.Navigator initialRouteName='Profile'>
      <drawerNavigator.Screen name ="Home" component={HomeStack}/>
      <drawerNavigator.Screen name="Profile" component={ProfileScreen}/>
    </drawerNavigator.Navigator>
  );
}

const stack           = createNativeStackNavigator();
const tab             = createBottomTabNavigator();
const SettingsStack   = createNativeStackNavigator();
const drawerNavigator = createDrawerNavigator();

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
        <stack.Group>
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
        </stack.Group>
      </stack.Navigator> */}

      {/* <tab.Navigator
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
          component={HomeTab}
          options={{tabBarBadge:99}}/>
        
        <tab.Screen
          name="SettingsTab"
          component={SettingsTab}/>
      </tab.Navigator> */}
      
      {/* <tab.Navigator>
        <tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </tab.Screen>
        <tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </tab.Screen>
      </tab.Navigator> */}

      {/* <drawerNavigator.Navigator>
        <drawerNavigator.Screen name = "Home" component={HomeStack}/>
        <drawerNavigator.Screen name= "Profile" component={ProfileScreen}/>
      </drawerNavigator.Navigator> */}

      {/* <stack.Navigator>
        <stack.Screen name="Home" component={HomeStack} />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="Settings" component={SettingsScreen} />
        <stack.Screen name="SettingsTab" component={SettingsTab}  />
      </stack.Navigator> */} 

      <stack.Navigator>
        <stack.Screen name="Drawer" component={DrawerStack}/>
        <stack.Screen name="Settings" component={SettingsScreen} />
        <stack.Screen name="SettingsTab" component={SettingsTab}  />
      </stack.Navigator>

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