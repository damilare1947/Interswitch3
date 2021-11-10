// import React, {Component} from 'react';
// import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

// export class LoginScreen extends Component {
//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <Text>Login Screen</Text>
//           <TouchableOpacity
//             style={{marginTop: 20}}
//             onPress={() => this.props.navigation.navigate('HomeApp')}>
//             <Text> Login</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AppButton from './AppButton';
let check = true;

export class LoginScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../images/logo.png')} />
          </View>
          <Text style={styles.text}> Welcome back, Tony Stark</Text>
          <Text style={styles.label}> Username </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textbox}
          />
          <Text style={styles.label}> Password</Text>
          <View style={styles.rowDirection}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textbox2}
              secureTextEntry={check}
            />
            <Image source={require('../images/eye.png')} style={styles.eye} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={[styles.button1]}
              onPress={() => this.props.navigation.navigate('HomeApp')}>
              <Text style={styles.text1}>Login</Text>
            </TouchableOpacity>
            {/* <AppButton
              onPress={() => this.props.navigation.navigate('HomeApp')}
            /> */}
            <Image source={require('../images/biometric.png')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rowDirection: {flexDirection: 'row'},
  button: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: 80,
    marginBottom: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 40,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6D6D6D',
    marginTop: 20,
    marginBottom: 20,
  },

  eye: {
    margin: 20,
  },

  label: {
    color: '#6D6D6D',
    fontSize: 20,
    marginTop: 20,
  },

  textbox: {
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    color: '#6D6D6D',
    backgroundColor: '#F5F4F4',
    borderColor: '#E2E1E1',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
  },
  textbox2: {
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    marginRight: 20,
    color: '#6D6D6D',
    backgroundColor: '#F5F4F4',
    borderColor: '#E2E1E1',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  button1: {
    backgroundColor: '#DC2D2D',
    marginRight: 20,
    padding: 12,
    borderRadius: 5,
    width: '70%',

    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
