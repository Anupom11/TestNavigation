import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, Platform, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

var app_logo = require('../../TestNavigation/img/camera_lens.png');

function SignIn() {
    return (
        <View style={styleSheet.container}>

            <StatusBar style="auto"/>

            <Image 
                style={styleSheet.logoView} 
                source={app_logo}/>
            
            <View style={{alignSelf:'center', marginTop:50, width:'80%', flex:1}}>

                <Text style={{fontSize:20, color:'#000000', marginBottom:20, fontWeight:'bold'}}>Welcome</Text>

                <View style={styleSheet.inputView}>
                    <TextInput 
                        style={styleSheet.textInput} 
                        keyboardType={'email-address'}
                        placeholder='Email'/>
                </View>
                <View style={styleSheet.inputView}>
                    <TextInput 
                        style={styleSheet.textInput} 
                        keyboardType={'default'}
                        placeholder='Password' 
                        secureTextEntry={true}/>
                </View>
                
                <View style={{marginTop: 20,}}>
                    <TouchableOpacity style={styleSheet.loginButton}>
                        <Text style={{color:'#ffffff', fontSize:16}}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', marginTop:25}}>
                    <TouchableOpacity>
                        <Text style={{color:'#f73e05', fontSize: 16}}>Forgot Password!</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', marginTop:10}}>
                    <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}/>
                </View>

            </View>

        </View>
    )
}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoView: {
        width: 100,
        height: 100, 
        marginTop: 20,
        shadowColor: '#9f9fa1',
        alignSelf: 'center',
    },
    inputView: {
        backgroundColor: "#f5f5fa",
        borderRadius: 10,
        width: "100%",
        height: 45,
        marginBottom: 20,
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginButton: {
        width: "100%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f73e05",
    }
});

export default SignIn;