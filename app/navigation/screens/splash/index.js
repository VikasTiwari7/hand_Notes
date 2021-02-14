import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import App from '../../../../App';
const Splash =({navigation})=>{
    useEffect(()=>{
        timeoutHandle=setTimeout(()=>{
            nextPage();
        },1000)
    });
    const nextPage=()=>{
        navigation.navigate("Home");
        
    }
    return(
        <View>
            <View style={{marginTop:'60%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Handwritting App</Text>
            </View>
        </View>
    )
}
export default Splash;