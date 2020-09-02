import React from 'react'
import {SafeAreaView, View, Text } from 'react-native'


const SignUp = ({navigation}) =>{
    return(
        <SafeAreaView>
         <Text onPress={()=>navigation.navigate('Dashboard')}> SignUp Screen </Text>
        </SafeAreaView>
    )
}

export default SignUp;
