import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { bodyTextCount} from "./redux/actions/index.actions";

import styles from '../source/Notepad.component.style';

export default function Notepad() {

    const [note_title, setNoteTitle]            = useState('');
    const [note_body, setNoteBody]              = useState('');
    const [title_char_count, setTitleCharCount] = useState('');
    const [body_char_count, setBodyCharCount]   = useState('');

    const dispatch = useDispatch();
    
    const  bodyTextCountVal = useSelector((store)=> store.textCounter);

    const processText=(text)=> {
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
            {
                console.log("BodyText:"+JSON.stringify(bodyTextCountVal))
            }
            <Text style={styles.heading1}>Note title</Text>
            <View style={styles.inputView1}>
                <TextInput
                    onChangeText={(text)=> setNoteTitle(text)}
                    multiline={true}
                    maxLength={100}
                    editable={true}
                    placeholder='Note title here'   />
            </View>

            {
                title_char_count != '' ?
                    <View style={{alignSelf:"flex-end"}}>
                        <Text>{title_char_count} characters</Text>
                    </View>
                :
                    null
            }

            <Text style={[styles.heading1, {marginTop:20}]}>Note body</Text>
            <View style={styles.inputView2}>
                <TextInput
                    onChangeText={(text)=> processText(text)}
                    multiline={true}
                    maxLength={500}
                    editable={true}
                    placeholder='Note body here'    />
            </View>
            
            {
                body_char_count != '' ?
                    <View style={{alignSelf:"flex-end"}}>
                        <Text>{body_char_count} characters</Text>
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



