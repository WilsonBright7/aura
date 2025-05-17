import {View, Text, Image} from 'react-native'
import styles from './styles'
import COLORS from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { router } from 'expo-router';

const Page = ()=>{
    return(
        <SafeAreaView style={styles.container}>

            <Image resizeMode='center' source={require('../assets/images/auralogo.png')} style={{width:115, alignSelf:'center'}}/>
            <Image resizeMode= 'center' source={require('../assets/images/aurora.png')} style={{width:375, height:290, alignSelf:'center'}}/>

            <View>

                 <Text style={{color:COLORS.white, fontFamily:'PoppinsSemi', textAlign:'center', fontSize:30, letterSpacing:-1}}>Discover Endless Possibilities with <Text style={{color: COLORS.primary}}>Aora</Text></Text>
                 <Image style={{width:70, height:13, position:'absolute', right:5, bottom:8}} source={require('../assets/images/path.png')} />


            </View>


            <Text style={{color:COLORS.text, textAlign:'center', fontFamily:'PoppinsRegular', marginTop:10}}>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
            

            <View style={{marginTop:30}}>
              
              <Button onPress={()=>{
                router.navigate('./sign')
                
              }} text={'Continue with Email'}/>

            </View>
        
            

        </SafeAreaView>

    )

}

export default Page