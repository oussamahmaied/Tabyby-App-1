import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnIcon: {
    height: 25,
    width: 25,
    color : '#fff'
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
    color: '#26619c'
  }
});

export default styles;
