import React, { useLayoutEffect, useRef,useEffect, useState } from "react";
import { ScrollView, Text,FlatList, View, Image, Dimensions, TouchableHighlight,image } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import axios from 'axios'


const { width: viewportWidth } = Dimensions.get("window");

export default function Blogs(props) {
  const { navigation, route } = props;

  const item = route.params?.item;

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    var ip= "http://192.168.250.37:3000"
  axios.get(`${ip}/doctor/api/selectBlogs`).then(res=>{
   setblogs(res.data)
   console.log(res.data);
  }).catch(err=>{console.log(err);})
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const RenderBlogs = ({ item })=>(
    <TouchableHighlight underlayColor="#fff">
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={{uri: blogs[0].img }} />
          <Text style={styles.categoriesName}>{blogs[0].texte}</Text>
        </View>
      </TouchableHighlight>
  );


  return (
    <ScrollView >
      
    </ScrollView>
  );
}