import {StyleSheet,Dimensions} from 'react-native'

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const height_Logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor:'#ffba39'
        // backgroundColor:'#5200c6'
        backgroundColor: '#8f073c'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // paddingTop:50
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    headerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerLogin: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop:50
        // paddingVertical: 50,
        // paddingHorizontal: 30,

    },
    logo: {
        width: height_Logo,
        height: height_Logo,

    },

    title: {
        color: '#8f073c',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft:'5%'
    },
    text: {
        color: 'gray',
        marginTop: '5%'
    },
    button:{
        // flexDirection:'row',
        alignItems:'center',
        margin:'10%'
    },
    Login_button:{
        // flexDirection:'row',
        alignItems:'center',
        margin:'5%'
    },
    buttonText:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    start:{
        color:'#ffffff',
        fontWeight:'bold'
    }

})

export default styles ;