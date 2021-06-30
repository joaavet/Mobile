import React from 'react'
import{Viem,Text,StatusBar, StyleSheet} from 'react-native'
import { AsyncLocalStorage } from 'async_hooks';

export default function Index({navigation}) {
  const [user,setuser] = userstate('')
  useeffect (() =>{
  AsyncStorage.getitem('@user').them(user =>{
    if(!user){
      navigation.navigate('Login')
    }else{
setuser(json.parse(user))
    }
  })
})

function logoff(){
  AsyncStorage.removeItem('@user');
  navigation.navigate('Login')
}
    return (
      <View style={styles.container}/>
      <View style={styles.header}>
        <View>
          <image source={avatar}style={(styles.avatar)}></image>
        </View>
        <view></view>

        <text style={styles.Name}>{user.name}</text>
        <text>Numero de matricula:{user.ra}</text>
        <text>[user.email]</text>
      </View>
      <view style={styles.arealogout}/>
      <tcon onPress={logoff} style={styles.logout} name='logout'/>
     
     <view style={styles.areaConfig}/>
    
         <tcon onPress={settings} style={styles.config} name='corg' type ='font-awesome'/>
     
 <text>content</text>
    )
  }
  

  const styles =StyleSheet.create({ user => {
    user = json.parse(user);
    if(!user){
    navigation.navigate('login')
  }else{
    setuaser = await AsyncStorage.getitem('@user')
  }
     container :{
      flex:1,
      justifyContent = "center",
      alignItens= "center"
    }
    const styles = StyleSheet.create({
      container :{
        flex: 1,
        alignItens :'center'
      },
      header:{
          marginTop:30,
          flexDirection: 'row',
          paddingVertical: 10,
          width:"100%",
      },
      Name :{
        fontSize: 38,
        flexDirection:m='row',
      },
      text : {
        fontSize:32,
        color: "#000"
      },
      arealogout:{
        justifyContent: "center",
        width: 40,
        height: 40,
        marginVertical:'5%',
        alignItens : 'center'
      },
      areaConfig:{
        marginVertical:10

      },
      logout:{
        marginVertical:200,
        textAlign:"center"
      },
      config:{
      paddingVertical: 10
      },
      avatar:{
        width: 60,
        height: 80,
        borderRadius: 75,
        marginHorizontal:10
      }
    })