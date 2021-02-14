import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Home from './screens/home';
import Nexthome from './screens/newhome';

const Stack = createStackNavigator();
const MainStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}   options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home}   options={{headerShown:true}}/>
            <Stack.Screen name="Nexthome" component={Nexthome}   options={{headerShown:true}}/>

        </Stack.Navigator>
    )

}
export default MainStack;