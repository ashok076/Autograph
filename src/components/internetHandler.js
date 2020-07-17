import NetInfo from '@react-native-community/netinfo';
import React, {PureComponent} from 'react';
import {Text, View,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {changeConnection} from '../actions/offline';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class OfflineNotice extends PureComponent {
  componentDidMount() {
   NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected)
    });
  }

  componentWillUnmount() {
    NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected)
    });
  }

  handleConnectivityChange = isConnected => {
    this.props.changeConnection(isConnected);
  };

  render() {
    if (!this.props.offline.isConnected) {
      return (
        <View style={{backgroundColor:'red',width:deviceWidth ,height:deviceHeight*5/100 }}>
          <Text style={{textAlign:'center',fontSize:16,fontWeight:'bold',justifyContent:'center',}}>No Internet Connection</Text>
        </View>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

module.exports = connect(mapStateToProps, {changeConnection})(OfflineNotice);
