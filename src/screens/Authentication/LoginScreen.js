import React, { useState, useEffect } from 'react';
import zina from './styles'
import axios from 'axios';
import { ActivityIndicator,  AsyncStorage } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import NSLight from '../../../assets/fonts/NunitoSans-Light.ttf';
import NSRegular from '../../../assets/fonts/NunitoSans-Regular.ttf';
import NSBold from '../../../assets/fonts/NunitoSans-Bold.ttf';
import NSExtraBold from '../../../assets/fonts/NunitoSans-ExtraBold.ttf';
import * as Google from 'expo-google-app-auth';

export default function LoginScreen3({ navigation }) {
  
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });

  const [activeTab, setActiveTab] = useState('Login');

  useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  function switchTab() {
    if (activeTab === 'Login') {
      setActiveTab('Register');
    } else {
      setActiveTab('Login');
    }
  }

  function Login() {
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [inputs, setInputs] = React.useState({
      email: "",
      password: "",
    })
    const handleonChange = (text, input) => {
      setInputs(prevState => ({ ...prevState, [input]: text }))
    }

    const IP = "http://192.168.250.221:3000"

    const presslogin = () => {

      axios.post(`${IP}/user/userlogin`,{email:inputs.email,password:inputs.password})
          .then(async result=>{
            console.log(result

              );
             await AsyncStorage.setItem("response",JSON.stringify(result))
                navigation.navigate('Home')
            }).catch(err=>{
              console.log(err,"sfqd");
              alert("Please write your password")
            })
    }
    const onloginInGooglePressed = 
    async ()=>{
      try {
        const result = await Google.logInAsync({
          androidClientId: "43341331951-lvkbfsn9refima4il5cd3sh3c41o946a.apps.googleusercontent.com",
          scopes: ['profile', 'email'],
        });
        console.log(result.accessToken)
        if (result.type === 'success') {
          return axios.post(`${IP}/user/userlogin`,{  email: result.user.email, password: result.user.id})
          .then(async (result) => {
            await AsyncStorage.setItem("response",JSON.stringify(result))
              navigation.navigate('Home')
  
          }).catch(err => {
              console.log(err, "sfqd");
              alert("erreur")
          });
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    };
    
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://media.discordapp.net/attachments/935973910695002123/953355010568257667/logo.png?width=960&height=443'}}/>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
            <View style={zina.inputView}>
              <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='envelope'
                type='font-awesome'
                color='#26619c'
                size={22}
              />
              <TextInput
                style={zina.input}
                placeholder='Email'
                placeholderTextColor='#7F7F7F'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCompleteType='email'
                // returnKeyType='next'
                onChangeText={(text) => handleonChange(text, "email")}
              />
            </View>
            <View style={zina.inputView}>
              <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='key'
                type='font-awesome-5'
                color='#26619c'
                size={22}
              />
              <TextInput
                style={zina.input}
                placeholder='Password'
                placeholderTextColor='#7F7F7F'
                secureTextEntry={!showLoginPassword}
                textContentType='password'
                returnKeyType='done'
                onChangeText={(text) => handleonChange(text, "password")}
              />
              <TouchableOpacity
                style={{ paddingVertical: 4 }}
                onPress={() => {
                  setShowLoginPassword(!showLoginPassword);
                }}
              >
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton}  >
              <Text style={styles.loginButtonText} onPress={presslogin} >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText}
                        onPress={() => {
                          navigation.navigate("Signup");
                        }}
              >
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity>
            <View style={zina.socialLoginView}>
              <TouchableOpacity style={zina.socialLoginTouchable}>
                <Icon name='google' type='font-awesome' color='#26619c' onPress={onloginInGooglePressed} />
              </TouchableOpacity>
              <TouchableOpacity style={zina.socialLoginTouchable}>
                <Icon name='facebook' type='font-awesome' color='#26619c'  />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function Register() {
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    const [inputs, setInputs] = React.useState({
      userName: "",
      email: "",
      password: "",
      phoneNumber: ""
    })
    const handleonChange = (text, input) => {
      setInputs(prevState => ({ ...prevState, [input]: text }))
    }

    const IP = "http://192.168.250.37:3000"
    var pressSignup = () => {
      axios.post(`${IP}/user/usersignup`, { userName: inputs.userName, email: inputs.email, password: inputs.password, phoneNumber: inputs.phoneNumber })
        .then(result => {
          console.log(result
          );
          navigation.navigate('Login')

        }).catch(err => {
          console.log(err, "sfqd");
          alert("erreur")
        })

    }
    const onSignInGooglePressed = 
    async ()=>{
      try {
        const result = await Google.logInAsync({
          androidClientId: "43341331951-lvkbfsn9refima4il5cd3sh3c41o946a.apps.googleusercontent.com",
          scopes: ['profile', 'email'],
        });
    console.log(result);
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    };
    return (
      <View style={{ marginTop: 10 }}>
        <View style={zina.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={zina.input}
            placeholder='username'
            placeholderTextColor='#f1f2f6'
            autoCompleteType='name'
            name="userName"
            onChangeText={(text) => handleonChange(text, "userName")}

          />
        </View>


        <View style={zina.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='envelope'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={zina.input}
            placeholder='Email'
            placeholderTextColor='#7F7F7F'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            // returnKeyType='next'
            name="email"
            onChangeText={(text) => handleonChange(text, "email")}


          />
        </View>
        <View style={zina.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={zina.input}
            placeholder='Phone'
            placeholderTextColor='#7F7F7F'
            keyboardType='phone-pad'
            // returnKeyType='next' 
            name="phoneNumber"
            onChangeText={(text) => handleonChange(text, "phoneNumber")}
          />
        </View>

        <View style={zina.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='key'
            type='font-awesome-5'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={zina.input}
            placeholder='Password'
            placeholderTextColor='#7F7F7F'
            secureTextEntry={!showRegisterPassword}
            textContentType='password'
            returnKeyType='done'
            name="password"
            onChangeText={(text) => handleonChange(text, "password")}
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#74b3ce'
              size={22}
            />

          </TouchableOpacity>
        </View>
        <TouchableOpacity style={zina.button}>
          <Text style={zina.buttonText} onPress={pressSignup}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              fontSize: 18,
              color: '#74b3ce',
              fontFamily: 'NSBold',
            }}
          >
            Or Register with
          </Text>
          <View
            style={[
              zina.socialLoginView,
              { marginTop: 14, justifyContent: 'flex-start' },
            ]}
          >
            <TouchableOpacity
              style={[zina.socialLoginTouchable, { marginLeft: 0 }]}
            >
              <Icon name='google' type='font-awesome' color='#26619c' onPress={onSignInGooglePressed} />
            </TouchableOpacity>
            <TouchableOpacity style={zina.socialLoginTouchable}>
              <Icon name='facebook' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
            <TouchableOpacity style={zina.socialLoginTouchable}>
              <Icon name='apple' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color='#2ed573' />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['white', 'white']} style={zina.container}>
        <Text style={zina.welcomeText}>
        </Text>
        <View style={zina.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={zina.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
          </TouchableOpacity>
        </View>
        {activeTab === 'Login' ? <Login /> : <Register />}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: "#74b3ce",
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#26619c',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '8%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#26619c',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#c4c9c7',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#26619c',
    marginTop: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});