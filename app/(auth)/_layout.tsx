import {Stack} from "expo-router"

const AuthScreens = ()=>{
    return  (
        <Stack screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="sign"/>
            <Stack.Screen name="signIn"/>

        </Stack>
    )
}

export default AuthScreens