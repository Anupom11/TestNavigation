import React, { useEffect, useState } from "react";
import {View, Text, Modal, TouchableOpacity, ActivityIndicator} from "react-native";

const TestValue=()=> {

    const [loader, setLoader] = useState(false);

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

    const setLoaderVal=(val)=> {
        console.log("Val1:"+loader);
        setLoader(val);
    }

    return (
        <>
            <View>
                {console.log("Val2:"+loader)}
                {loader ? <ModalSection loading={loader} /> : null}
                
                <TouchableOpacity onPress={()=> loader ? setLoaderVal(false) : setLoaderVal(true)}>
                    <Text>Hello world</Text>
                </TouchableOpacity>
                

            </View>
        </>
    )

}

class TestScreenVal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TestValue />
        )
    }

}

export default TestScreenVal;