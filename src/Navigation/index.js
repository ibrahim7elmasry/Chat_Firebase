import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import {Login, SignUP, Dashboard} from '../Container'
import {color} from '../Themes'
const Stack = createStackNavigator();

function NavContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                screenOptions={{
                    headerShown: true,
                    headerStyle:{ backgroundColor: color.Dark_Gray},
                    headerTintColor: color.White,
                    headerTitleAlign: 'center',
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        fontSize:22
                    }
                    
                }}
            >
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                 name='SignUP' 
                 component={SignUP}
                 options={{
                        headerShown: false
                    }}
                 />
                    
                <Stack.Screen 
                    name='Dashboard' 
                    component={Dashboard}
                    options={{
                        // headerLeft: null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;