/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Button,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

import {CustomHeader} from '../index';

const getAccountList = () => {
  console.log('Fetch API Call');
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };
  return fetch('https://damilare1947.github.io/api.json', requestOptions)
    .then(response => response.json())
    .then(json => {
      console.log('Fetch Api Response', json);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

const data = [
  {
    name: 'Transfer',
    image: require('../images/transfer.png'),
  },
  {
    name: 'Pay Bills',
    image: require('../images/pay.png'),
  },
  {
    name: 'Buy Airtime',
    image: require('../images/airtime.png'),
  },
  {
    name: 'QR Payment',
    image: require('../images/payment.png'),
  },
  {
    name: 'Loans',
    image: require('../images/loan.png'),
  },
  {
    name: 'Virtual Card',
    image: require('../images/virtual.png'),
  },
];

const numColumns = 3;

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    };
    console.log('Fetch API Call');
    fetch('https://damilare1947.github.io/api.json', requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log('Fetch Api Response', json.accountList);
        this.setState({
          isLoading: false,
          dataSource: json.accountList,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.item}>
          <Image
            source={item.image}
            style={{width: 30, height: 30}}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            color: '#6D6D6D',
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  render() {
    let {dataSource, isLoading} = this.state;

    if (isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            paddingTop: 50,
          }}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={{flex: 1}}>
          <CustomHeader isHome={true} navigation={this.props.navigation} />

          <View style={{flex: 1, margin: 30}}>
            <Text style={{fontWeight: 'bold', color: '#6D6D6D'}}>
              My Accounts
            </Text>
            <FlatList
              style={{marginTop: 20, marginVertical: 30}}
              data={dataSource}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      height: 100,
                      width: 300,
                      justifyContent: 'center',
                      // alignItems: 'center',
                      padding: 20,
                      // borderColor: 'red',
                      backgroundColor: '#E2E1E1',
                      // borderWidth: 2,
                      marginRight: 10,
                      shadowColor: '#989797',
                      shadowOffset: {width: 0, height: 2},
                      elevation: 9,
                      shadowOpacity: 0.5,
                    }}>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                      <Text style={{fontSize: 18, color: '#6D6D6D'}}>
                        Account:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 15,
                          color: '#6D6D6D',
                        }}>
                        {item.account}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 18, color: '#6D6D6D'}}>
                        Balance:{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          paddingLeft: 15,
                          color: '#6D6D6D',
                        }}>
                        {item.balance}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
            <FlatList
              data={data}
              style={styles.container}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
            {/* <Button
            style={{margin: 10, margintop: 20, marginHorizontal: 16}}
            title="Click me"
            onPress={() => getAccountList()}
          /> */}
          </View>
        </SafeAreaView>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 4,
    margin: 10,
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  itemText: {
    color: '#fff',
  },

  account: {
    borderRadius: 10,
    backgroundColor: '#E2E1E1',
  },
});
