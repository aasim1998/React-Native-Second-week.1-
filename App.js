import React, {useState} from 'react';
import { StyleSheet, Text, View, textInput } from 'react-native';



export default function App() {
  const [name , setName] = useState ('Aasim');
  const [age, setAge] = useState('23');

  

  return (
    <View style={styles.container}>
      <Text>
        Enter name:
      </Text>
      <Textinput 
       style={styles.input}
       placeholder='e.g. malik'
       onChangeText={(val) => setName(val)}/>

      <Text>
        Enter age:
      </Text>
      <Textinput 
       style={styles.input}
       placeholder='e.g. 99'
       onChangeText={(val) => setAge(val)}/>



      <Text>name: {name}, age:{age}</Text>
      
    </View>

  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderWidth:1,
    borderColor: "#777",
    padding:8,
    margin:10,
    width:200,
  }

  
});
