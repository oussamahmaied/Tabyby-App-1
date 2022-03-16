import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import styles from './styles'
import { Feather as Icon } from '@expo/vector-icons';
// Fonts
import { useFonts } from 'expo-font';
import SSLight from '../../../assets/fonts/source-sans-pro.light.ttf';
import SSRegular from '../../../assets/fonts/source-sans-pro.regular.ttf';
import SSBold from '../../../assets/fonts/source-sans-pro.bold.ttf';
import axios from 'axios';
function Photos({ photos }) {
  const [data, setdata] = useState([])
  const [app, setapp] = useState([])
  useEffect(() => {
    const get = async () => {
      await AsyncStorage.getItem("response").then((result) => {
        var hello = JSON.parse(result)
        console.log(hello);
        console.log(hello.data.user.id_user)
        const IP = "http://192.168.250.37:3000"
        axios.get(`${IP}/user/profileUser/${hello.data.user.id_user}`).then(({ data }) => {
          console.log('data hamla', data)
          setdata(data[0])
          axios.get(`${IP}/user/appointementapp/${hello.data.user.id_user}`).then(({ data }) => {
            console.log('7sak ', data)
            setapp(data[0])
            console.log(data);
          }).catch((err) => {
            console.log(err)
          })
          // console.log(setdata);
        }).catch((err) => {
          console.log(err)
        })
      })
    }
    get()
  }, [])
  // const[app,setapp]=useState([])
  // useEffect(  () => {
  //   const t=async()=>{
  //     await AsyncStorage.getItem("response").then((result)=>{
  //       var hello = JSON.parse(result)
  //       console.log(hello);
  //       // console.log( hello.data.user.id)
  //   })
  //     // const IP = "http://192.168.250.37:3000"
  //     // axios.get(`${IP}/user/appointementapp/${id_user}`).then((data)=>{
  //     //   console.log('7sak ',data)
  //     //   setapp(data)
  //     //   console.log(data);
  //     // }).catch((err)=>{
  //     //   console.log(err)
  //     // })
  //   }
  //  t()
  // },[])
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {/* {photos.map((photo, index) => ( */}
        <View>
          {/* <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={{
                uri: `https://picsum.photos/200/300?random=${index + 1}`,
              }}
            /> */}
            
          <View style={styles.userCardRight}>
            <Text style={styles.userCard} >        your appointement is at: 9:30 AM                </Text>
            <Text style={styles.userCard}>                    With Doctor Ismail </Text>
        <TouchableOpacity
                style= {styles.roundedButton}
            >
        <Text style={styles.buttonText}
              >
                    Cancel 
                </Text>
                </TouchableOpacity>
          </View>
        </View>
        {/* ))}
         */}
      </View>
    </View>
  );

}
export default function ProfileScreen1() {
  
  const [loaded] = useFonts({
    SSLight,
    SSRegular,
    SSBold,
  });
  const [showContent, setShowContent] = useState('Photos');
  const [data, setdata] = useState([])
  const [app, setapp] = useState([])
  useEffect(() => {
    const get = async () => {
      await AsyncStorage.getItem("response").then((result) => {
        var hello = JSON.parse(result)
        console.log(hello);
        console.log(hello.data.user.id_user)
        const IP = "http://192.168.250.37:3000"
        axios.get(`${IP}/user/profileUser/${hello.data.user.id_user}`).then(({ data }) => {
          console.log('data hamla', data)
          setdata(data[0])
          axios.get(`${IP}/user/appointementapp/${hello.data.user.id_user}`).then(({ data }) => {
            console.log('7sak ', data)
            setapp(data[0])
            console.log(data);
          }).catch((err) => {
            console.log(err)
          })
          // console.log(setdata);
        }).catch((err) => {
          console.log(err)
        })
      })
    }
    get()
  }, [])
  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={{ uri: 'https://wallpaperaccess.com/full/2482240.jpg' }}/// coverture
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: 'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/80772247_2462935760593775_8383374698313940992_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TixX3ght1xIAX_1m9iQ&_nc_ht=scontent.ftun4-1.fna&oh=00_AT-wJmdsHdm8YRcjDqQSFjH15RgTInJAoaSCmv9aebrwGw&oe=6240EE13',
                  }}
                />
              </View>
              {/* Profile Name and Bio */}
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{data.userName}</Text>
              </View>
            </View>
            {/* Profile Content */}
            <View style={{ marginTop: 20 }}>
              <View style={styles.profileContentButtonsView}>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Photos')}
                >
                  <Text style={styles.showContentButtonText}>Informations</Text>
                </TouchableOpacity>
              </View>
              {showContent === 'Photos' ? (
                <Photos photos={new Array(13).fill(1)} />
              ) : null}
            </View>
          </View>
        </>
      </ScrollView>
    </View>
  );
}