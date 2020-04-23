import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BoardScreen from './src/container/BoardScreen';
import BoardDetailScreen from './src/container/BoardDetailScreen';
import AddBoardScreen from './src/container/AddBoardScreen';
import EditBoardScreen from './src/container/EditBoardScreen';
import SplashScreen from './src/container/SplashScreen'
import SigninScreen from './src/container/Signin'
import SignupScreen from './src/container/Signup'
const Stack = createStackNavigator(
  // { Splash:SplashScreen,
  //   Signup:SignupScreen,
  //   Signin:SigninScreen,
  //   Board: BoardScreen,
  //   BoardDetails: BoardDetailScreen,
  //   AddBoard: AddBoardScreen,
  //   EditBoard: EditBoardScreen,
  // },
  // {
  //   initialRouteName: 'Splash',
  //   navigationOptions: {
  //     headerStyle: {
  //       backgroundColor: '#777777',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   },
  // },
);

export default class App extends React.Component {
  render() {
    //return <RootStack />;

    if (state.isLoading) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }
    
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {state.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SigninScreen"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});