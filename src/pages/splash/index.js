import React, { Component } from 'react'
import { Image, View, PermissionsAndroid } from 'react-native'

import styles from './styles'

import { NavigationActions, StackActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  key: null, 
  actions: [NavigationActions.navigate({ routeName: "Main" })]
})

export default class Splash extends Component {

  
  componentDidMount(){
    this.requestGaleriaPermission()
    setTimeout(this.doRouting, 3000);
  }


  requestGaleriaPermission = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Cool Photo App READ_EXTERNAL_STORAGE Permission',
          'message': 'Cool Photo App needs access to your READ_EXTERNAL_STORAGE ' +
                     'so you can take awesome pictures.'
        }
      )
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'Cool Photo App WRITE_EXTERNAL_STORAGE Permission',
          'message': 'Cool Photo App needs access to your WRITE_EXTERNAL_STORAGE ' +
                     'so you can take awesome pictures.'
        }
      )
    } catch (err) {
      console.warn(err)
    }
  }

  doRouting = async () => {
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Image 
          style={styles.stretch}
          source={require('../../assets/splash.jpg')}
        />
      </View>
    )
  }
}