import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

 const Home =({navigation})=> {
     const nextpage=()=>{
         navigation.navigate('Nexthome')
     }
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={()=>nextpage()}>
          <View style={{marginRight:'70%'}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>New Page</Text>
          </View>
          </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
    //   closeComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Close</Text></View>}
            style={{ flex: 1 }}
            strokeColor={'black'}
            strokeWidth={2}
          />
        </View>
      </View>
    );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});


// AppRegistry.registerComponent('Home', () => Home);