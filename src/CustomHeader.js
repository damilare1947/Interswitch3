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

export class CustomHeader extends Component {
  render() {
    let {navigation, isHome, title} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          margin: 20,
        }}>
        <View style={{flex: 1, marginTop: 10}}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../src/images/menu.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../src/images/back.png')}
                resizeMode="contain"
              />
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'space-between',
          }}>
          <Image
            style={{
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
            source={require('../src/images/i.png')}
          />
        </View>
      </View>
    );
  }
}
