import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import useLocalStorage from '../src/useLocalStorage';

export default function ProfileScreen() {
    const user = {
        name: 'Test user',
        email: 'testuser@example.com',
        phone: '555-555-5555'
      };
    const [showProfile, setShowProfile] = useState(false);
    
    const handleShowProfile = () => {
      setShowProfile(true);
    };
    
    const handleHideProfile = () => {
      setShowProfile(false);
    };
    
    return (
      <View>
        <Button title="Show Profile" onPress={handleShowProfile} />
        {showProfile && (
          <View>
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Email: {user.phone}</Text>
            <Button title="Hide Profile" onPress={handleHideProfile} />
          </View>
        )}
      </View>
    );
  }
  