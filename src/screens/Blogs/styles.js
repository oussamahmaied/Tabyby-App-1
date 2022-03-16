import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 5;
// item size
const RECIPE_ITEM_HEIGHT = 110;
const RECIPE_ITEM_OFFSET = 0;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 10;

const styles = StyleSheet.create({
  specialityItemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    margin: 5,
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 25
  },
  title: {
    margin: 0,
    marginBottom: 5,
    color: 'black',
    backgroundColor: '#fff',
    fontSize: 11,
    textAlign: 'center'
  },
  photo: {
    width: 100,
    height: RECIPE_ITEM_HEIGHT,
    // borderRadius: 60
  },
  categoriesItemContainer: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 20,
  },
  categoriesItemContainerImage: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  categoriesItemContainerLogo: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  TitleText: {
    fontSize: 20,
    color: "#26619c",
    fontWeight: 'bold',
    // marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.2,
    backgroundColor: '#26619c',
    marginTop: 6,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesPhotoLogo: {
    width: '50%',
    height: '50%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#26619c',
    marginTop: 11
  },
  categoriesInfo: {
    fontWeight: 'bold',
    color: '#26619c',

    fontSize: 15,
    marginTop: 3,
    marginBottom: 5
  }
});



export default styles;