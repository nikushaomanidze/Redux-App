import React  from 'react'
import {View, Text,StyleSheet, Modal ,TouchableHighlight} from 'react-native'


function ModalScreen(props){

  return(
    <Modal
    visible={props.ModalOpen}
    animationType="slide"
    transparent={true}
    >
    

    <TouchableHighlight  style={styles.modalBackGroundStyle} onPress={props.ModalClose}  underlayColor="tranparant">
      <View/>
      </TouchableHighlight>
      <View style={styles.modalStyle}>
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
  )}

  const styles=StyleSheet.create({
  modalBackGroundStyle:{
  flex:1,
  backgroundColor:'transparent',
},
modalStyle:{
marginTop:250,
backgroundColor:'red',
borderRadius:30,
padding:30,
zIndex:1,
position:'absolute'
},
modalTextStyle:{
  marginTop:10,
  fontSize:15
},
  })

  export default ModalScreen