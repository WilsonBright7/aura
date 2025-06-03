import { Image, Text, View, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/Colors';
import styles from '../styles';
import authStyle from '../(auth)/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useEffect , useState} from 'react';
import { router } from 'expo-router';

export default function HomeScreen() {

  const [topMoviesData, setTopMoviesData] = useState ([]);
  const [querry, setQuerry] = useState ('');
  console.log('my movie data', topMoviesData[1]);
  console.log('user querry', querry)

  const getMovieData = async () => {
    try{
      const options = {
       method: 'GET',
       url: 'https://imdb236.p.rapidapi.com/api/imdb/top-box-office',
        headers: {
         'x-rapidapi-key': '84db4607fcmsh66677298c72daedp1ad7f4jsnec70106f1d3d',
         'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
      const response = await axios.request(options)
      setTopMoviesData(response.data)
    }

    catch{
      console.log('eerror', error)
    }
  }

  useEffect (()=>{
    getMovieData()
  }, [])


  return (
    <SafeAreaView style={styles.container}>

      <View style={{flexDirection:'row', 
        marginTop:40, justifyContent:'space-between',
         alignItems:'center'}}>
        <View>
          <Text style={authStyle.homeText}>Welcome Back</Text>
         <Text style={authStyle.home}>Wilson Bright</Text>


        </View>

        <Image source={require('../../assets/images/home.png')} 
        style={{width:30, height:34}} resizeMode='contain'/>
      
      </View>

      <View style={{marginTop:30, alignContent:'center'}}>
        
        <TextInput style={authStyle.input}
         cursorColor={COLORS.primary} 
        placeholder="Search for a video topic" 
        placeholderTextColor={COLORS.text}
        onChangeText={(text)=> setQuerry(text)}/>

        
        
        <View style={{position:'absolute', bottom:20, right:20}}>
          <AntDesign name="search1" size={15} color="white" />
         </View>
      
      
      </View>

      <View style={{marginTop:30}}>
        <Text style={{fontFamily:'PoppinsSemi', 
          color:COLORS.text, 
          fontSize:20}}>Trending Videos</Text>
      </View>



      <View style={{marginBottom:300}}>

       
        <FlatList

          data={topMoviesData.filter(movie=>{
            const film = movie.originalTitle?.toLowerCase().includes(querry.toLowerCase())
            return film;
          })}



          renderItem={(movie)=>{

            return(
              <TouchableOpacity 
              onPress={()=>{router.push({
                pathname:'/details',
                params:{film:JSON.stringify(movie)}
              })
              
              }} 
              style={{marginVertical:20}}>
               
               
               
               <Image resizeMode='contain' style={{width:'100%' , height:500}} 
                 source={{uri:movie?.item?.primaryImage}}/>

                
                <View style={{flexDirection:'row',
                   justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:10}}>

                <Text style={[authStyle.home, {color:'white'}]}>{movie?.item?.originalTitle}</Text>
                
                <Text style={{color:COLORS.primary, 
                  fontFamily:'PoppinsSemi'}}>{movie?.item?.averageRating}</Text>

                </View>


                <Text style={[authStyle.homeText, 
                  {color:'white', textAlign:'justify'}]}>{movie?.item?.description}</Text>

              </TouchableOpacity>
            )
          }}



          ListEmptyComponent={ ()=>{
            return(
              <View>
                <ActivityIndicator size={'small'} color={COLORS.primary}/>
              </View>
            )
          }}

        />
           
      </View>

    </SafeAreaView>

  )
}
