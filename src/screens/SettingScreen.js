import React ,{useState, useSttate} from 'react'
import {View, Text,TouchableOpacity, Modal,StyleSheet,Button } from 'react-native'

export default function SettingScreen(){
  const [openModal,setOpenmodal]=useState(false)
  return(
    <View style={styles.container}>
    <Modal
    visible={openModal}
    animationType="slide"
    transparent={true}
    >
      <View style={styles.modalStyle}>
        <Button title='close' onPress={()=>setOpenmodal(false)}/>
        <Text style={styles.modalTextStyle}>hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll,
          hello this is modal,hello this is modallllll</Text>
      </View>
    </Modal>
    <Text>hello</Text>
    <TouchableOpacity style={styles.buttonStyle}  onPress={()=>setOpenmodal(true)}>
      <Text>open modal !</Text>
    </TouchableOpacity>

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
modalStyle:{
  justifyContent:'flex-end',
  alignItems:'center',
  flex:1,
  backgroundColor:'blue',
  margin:50,
  borderRadius:30,
  padding:15
},
modalTextStyle:{
  marginTop:10,
  fontSize:15
}

  })