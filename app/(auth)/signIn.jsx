import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles"
import { Text, Image, View, TextInput, TouchableOpacity, Pressable } from "react-native"
import authStyle from "./styles"
import Button from "../../components/Button"
import COLORS from "../../constants/Colors"
import { router } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";


const signIn = ()=>{

    const [passwordShown, setPaswordShown] = useState(false);
    const [emailFocused, setEmailFocused] = useState (false);
    const [passwordFocused, setPasswordFocused] = useState (false)


    return (
        <SafeAreaView style={styles.container}>
            <Image style={{ width:115, height:34, marginTop:50}} 
            source={require ('../../assets/images/auralogo.png')} resizeMode="center"/>
            <Text style={authStyle.authText}>Sign in</Text>

            <View style={authStyle.secondaryContain}>

                <View style={authStyle.contain}>
              
                 <Text style={authStyle.formText}>Email</Text>
                 <TextInput style={[authStyle.input, 
                 {borderWidth:emailFocused ? 1 : 0, borderColor:emailFocused ? COLORS.primary : 'transparent'}]} 
                 cursorColor={COLORS.primary}
              
                 onBlur={()=>{
                 setEmailFocused(false)
                 }}
                 onFocus={()=>{
              
                 setEmailFocused(true)
                 }} placeholder="adrian@jmastery.pro" placeholderTextColor={COLORS.text}/>

                </View>


                <View style={authStyle.contain}>
              
                 <Text style={authStyle.formText}>Password</Text>
                 <TextInput style={[authStyle.input, 
                 {borderWidth:passwordFocused ? 1 : 0, borderColor:passwordFocused ? COLORS.primary : 'transparent'}]} cursorColor={COLORS.primary}
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

            <TouchableOpacity>
                <Text style={{color:COLORS.text, textAlign:'right', 
                    fontFamily:'PoppinsRegular', marginTop:10}}>Forgot password</Text>

            </TouchableOpacity>
            

            <View style={authStyle.buttonContain}>
                <Button text={'Log In'} onPress={()=>{
              router.navigate('/home')
            }}/>
            </View>

            <TouchableOpacity onPress={()=>{
                router.navigate('./sign')
            }}>
                 <Text style={authStyle.footernote}>Don't have an account? <Text 
                 style={{color:COLORS.primary, fontFamily:'PoppinsSemi'}}>Signup</Text></Text>
            
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default signIn

