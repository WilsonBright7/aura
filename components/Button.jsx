import { TouchableOpacity, Text } from "react-native"
import COLORS from '../constants/Colors'
import { router } from "expo-router";


const Button = ({text, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{height:58, backgroundColor:COLORS.primary, borderRadius:8, justifyContent:'center'}}>
            <Text style={{textAlign:'center', color:COLORS.buttonText, fontFamily:'PoppinsSemi', fontSize:16}}>{text}</Text>
        </TouchableOpacity>
    )

}

export default Button;