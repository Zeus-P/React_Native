import React from 'react';
import {  
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView } from 'react-native';
import {  
TabNavigator
} from 'react-navigation';

class InboxScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inbox!</Text>
       
      </View>
    );
  }
}
class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Total Messages!</Text>
      </View>
    );
  }
}
class VisitorScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        
        
        
         
        <Text style={{color: '#ffffcc', fontSize: 30, fontWeight:'bold', marginLeft:70, marginTop:60}}> Enter Visitor details</Text>  
        
        
        
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(255,255,255,0.3)'
          placeholder='Visitor name'
          placeholderTextColor='white'
          
          />
        
          <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(255,255,255,0.3)'
          placeholder='Mobile no.'
          placeholderTextColor="white"
          
        />  
      
        <TextInput style={styles.inputBox} 
          underlineColorAndroid='rgba(255,255,255,0.3)'
          placeholder='Aadhar no.'
          placeholderTextColor="white"
          
        />

        <TouchableHighlight style={styles.button}> 
            <Text style={styles.ButtonText}>SUBMIT</Text>
          </TouchableHighlight>
        
      
      
      </View>
      
    );
  }
}
const styles= StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#34495E",
    flex:1,
    
    
  },
  inputBox:{
    width:300,
    backgroundColor:'rgba(255,255,255,0.3)',    
    fontSize:16,
    color:'#ffffff',
    height:40,
    marginLeft:60,
    marginTop:30
  },
  button:{
    
    backgroundColor:'#00ffff',
    width:100,    
    marginVertical:10,
    marginHorizontal:20,
    paddingVertical:16,
    marginLeft:160,
    marginTop:40,
    borderRadius:10 
  },
  ButtonText:{
    color:'blue',
    fontWeight:'500',
    fontSize:16,
    textAlign:'center'
  }
  });


export default TabNavigator({
  Notifications: {screen: InboxScreen},
  Messages: {screen: MessageScreen},
  Add_New_Details: {screen: VisitorScreen},

});