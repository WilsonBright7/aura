
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, View, Text, FlatList, ScrollView, TouchableOpacity, Pressable } from "react-native"
import { useLocalSearchParams } from "expo-router"
import styles from '../styles';
import authStyle from '../(auth)/styles'
import COLORS from "../../constants/Colors";
import Button from '../../components/Button'




const Details = ()=>{

  const data = useLocalSearchParams ();

  const movie = JSON.parse(data.film)

  return(

    <SafeAreaView style={styles.container}>

      <ScrollView>
       <Image source={{uri : movie?.item?.primaryImage}}
         resizeMode='contain' style={{width:'100%' , height:500}}/>

       <View style={{flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginVertical:10}}>

          <Text style={[authStyle.home,
            {color:'white'}]}>{movie?.item?.originalTitle}</Text>

          <Text style={{color:COLORS.primary,
          fontFamily:'PoppinsSemi'}}>{movie?.item?.averageRating}</Text>

        </View>

        <Text style={[authStyle.homeText, {color:'white',
        textAlign:'justify', letterSpacing:0}]}>
        {movie?.item?.description}</Text>

       <View style={{ flexDirection: "row", justifyContent:'space-between', alignItems:'center', marginVertical:5}}>

          <Text style={[authStyle.home, {color:'white', fontSize:18}]}>Budget:</Text>
                             
          <Text style={{color:COLORS.primary, fontFamily:'PoppinsSemi'}}>${movie?.item?.budget}</Text>

        </View>

        <View style={{ flexDirection: "row", justifyContent:'space-between', alignItems:'center', marginVertical:5}}>

          <Text style={{color:'white', fontSize:15, fontFamily:'PoppinsRegular'}}>Content rating:</Text>
                             
          <Text style={{color:COLORS.primary, fontFamily:'PoppinsSemi'}}>{movie?.item?.contentRating}</Text>

        </View>

        
        <View style={{resizeMode:"contain", marginBottom:30}}>
          <Text style={[authStyle.home, {color:'white', fontSize:18}]}>Trailer</Text>
             <TouchableOpacity>
          <Text style={{color:COLORS.white, fontFamily:'PoppinsSemi'}}>{movie?.item?.trailer}</Text>
          </TouchableOpacity>

        </View> 

        <View style={{marginBottom:50}}>
        <Button text={'Watch later'}/>
        </View>

      </ScrollView>
      

    </SafeAreaView>
  )
}

export default Details;