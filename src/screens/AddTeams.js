import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

export default function AddTeams({navigation}) {
 
  const [title, setTitle] = useState("");
  const [titleError , setTitleError]= useState(false)
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


    const AddList =(title)=>{
      if (title.length > 4 && title.length != 0  ){
        dispatch({type: 'ADD_TODO', payload:title})
        setTitle("")
        navigation.goBack();
      }
    }

  useEffect (()=>{
    if (title.length > 0 && title.length <5  ){
        setTitleError(true)
    }else{
        setTitleError(false)
    }
    console.log(titleError)
    },[title])

  
  return (
    <View style={styles.container}>
       <Header titleText="Add a Tam name" />
      {/* ტექსტის შეყვანა */}
      <TextInput
        style={[{ borderColor: titleError ? 'red' : 'gray' }, styles.textInputStyle]}
        // style={[{ borderColor: title.length < 4 && title.length > 0 ? 'red' : 'white' }, styles.textInput]}
        placeholder="add min 5 letters..."
        placeholderTextColor="#6E7FAA"
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={(text) => setTitle(text)}
        minLength={5}
      />
      <TouchableOpacity style={styles.ButtonStyle} onPress={ ()=>AddList(title)}>
        <Text style={styles.buttonTextStyle}>+ add to List</Text>
      </TouchableOpacity>
</View>
       )  
  }

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#3C8B81',
},
textInputStyle: {
  marginTop: 30,
  backgroundColor: "white",
  width: "90%",
  height: 60,
  paddingHorizontal: 20,
  borderRadius:10,
  fontSize: 20,
  borderWidth:1,
  alignSelf:'center'
},
ButtonStyle:{
  marginTop: 30,
  backgroundColor: "pink",
  width: "50%",
  height: 50,
  paddingHorizontal: 20,
  borderRadius: 50,
  fontSize: 20,
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
}
});