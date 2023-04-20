
import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ActivityIndicator} from "react-native";

const ModalSection=(props)=> {

    const [loading, setLoading] = useState(props.loading);

    useEffect(()=> {
        setLoading(props.loading);
    }, [false]);

    return (
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={loading}
            onRequestClose={() => {
                setLoading(false);
                console.log('loader modal close requested! status : '+loading);
            }}>
    
            <View style={{backgroundColor:'#00ffff'}}>
    
                <View>
                    <TouchableOpacity onPress={()=> setLoading(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                    <ActivityIndicator animating={loading}  size="small" color="mediumblue" />
                    <Text style={{color:'blue',fontSize:13}}>Loading</Text>
                </View>

            </View>
        </Modal> 
    )
}

export default ModalSection;

