import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, Pressable} from "react-native"
import styles from "../styles"
import authStyle from "./styles"
import Button from "../../components/Button"
import COLORS from "../../constants/Colors"
import { router } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

  const sign = ()=>{

    const [passwordShown, setPaswordShown] = useState(false);
    const [userFocused, setUserFocused] = useState (false);
    const [emailFocused, setEmailFocused] = useState (false);
    const [passwordFocused, setPasswordFocused] = useState (false)




    return (
      <SafeAreaView style={styles.container}>
        
        <Image style={{ width:115, height:34, marginTop:50}} source={require ('../../assets/images/auralogo.png')} resizeMode="center"/>
        
        <Text style={authStyle.authText}>Sign up</Text>

        <ScrollView>

          <View style={authStyle.secondaryContain}>
                  
           
            <View style={authStyle.contain}>
                      
             <Text style={authStyle.formText}>Username</Text>
             <TextInput style={[authStyle.input, {borderWidth:userFocused ? 1 : 0, borderColor:userFocused ? COLORS.primary : 'transparent'}]} cursorColor={COLORS.primary}
             
             onBlur={()=>{
                setUserFocused(false)
              }}
              onFocus={()=>{
              
              setUserFocused(true)
              }} placeholder="Your unique username" placeholderTextColor={COLORS.text}/>
            </View>
                   
            
            <View style={authStyle.contain}>
              
              <Text style={authStyle.formText}>Email</Text>
              <TextInput style={[authStyle.input, {borderWidth:emailFocused ? 1 : 0, borderColor:emailFocused ? COLORS.primary : 'transparent'}]} cursorColor={COLORS.primary}
              
              onBlur={()=>{
                setEmailFocused(false)
              }}
              onFocus={()=>{
              
              setEmailFocused(true)
              }}  placeholder="adrian@jmastery.pro" placeholderTextColor={COLORS.text}/>

            </View>

           
            <View style={authStyle.contain}>
              
              <Text style={authStyle.formText}>Password</Text>
              <TextInput style={[authStyle.input, {borderWidth:passwordFocused ? 1 : 0, borderColor:passwordFocused ? COLORS.primary : 'transparent'}]} cursorColor={COLORS.primary}
              onBlur={()=>{
                setPasswordFocused(false)
              }}
              onFocus={()=>{
              
              setPasswordFocused(true)
              
              }} secureTextEntry={!passwordShown}/>

            </View>


            <View style={{position:'absolute', bottom:25, right:20}}>
              
              {   
                passwordShown ? <Pressable onPress={()=>{
                        
                setPaswordShown(false)
                      
                      
              }}>
                       
                  <Ionicons name="eye" size={20} color="#757585" />
                  </Pressable> : <Pressable onPress={()=>{
                      
                setPaswordShown(true)
                    
                    
              }}>

                <Ionicons name="eye-off" size={20} color="#757585" />
                      
                </Pressable>

              }



            </View>

                    

                
          </View>


          <View style={authStyle.buttonContain}>
            
            <Button text={'Sign Up'} onPress={()=>{
              router.navigate('/home')
            }} />

          </View>

          <TouchableOpacity onPress={()=>{
            router.navigate('./signIn')
            }}>
            <Text style={authStyle.footernote}>Already have an account? <Text style={{color:COLORS.primary, fontFamily:'PoppinsSemi'}}>Login</Text></Text>
            
          </TouchableOpacity>

        </ScrollView>



      </SafeAreaView>
    )
  }

export default sign