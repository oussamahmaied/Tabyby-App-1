import React, { useState } from 'react';
import { View, StyleSheet,Dimensions,Image,Text } from 'react-native';
import MapView, { Marker,Callout } from 'react-native-maps';
const App = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '50%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='oussama'   />
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height,
    padding: 20,
  },
});