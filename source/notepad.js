import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { bodyTextCount, titleTextCount} from "./redux/actions/index.actions";

import styles from './Notepad.component.style';

export default function Notepad() {

    const [note_title, setNoteTitle]            = useState('');
    const [note_body, setNoteBody]              = useState('');
    const [title_char_count, setTitleCharCount] = useState('');
    const [body_char_count, setBodyCharCount]   = useState('');

    const dispatch = useDispatch();
    
    const titleTextCountVal = useSelector((store)=> store.textTitleCounter);
    const bodyTextCountVal  = useSelector((store)=> store.textBodyCounter);
    
    const processTitleText=(text)=> {
        setNoteTitle(text);
        dispatch(titleTextCount(text.length));
    }

    const processBodyText=(text)=> {
        setNoteBody(text);
        dispatch(bodyTextCount(text.length));
    }

    const getNoteData=()=> {
        if(note_title != '' && note_body != '' && note_title.length > 0 && note_body.length > 0) {
            alert('Entered:'+note_title+"::"+note_body);
        }
        else {
            Alert.alert("Info", "Please enter the details!");
        }
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.heading1}>Note title</Text>
            <View style={styles.inputView1}>
                <TextInput
                    onChangeText={(text)=> processTitleText(text)}
                    multiline={true}
                    maxLength={100}
                    editable={true}
                    placeholder='Note title here'   />
            </View>

            {
                titleTextCountVal != '' ?
                    <View style={{alignSelf:"flex-end"}}>
                        <Text>{titleTextCountVal} characters</Text>
                    </View>
                :
                    null
            }

            <Text style={[styles.heading1, {marginTop:20}]}>Note body</Text>
            <View style={styles.inputView2}>
                <TextInput
                    onChangeText={(text)=> processBodyText(text)}
                    multiline={true}
                    maxLength={500}
                    editable={true}
                    placeholder='Note body here'    />
            </View>
            
            {
                bodyTextCountVal != '' ?
                    <View style={{alignSelf:"flex-end"}}>
                        <Text>{bodyTextCountVal} characters</Text>
                    </View>
                :
                 null
            }

            <View style={{marginTop:20}}>
                <Button
                    title="Save"
                    onPress={()=>getNoteData()}/>
            </View>
            
        </View>
    )
}



