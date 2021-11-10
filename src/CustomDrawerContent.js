/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#DC2D2D'}}>
        <ScrollView>
          <TouchableOpacity
            style={{marginTop: 60, marginLeft: 30, flexDirection: 'row'}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              source={require('../src/images/home.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={{color: 'white', paddingLeft: 5, fontSize: 25}}>
              {' '}
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20, marginLeft: 30, flexDirection: 'row'}}
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Image
              source={require('../src/images/Settings2.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={{color: 'white', paddingLeft: 8, fontSize: 25}}>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20, marginLeft: 30, flexDirection: 'row'}}>
            <Image
              source={require('../src/images/help.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            <Text style={{color: 'white', paddingLeft: 8, fontSize: 25}}>
              Help
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
