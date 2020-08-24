
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Keyboard, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert ,TouchableWithoutFeedback} from 'react-native';


const currencyPerRupee =
{
  DOLLAR:74.75,
  EURO:87.96,
  POUND:96.27
}

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        inputValue:"",
        resultValue :"0.0"
      }
  }


  buttonPressed = (currency) =>{
    if(this.state.inputValue ==="")
    {
       Alert.alert("Enter Some Value In  "+currency);
    }
    else
    {
      let result = parseFloat(this.state.inputValue)  * currencyPerRupee[currency];
      this.setState({resultValue:result.toFixed(2)})
    }
  }
  render(){

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Enter Amount"
              placeholderTextColor="white"
              value={this.state.inputValue}
              onChangeText={
                inputValue => this.setState({
                  inputValue
                })
              }
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DOLLAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>$</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("EURO");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>POUND</Text>
            </TouchableOpacity>
          </View>
 </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbd69',
  },
  
  screenview:{
    marginTop:20,
  },
  
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    borderColor:"#FFFFFF",
    borderWidth:2,
    backgroundColor:"#c70039",
    alignItems:"center",
    borderRadius: 50
  },
  
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"white"
  },

  inputcontainer:{
    height:70,
    backgroundColor:"#c70039",
    marginTop:10,
    borderWidth:2,
    alignItems:"center",
    borderColor:"#FFFFFF",
    justifyContent:"center",
    color:"white",
    borderRadius: 50
  },
  
  input:{
    color:"white",
    fontSize:30

  },
  
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#FFFFFF",
    borderWidth:2,
    
  },
  
  buttonConverter:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    borderColor:"#FFFFFF",
    borderWidth:2,
    width:"33.33%",
    backgroundColor:"#c70039",
    borderRadius: 15
  },
  
  textButtonConverter:
  {
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
})
