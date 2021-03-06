import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Button,Form,Item,Input,Label} from 'native-base'


 class SignUp extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Form>
            <Item fixedLabel style={styles.text}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last style={styles.text}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel last style={styles.text}>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
         

          <Button  block success  style={styles.button}>
        
            <Text>Register</Text>
          </Button>


          
        
        
      </View>
    );
  }
}
export default SignUp;

const styles =StyleSheet.create
({
    button:{
        margin:10
    },
    text:{
        width:250
    }
})
