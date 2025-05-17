import { View, Text, Image, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{backgroundColor:'#161622', padding:15, flex:1, alignItems:'flex-start'}}>

      <View style={{gap:50}}>
        <Image style={{marginTop:40, height:34, width:115, marginRight:210}} source={ require('../../assets/images/arrlogo.png')}/>

      </View>


    </SafeAreaView>



  )
}


