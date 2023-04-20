import React, { useEffect, useState } from "react";
import {View, Text, Modal, TouchableOpacity, ActivityIndicator} from "react-native";

import ModalSection from "./ModalSection";

const TestValue=()=> {

    const [loader, setLoader] = useState(false);

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