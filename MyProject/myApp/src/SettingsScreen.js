import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isSpanishSelected, setIsSpanishSelected] = useState(false);

  const handleDarkModeToggle = (value) => {
    // Update the isDarkModeEnabled state variable based on the new value of the Switch component
    setIsDarkModeEnabled(value);
  };

  const handleLanguageToggle = (value) => {
    // Update the isSpanishSelected state variable based on the new value of the Switch component
    setIsSpanishSelected(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={handleDarkModeToggle}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Spanish</Text>
        <Switch
          value={isSpanishSelected}
          onValueChange={handleLanguageToggle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
