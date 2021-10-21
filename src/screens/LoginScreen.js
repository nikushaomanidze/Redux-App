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
  Modal,
  
} from "react-native";


export default function LoginScreen({navigation}) {
  
  const [modalOpen,setModalOpen]=useState(false)
  return (
    <View style={styles.container}>
        
      <Text>hello this is LoginScreen</Text>
      <TouchableOpacity style={styles.Button} onPress={()=>setModalOpen(true)}>
          <Text style={styles.buttonText}>SIGN IN </Text>
      </TouchableOpacity>
      <TouchableOpacity>
          <Text>create new account</Text>
      </TouchableOpacity>
      <Modal visible={modalOpen} animationType="slide" transparent={true} >
          <View style={styles.modalStyle}>
          <TouchableOpacity style={styles.modalCloseStyle} onPress={()=>setModalOpen(false)}>
              <Text>x</Text>
          </TouchableOpacity>
          <Text>hello</Text>
          <TextInput
          style={styles.TextInputStyle}
          placeholder='Email'
          />
           <TextInput
          style={styles.TextInputStyle}
          placeholder='PASSWORD'
          />
          <TouchableOpacity style={styles.ModalButton} onPress={()=>alert('hello')}>
            <Text style={styles.buttonText}>SIGN IN </Text>
          </TouchableOpacity>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    alignItems:'center',
    flex: 1,
    backgroundColor: "#3C8B81",
  },
  Button:{
      marginTop:500,
      backgroundColor:'white',
      width:'80%',
      padding:20,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
      marginBottom:10
  },
  buttonText:{
      fontSize:20,
      letterSpacing:2,
      fontWeight:'700'
  },
  modalStyle:{
    alignSelf:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    marginTop:400,
    alignItems:'center',
    borderTopLeftRadius:50,
    borderTopRightRadius:50
  },
  modalCloseStyle:{
      marginTop:-25,
      height:50,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green',
      borderRadius:50
  },
  TextInputStyle:{
    marginTop:15,
      width:'80%',
      height:50,
      backgroundColor:'white',
      borderRadius:10,
      borderColor:'black',
      borderWidth:1,
      paddingHorizontal:10,
      fontSize:20
  },
  ModalButton:{
        marginTop:20,
        backgroundColor:'red',
        width:'80%',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginBottom:10
  }

});
