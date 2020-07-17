import React, { Component } from 'react';
import { View, Text, StatusBar,  Dimensions, TouchableOpacity,TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/Autho/Styles';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            Password:''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.headerLogin}>
                    <Animatable.Image
                        source={require('../Images/Logo.png')}
                        resizeMode={"center"}
                        duration={2000}
                        style={styles.logo}
                        animation="bounceIn"
                    />

                </View>
                <Animatable.View
                    style={styles.footerLogin}
                    animation="fadeInUpBig"
                >
                    <ScrollView>
                    <Text style={styles.title}>Welcome Back !!</Text>
                    <TextInput
                            value={this.state.username}
                            placeholder="UserName"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            onChange={(cpass) => this.setState({ cpass })}
                        />
                         <TextInput
                            value={this.state.Password}
                            placeholder="Password"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            secureTextEntry={true}
                            onChange={(cpass) => this.setState({ cpass })}
                        />
                    <View style={styles.Login_button}>
                        <TouchableOpacity>
                    <LinearGradient
                        colors={['#4c669f', '#f985b2']}
                        style={styles.buttonText}  >

                        <Text style={styles.start}>
                          Login
                            </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </ScrollView>
                </Animatable.View>

                {/* <Text>
                    Hello world
                </Text> */}
            </View>
        )
    }
}
