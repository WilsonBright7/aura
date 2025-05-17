import { StyleSheet } from "react-native";
import COLORS from "../../constants/Colors";

const authStyle = StyleSheet.create({

    authText:{
        fontFamily:'PoppinsSemi',
        color:COLORS.white,
        fontSize: 22,
        marginTop:50
        
    },

    contain:{
        gap:5,
        marginVertical:10
    },

    secondaryContain:{
        marginTop:30
    },

    formText:{
        fontFamily:'PoppinsMedium',
        color:COLORS.text,
        fontSize:16
    },

    home: {
        fontFamily:'PoppinsSemi',
        color:COLORS.white, 
        fontSize:24

    },

    homeText:{
        fontFamily:'PoppinsRegular',
        color:COLORS.text

    },

    input:{
        backgroundColor:COLORS.input,
        height:58,
        borderRadius:8,
        color:COLORS.white,
        paddingLeft:20,
        fontFamily:'PoppinsMedium'
    },

    buttonContain:{
        marginTop:25,
    },

    footernote:{
        color:COLORS.text, 
        textAlign:'center',
        fontFamily:'PoppinsRegular',
        marginTop:20
    }
})


export default authStyle