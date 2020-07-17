import React, { Component } from 'react';
import { View, Text, StatusBar,  Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/Autho/Styles';
import { useNavigation,useRoute } from '@react-navigation/native';
import SocialNetworking from './SocialNetwork';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
GoogleSignin.configure();
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

GoogleSignin.configure({
    webClientId: '1074648796993-gftste6vrva48gfqqnii0ml0rj7hj1ae.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    
})
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:''
        }
    }
    onLoginGoogle = () => {
        debugger
        GoogleSignin.configure({
          webClientId:
            "1074648796993-gftste6vrva48gfqqnii0ml0rj7hj1ae.apps.googleusercontent.com",
          offlineAccess: false,
        });
    
        GoogleSignin.signIn()
          .then((data) => {
            const credential = firebase.auth.GoogleAuthProvider.credential(
              data.idToken,
              data.accessToken
            );
    
            return firebase.auth().signInWithCredential(credential);
          })
          .then((currentUser) => {
            console.log(`Google signin successful ${JSON.stringify(currentUser)}`);
            Actions.Registration({ userInfo: currentUser });
          })
          .catch((error) => {
            const { message, code } = error;
            console.log(`Google signin error: ${message}, error code: ${code}`);
            if (code === "auth/account-exists-with-different-credential") {
              Alert.alert(" Login Error! ", `${message}`, [{ text: "Ok" }], {
                cancelable: false,
              });
            }
          });
      };
    // _signIn = async () => {
      
    //     debugger
        
    //         try {
    //           await GoogleSignin.hasPlayServices()
    //           const userInfo = await GoogleSignin.signIn();
    //           this.setState({ userInfo});
    //           console.log(userInfo)
                
    //         } 
    //         catch (error) {
    //           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //           } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (f.e. sign in) is in progress already
    //           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //           } else {
    //             // some other error happened
    //           }
    //         }
         
    // };

    

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        source={require('../Images/Logo.png')}
                        resizeMode={"center"}
                        duration={2000}
                        style={styles.logo}
                        animation="bounceIn"
                    />

                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={styles.title}>Stay connected with us !!</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.text}>Sign in with account</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                   
                    </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <LinearGradient
                        colors={['#4c669f', '#f985b2']}
                        style={styles.buttonText}  >

                        <Text style={styles.start}>
                           Get Started
                            </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <GoogleSigninButton
                                style={{ width: 192, height: 48 }}
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={this.onLoginGoogle}
                                
                                />
                    </View>
                </Animatable.View>
            
                <View style={{ width: '50%' }}>
                           
                        </View>
            </View>
        )
    }
}
