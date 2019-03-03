import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity } from 'react-native'

import iBackground from './src/assets/imgs/background.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
        this.setState({ showPass: false, press: true })
    } else {
        this.setState({ showPass: true, press: false })
    }
  }
  render() {
    return (
      <ImageBackground source={iBackground} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>TADS</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-moon'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                style={styles.inputIcon} />
          <TextInput style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                style={styles.inputIcon} />
          <TextInput style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
          />

        <TouchableOpacity style={styles.btnEye}
          onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.5)'} />
        </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.6
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 18,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#380B61',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});
