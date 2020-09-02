import React, { useLayoutEffect } from 'react'
import { SafeAreaView, View, Text, Alert } from 'react-native'
 import Feather from 'react-native-vector-icons/Feather'
import { color } from '../../Themes'

const Dashboard = ({navigation}) =>{
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <Feather
                    name="log-out" 
                    size= {30}
                    color= {color.White}
                    style={{right: 20}}
                    onPress= {()=> Alert.alert("Logout", "Are you sure to logout", [
                        { text: "Yes", onPress:()=>alert('Loggedout') },
                        { text: "No" }
                    ],
                    {
                      canslable: false
                    }
                    )}
                />
            ),
        })
    }, [navigation])

    return(
        <SafeAreaView>
            <Text onPress={()=>navigation.navigate('SignUP')} style={{color:'red'}}>Dashboard Screen</Text>
        </SafeAreaView>
    )
}

export default Dashboard;
