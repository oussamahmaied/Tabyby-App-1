import React, { useLayoutEffect,useEffect,useState } from "react";
import { ScrollView, FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import axios from 'axios'

export default function CategoriesScreen(props) {
  const { navigation } = props;
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
      headerTitleStyle: {
        fontWeight: "bold",
        margin: 10,
        marginLeft: 100,
        textAlign: "center",
        alignSelf: "center",
        color: 'white',
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = () => {
    navigation.navigate("Doctors");
  };

  const onPressBlogs = () => {
    navigation.navigate("Blogs");
  };

  const renderBlogs = ({ item })=>(
    <TouchableHighlight underlayColor="#fff" onPress={()=> onPressBlogs()}>
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={{uri: item.img }} />
          
          <Text style={styles.categoriesName}>{item.texte}</Text>
        </View>
      </TouchableHighlight>
  );

  const renderCategory = ({ item }) => (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableHighlight underlayColor="#fff" onPress={() => onPressCategory(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
      <TouchableHighlight underlayColor="#fff" >
        <View style={styles.categoriesItemContainerLogo}>
          <Image style={styles.categoriesPhotoLogo} source={{uri: 'https://media.discordapp.net/attachments/935973910695002123/953363371456077914/logore.png?width=960&height=273'}}/>
        </View>
      </TouchableHighlight>
      <View >
        <Text style={styles.TitleText}>   Speciality</Text>
        <FlatList horizontal showsVerticalScrollIndicator={false} data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
      </View>
        <Text></Text>
        <Text style={styles.TitleText}>   Blogs</Text>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={1} data={blogs} renderItem={renderBlogs} keyExtractor={(item) => `${item.id_blog}`} />
      </View>
    </ScrollView>
  );
}