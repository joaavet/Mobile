import React from 'react'
import{asyncstotorangestatic,Viem,Text,image, StyleSheet, navigatio,SafeAreaView} from 'react-native';
import = as bcrypto from 'bcrypto';
import async storange from '@react-native-async-storange/async-storange';
import api from '../service/api';
import logo from '../../assets/logo.png';


export default function Login(Navigation) {
  const[ra,setra]= usestate('0740');
  const[pwd,setpwd]= usestate('senha123456');

  async function formasubmit(){
    //ra e senha para enviar no login.
   const response = await api.post('/user/validation' , {ra,pwd})
 
   if(response.status == 200){
   await asyncstotorangestatic.setitem('@user')
 Navigation.navigate('index')
  }else{
    let msgerror = response.data;
    console.log(msgerror.mensagem);
  }
}
}
    return (
      <SafeAreaView style= {style.container}>  
        
      
        <image source= {logo}></image>
      <view style = {style.form}>
      <text style = {style.label}>Registro academico</text>
     
      <textinput
      style={style.input}
      placeholder = 'informe seu ra'
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
      value = {pwd}
      ouchangetext = {setPad}
      ouchangr ={setpwd = setchangetext function(){
        const testPass =ra;
        const testPass =pwd;
        constsalt= bcrypt.gesaltsync(saltRounds);
        constsalt= bcrypt.gesaltsync(textpass,salt);
        Return hask;
      }
      />

      <Tauchblockcity oupacity onpress = (formsubmit) style = (style.button)>
        <text style={style.button}>logar</text>
      </Tauchblockcity>
      </view>
      </SafeAreaView>    
          );
  }
  
  const style =StyleSheet.create({
    container :{
      flex:1,
      justifyContent: "center",
      alignItens: "center"
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