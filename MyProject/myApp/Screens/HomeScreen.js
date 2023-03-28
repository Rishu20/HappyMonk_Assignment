import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  function goToProfileScreen() {
    navigation.navigate('ProfileScreen');
  }

  return (
    <View>
      <Button title="Go to Profile Screen" onPress={goToProfileScreen} />
    </View>
  );
}
export default HomeScreen;
