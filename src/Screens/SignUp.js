import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/Autho/SignupStyles';
import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            pass: '',
            cpass: '',


        }
    }

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
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{margin:'5%',alignItems:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:25}}>Register With US</Text>
                        </View>
                        <TextInput
                            value={this.state.name}
                            placeholder="Enter Name"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            onChange={(name) => this.setState({ name })}
                        />
                        <TextInput
                            value={this.state.email}
                            placeholder="Enter Email"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            onChange={(email) => this.setState({ email })}
                        />
                        <TextInput
                            value={this.state.phone}
                            placeholder="Enter Contact"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            onChange={(phone) => this.setState({ phone })}
                        />
                        <TextInput
                            value={this.state.pass}
                            placeholder="Enter Password"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            secureTextEntry={true}
                            onChange={(pass) => this.setState({ pass })}
                        />
                        <TextInput
                            value={this.state.cpass}
                            placeholder="Confirm Password"
                            underlineColorAndroid="#000000"
                            style={{margin:'3%'}}
                            secureTextEntry={true}
                            onChange={(cpass) => this.setState({ cpass })}
                        />

                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                                <LinearGradient
                                    colors={['#4c669f', '#f985b2']}
                                    style={styles.buttonText}  >

                                    <Text style={styles.start}>
                                        Register
                            </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>


            </View>
        )
    }
}
