import React from 'react'
import { SafeAreaView,View, Text } from 'react-native'


const Login = ({navigation}) =>{
        return(
            <SafeAreaView style={{flex:1}}>
            <Text onPress={()=> navigation.navigate('SignUP')} style={{ color:'black'}}> Login Screen</Text>
        </SafeAreaView>
        )
}

export default Login;
