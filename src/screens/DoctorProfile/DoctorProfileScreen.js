import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight, image } from "react-native";
import styles from "./styles";
import { getIngredientName, getCategoryName, getCategoryById } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { Icon } from 'react-native-elements';
import Localisation from '../Localisation'


const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

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

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.carouselContainer}>
        <Image style={styles.imageContainer} source={{
          uri: item.profilePicture,
        }} />
      </View>

      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>Dr. {item.firstName} {item.lastName}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("Appointement", { category, title })}>
            <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = "Ingredients for " + item.title;
              navigation.navigate("Appointement", { ingredients, title });
            }}
          />
        </View>

        <View>
        </View>
      </View>
      <View style={styles.infoContainerr}>
        <Icon
          style={{ paddingHorizontal: 4, width: 40 }}
          name='university'
          type='font-awesome-5'
          color='#26619c'
          size={22}
        />
        <Text style={styles.userCard}>Harvard university</Text>
      </View>
      <View style={styles.infoContainerr}>
        <Icon
          style={{ paddingHorizontal: 4, width: 40 }}
          name='calendar'
          type='font-awesome-5'
          color='#26619c'
          size={22}
        />
        <Text style={styles.userCard}>{item.description}</Text>
      </View>
      <View style={styles.infoContainerr}>
        <Icon
          style={{ paddingHorizontal: 4, width: 40 }}
          name='business-time'
          type='font-awesome-5'
          color='#26619c'
          size={22}
        />
        <Text style={styles.userCard}>4 years</Text>
      </View>
      <View style={styles.infoContainerr}>
        <Icon
          style={{ paddingHorizontal: 4, width: 40 }}
          name='hand-holding-medical'
          type='font-awesome-5'
          color='#26619c'
          size={22}
        />
        <Text style={styles.userCard}>CNAM: associated</Text>
      </View>
      <View style={styles.infoContainerr}>
        <Icon
          style={{ paddingHorizontal: 4, width: 40 }}
          name='map-marker'
          type='font-awesome-5'
          color='#26619c'
          size={22}
        />
        <Text style={styles.userCard}>Localisation:</Text>
      </View>
      <Localisation />
    </ScrollView>
  );
}