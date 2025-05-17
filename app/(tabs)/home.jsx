import { Image, Text, View, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/Colors'
import styles from '../styles'
import authStyle from '../(auth)/styles'
import AntDesign from '@expo/vector-icons/AntDesign';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{flexDirection:'row', marginTop:40, justifyContent:'space-between', alignItems:'center'}}>
        <View>
          <Text style={authStyle.homeText}>Welcome Back</Text>
         <Text style={authStyle.home}>Wilson Bright</Text>


        </View>

        <Image source={require('../../assets/images/home.png')} style={{width:30, height:34}} resizeMode='contain'/>
      
      </View>

      <View style={{marginTop:30, alignContent:'center'}}>
        
        <TextInput style={authStyle.input} cursorColor={COLORS.primary} placeholder="Search for a video topic" placeholderTextColor={COLORS.text}/>
        
        
        <View style={{position:'absolute', bottom:20, right:20}}>
          <AntDesign name="search1" size={15} color="white" />
         </View>
      
      
      </View>

      <View style={{marginTop:30}}>
        <Text style={authStyle.homeText}>Trending Videos</Text>
      </View>


      <View  style={{flexDirection:'row', position:'absolute', top:'40%', right:-50}}>
        
        <Image source={require('../../assets/images/Card02.png')} resizeMode='contain' style={{width:150, height:200, borderRadius:8, marginTop:25}}/>
        <Image source={require('../../assets/images/Card01.png')} resizeMode='contain' style={{width:160, height:270, borderRadius:8}} />
        <Image source={require('../../assets/images/Card03.png')} resizeMode='contain' style={{width:150, height:200, borderRadius:8, marginTop:25}} />
       
      </View>
      
    




    </SafeAreaView>

  )
}







