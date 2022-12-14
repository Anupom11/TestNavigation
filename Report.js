import React, { useEffect, useState, useRef } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  BackHandler,
  Platform,
  SafeAreaView,
  Alert,
  Button,
  Share,
} from 'react-native';

import { WebView } from 'react-native-webview';

//import { API } from '../APIControllers/APIControllers';
//import Loader from '../SpinLoader/spinner';
//import { COMMON_STYLE } from '../css/commonStyle';

import { useNetInfo } from "@react-native-community/netinfo";

const RAMSReport = ({navigation}) => {

  const [isLoading, setLoading]     = useState(true);
  const [loaderText, setLoaderText] = useState('loading...');
  const netInfo                     = useNetInfo();
  const webViewRef                  = useRef(null);
  const [iskey, setKey]             = useState(1);

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  const urlName1 = "https://mprams.in/MPRAMS/CommonLogin?ul=ctznreport&user=ctzn&password=ctzn@321";
  const urlName2 = "https://anupom11.github.io/";

  useEffect(() => {
    if(netInfo.isInternetReachable==false)
    {
      Alert.alert('No Internet!','Please check internet connectivity!',[{text:'Ok',onPress:()=>{setLoading(false);navigation.goBack()}}])
    }
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      };
    }
  }, [])

  const [webView, setWebView] = useState('');

  const _onNavigationStateChange=(webViewState)=> {
    console.log(webViewState.url);
    setWebView(webViewState.url);
  }

  const share = async () => {
    try {
      return Share.share({
        message: webView,
        url: webView,
      });
    } catch (error) {
      return error;
    }
  };

  return (
    <>
   
      {/* <SafeAreaView style={[COMMON_STYLE.container1,{marginBottom:50}]}> */}
     
     <SafeAreaView>

        <Button
          title='Share'
          onPress={share}/>
        
        {/* <View>
          {isLoading ? <Loader loading={isLoading} text={loaderText}></Loader> : null}
        </View> */}
        <WebView
          ref={webViewRef}
          source={{ uri: urlName2 }}
          style={{ marginTop: 2 }}
          onNavigationStateChange={_onNavigationStateChange.bind(this)}
          cacheEnabled={false}

          /* onLoadProgress={() => { setLoaderText('loading in progress...') }}
          onLoadEnd={() => { setLoading(false); }} */
                    
          onError={(err) => { setLoading(false); Alert.alert('Error On Page Loading','Please check your internet and try again!\nerr ' + err,[{text:'OK',style:'destructive',onPress:()=>{navigation.goBack()}}]) }}
          onHttpError={(err) => { setLoading(false); Alert.alert('HTTP Error!','http err ' + err) }}

        />

      </SafeAreaView>
     
    </>
  );


}

export default RAMSReport;