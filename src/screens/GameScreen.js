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

export default function GameScreen({navigation}) {
  const state = useSelector((state) => state);
    
  const words = [{
    text: 'თეფში',
  },
  {
    text: 'მაგიდა',
  },
  {
    text: 'ფეხბურთი',
  },
  {
    text: 'კალათბურთი',
  },
  {
    text: 'რაგბი',
  },
  {
    text: 'ჰოკეი',
  },
  {
    text: 'წყალბურთი',
  },
  {
    text: 'მესი',
  },
  {
    text: 'ბარსელონა',
  },
  {
    text: 'ლაშას მამა',
  },
  {
    text: 'ტრი ტრი ',
  },
]; 
const [textValue, setTextValue] = useState(words[Math.floor(Math.random() * words.length)].text); // we call use state hook with initial value
const [count,setCount]=useState(0)
const [secs, setSecs] = useState(4)
const len = words.length;
const changeTextValue1 = () => {
  setTextValue(words[Math.floor(Math.random() * words.length)].text) 
  setCount(count +1)
}
const changeTextValue2 = () => {
  setTextValue(words[Math.floor(Math.random() * words.length)].text) 
  setCount(count -1)
}

useEffect(() => {
  const timerId = setInterval(() => {
    if (secs ===0) {
      navigation.navigate('SettingScreen', [5000])
    }
    else setSecs(s => s - 1)
  }, 1000)
  return () => clearInterval(timerId);
}, [secs])


  return (
    <View style={styles.container}>
      <Header titleText={state.teamList[1].title}/> 
      <View style={styles.ViewStyle}>
      <Text style={{fontSize:30,marginVertical:40}}> Time : {secs}</Text>
      <Text style={{fontSize:30,marginVertical:40}}> score :{count}</Text>
      <Text style={{fontSize:30,marginVertical:40}}> {textValue}</Text>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',marginTop:100}}>
  <TouchableOpacity onPress={()=> changeTextValue2()} style={{backgroundColor:'red',padding:10,borderRadius:30,width:50,height:50,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:30}}>-</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> changeTextValue1()} style={{backgroundColor:'green',padding:10,borderRadius:30,width:50,height:50,alignItems:'center',justifyContent:'center'}}>
    <Text style={{fontSize:30}}>+</Text>
  </TouchableOpacity>
  </View>
      </View>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C8B81",
    justifyContent:'space-between'

  },
  ViewStyle: {
    flex:1,
    width:'80%',
    alignSelf:'center',
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#895464",
    borderRadius: 10,
  },
  TouchableStyle: {
    backgroundColor: "#4E509A",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  }
});