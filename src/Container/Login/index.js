import React from 'react'
import { SafeAreaView,View, Text , TextInput} from 'react-native'
import { globalStyle } from '../../Themes';
import Logo from '../../Components/Logo';
import FloatingLabelInput from '../../Components/FloatingLabel';

const Login = ({navigation}) =>{
        return(
            <SafeAreaView style={[globalStyle ,{flex:1, backgroundColor:'white'}]}>
                <View style={[globalStyle.containerCentered]}>
                  <Logo />
                </View>

               <View style={{justifyContent:'center', alignItems:'center'}}>
                {/* <FloatingLabelInput
                        label={("FirstName")}
                        /> */}

                       
               </View>
                
                 
        </SafeAreaView>
        )
}

export default Login;
