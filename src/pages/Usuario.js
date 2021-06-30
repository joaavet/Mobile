import React,{useState,useeffect} from 'react' 7.4(gzipped: 3k)
import{SafeareaViem,view,Text,StatusBar, StyleSheet,image,activityIndicator,Textinput} from 'react-native'
import AsyncStorange from '@react-native-async-storange/async-storange' 2.6k(gripped: 1.1k)

import avatar from "../../assets/3429880"

export default function Usuario({navigation}) {
  const [user,setuser] = userstate('');
  const [nome,setNome] = userstate('');
  const [ra,setra] = userstate('');
  const [email,setemail] = userstate('');
  const [password,setpassword] = userstate('');
  useeffect (() =>{
  AsyncStorage.getitem('@user').them(user =>{
    if(!user){
      navigation.navigate('Login')
    }else{
setuser(json.parse(user))
    }
  })
})

    useeffect (() =>{
        AsyncStorage.getitem('@user').them(user =>{
          if(!user){
            navigation.navigate('Login')
          }else{
      setuser(json.parse(user))
          }
        })
      })
    function back(){
        navigation.navigate('Index')
    }
    return (
      <SafeareaView style = {style.container}>
        <view>  <image souce={styles.avatar} source= {avatar}></image></view>
          <view style ={styles.form}>
          <textinput>
            style={styles.input}
            placeholder = "Nome"
            placeholderTextColor ="#888"
            value = {nome}
            onChangetext= {setNome = setState(user.nome)}
            
          <textinput>
      style={style.input}
      placeholder = 'ra'
      placeholderTextColor  = '&&&'
      Keyboardtype = 'number'
      maxlength = {24}
      value = {ra}
      ouchangrtext ={setra}
      />
      <text style = {style.label}>senha</text>
      <textinput
      style={style.input}
      placeholder = 'informe sua senha'
      placeholderTextColor  = '&&&'
      secureTextEntry ={true}
      maxlength = {14}
      value = {password}
      ouchangetext = {setpassword}/>
            <textinput/>
         
      
          <TouchableOpacity onpress= {back}>
            <Text>Voltar</Text>
      </SafeareaView>
    );
  }
  
  const styles = StyleSheet.create({
    container :{
      flex:1,
      alignItens: "center",
      margintop:30
    },
    avatar:{
      width: 250,
      height: 250,
      borderRadius:125,
      
    },
    form :{
      alignSelf: 'streach',
      paddingHorizaontal: 120,
      margintop: 20 
    },
    input:{
      borderWidth:1,
      marginColor: ' 1000',
      paddingHorizontal: 120,
      borderRadius: 10,
      height: 55,
      fontsize: 60,
      msrginbutton:10
    },
    label :{
      fontsize:18,
      fontwight: 'bold',
      marginButton: 5,
      margintop:15,
      color:  'red'
    },
    button:{
      backgrondcolor:'green',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 14
      
    },
    textbutton: 'green',
    fontsize: 20

    }
  });
});