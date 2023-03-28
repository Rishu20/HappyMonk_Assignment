// import React from 'react';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import MyButton from './src/myButton';
import MyList from './src/myList';
import ProfileScreen from './Screens/ProfileScreen';
import useLocalStorage from './src/useLocalStorage'
import MyImagePicker from './src/MyImagePicker';
import SettingsScreen from './src/SettingsScreen';
import PasswordGenerator from './src/Password_gen';
import MyMap from './src/myMap';

const App = () => {
  // 
  const [count, setCount] = useLocalStorage("count", 0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  // 
  return (
    <View style={styles.container}>
      <MyButton />
      <MyList backgroundColor="#f2f2f2" />
      <ProfileScreen />
    <SettingsScreen />
    <div>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
  <MyImagePicker onImageSelect={handleImageSelect} />
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />
      )}
      <PasswordGenerator />
      <MyMap latitude={12.9821} longitude={77.5946} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
