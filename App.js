import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Button, Image, Platform} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

import ImageMarker, { Marker } from "react-native-image-marker";

import SignIn from './source/SignIn';
import { Header } from 'react-native/Libraries/NewAppScreen';

//import Notepad from './source/Notepad';

import Notepad from '../TestNavigation/source/notepad';

var camera_lens = require('../TestNavigation/img/camera_lens.png');

// require the module
var RNFS = require('react-native-fs');

//-------------------------------------------------------
// code section to get the directory address
const dirHome = Platform.select({
  ios: `${RNFS.DocumentDirectoryPath}/MPRRAMS`,
  //android: `${RNFS.PicturesDirectoryPath }/MPRRAMS`
  android: `${RNFS.DownloadDirectoryPath }/MPRRAMS`
});

const dirPicutures = `${dirHome}/Pictures`;
//-------------------------------------------------------

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
  ImageMarker.markText({
    src: camera_lens,
    text: '26.1158° N, 91.7086° E', 
    X: 100,
    Y: 100, 
    color: '#000000',
    fontName: 'Arial-BoldItalicMT',
    fontSize: 15,
    /* shadowStyle: {
        dx: 10.0,
        dy: 0,
        radius: 5.0,
        color: '#110011' // '#ff00ffad'
    }, */
    /* textBackgroundStyle: {
        type: 'stretchX',
        paddingX: 10,
        paddingY: 10,
        color: '#0f0' // '#0f0a'
    }, */
    scale: 1, 
    quality: 100
 }).then((res) => {
     /* this.setState({
        loading: false,
        markResult: res
     }) */

     // do the move operation of the file to the required location
     RNFS.moveFile(res, dirPicutures+"/as_12345.jpg")
     .then(()=> {
      console.log("Moved: "+dirPicutures+"/as_12345.jpg");
     })
     .catch(error=> {
      console.log("Error:"+error);
     });


    console.log("the path is"+res)

 }).catch((err) => {
    console.log(err)
    /* this.setState({
        loading: false,
        err
    }) */
 })

  return (
    <View style={{marginStart:20, marginEnd:20}}>
      <Text>Profile Screen</Text>
      <Button
        title='Toggle'
        onPress={()=>navigation.toggleDrawer()}/>
        {/* <Image
         style={{width:300, height:300, marginTop:20}}
          source={camera_lens}/> */}
        <Image
          style={{width:300, height:300, marginTop:20}}
          source={{uri:'file:///data/user/0/com.testnavigation/cache/6a7a4a93-3f59-4b56-8f8e-b3e00b44c1c9imagemarker.jpg'}}/>
    </View>
  );

}

const _onNavigationStateChange=(webViewState)=> {
  console.log(webViewState.url);
  //setWebView(webViewState.url);
}

function Report({navigation}) {
  const webViewRef = useRef(null);

  return (
    <WebView
          ref={webViewRef}
          source={{ uri: "https://anupom11.github.io/" }}
          style={{ marginTop: 2 }}
          onNavigationStateChange={_onNavigationStateChange.bind(this)}
          cacheEnabled={false}

          /* onLoadProgress={() => { setLoaderText('loading in progress...') }}
          onLoadEnd={() => { setLoading(false); }} */
                    
          onError={(err) => { setLoading(false); Alert.alert('Error On Page Loading','Please check your internet and try again!\nerr ' + err,[{text:'OK',style:'destructive',onPress:()=>{navigation.goBack()}}]) }}
          onHttpError={(err) => { setLoading(false); Alert.alert('HTTP Error!','http err ' + err) }}

        />
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

function SettingsTab({navigation}) {
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
    <tab.Navigator screenOptions={{headerShown:false}}>
      <tab.Screen name="Home1" component={HomeTab} />
      <tab.Screen name="Feed" component={SettingScreen} />
      <tab.Screen name="Notifications" component={SettingsTab} />
      <tab.Screen name="Report" component={Report}  />
    </tab.Navigator>
  );
}

//--------------------------------------------------------------

// method to enclose drawer navigation
function DrawerStack() {
  return (
    <drawerNavigator.Navigator
      initialRouteName='Profile'>
      <drawerNavigator.Screen name ="Home" component={HomeStack}/>
      <drawerNavigator.Screen name="Profile" component={ProfileScreen}/>
      <drawerNavigator.Screen name="Sign in" component={SignIn}  />
      <drawerNavigator.Screen name="Notepad" component={Notepad}  />
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

      <stack.Navigator 
        screenOptions={{
          headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown:false,
        initialRouteName:"Settings"
      }}>
        <stack.Screen name="Drawer" component={DrawerStack}/>
        <stack.Screen name="Settings" component={SettingsScreen} />
        <stack.Screen name="SettingsTab" component={SettingsTab}   />
        <stack.Screen name="SignIn" component={SignIn}  />
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