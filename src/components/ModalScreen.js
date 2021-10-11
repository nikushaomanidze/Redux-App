import React  from 'react'
import {View, Text,StyleSheet, Modal ,TouchableHighlight, TouchableWithoutFeedback} from 'react-native'



function ModalScreen(props){

  return(
    <Modal
    visible={props.ModalOpen}
    animationType="slide"
    transparent={true}
    >
    <TouchableHighlight  style={styles.modalBackGroundStyle} onPress={props.ModalClose}   underlayColor="transparant">
    <TouchableWithoutFeedback >
    <View style={styles.modalStyle}  >
        <Text style={styles.modalTextStyle}>
          hello this is modal,hello this is modallllll,
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
          </TouchableWithoutFeedback>
  
      </TouchableHighlight>
      
    </Modal>
  )}

  const styles=StyleSheet.create({
  modalBackGroundStyle:{
  flex:1,
  backgroundColor:'transparent',
  justifyContent:'center',
  alignItems:'center',
  padding:30
},
modalStyle:{
backgroundColor:'red',
borderRadius:30,
padding:30,

},
modalTextStyle:{
  marginTop:10,
  fontSize:15
},
  })

  export default ModalScreen