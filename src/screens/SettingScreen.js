import React ,{useState} from 'react'
import {View, Text,TouchableOpacity,StyleSheet, } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import ModalScreen from '../components/ModalScreen'

export default function SettingScreen(){
  const [openModal,setOpenmodal]=useState(false)
  return(
    <View style={styles.container}  >
    
   <ModalScreen ModalOpen={openModal} ModalClose={()=>setOpenmodal(false)} />      
   <TouchableOpacity style={styles.buttonStyle}  onPress={()=>setOpenmodal(true)}>
     <Text>open modal !</Text>
   </TouchableOpacity>
<Text style={{fontSize:30}}>Text</Text>
   </View>
  )}

  const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'green',
  alignItems:'center',
  justifyContent:'center'
},
buttonStyle:{
  marginTop:30,
  backgroundColor:'red',
  padding:20,
  borderRadius:20
},
  })
