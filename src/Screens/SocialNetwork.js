import React, { Component } from 'react';
import { View, Text, StatusBar,  Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/Autho/Styles';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class SocialNetworking extends React.Component {

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
                    <TouchableOpacity>
                        <Text style={styles.text}>Sign in with account</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity>
                    <LinearGradient
                        colors={['#4c669f', '#f985b2']}
                        style={styles.buttonText}  >

                        <Text style={styles.start}>
                           Get Started
                            </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                </Animatable.View>

                {/* <Text>
                    Hello world
                </Text> */}
            </View>
        )
    }
}
