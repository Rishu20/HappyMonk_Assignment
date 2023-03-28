import React, { useState } from 'react';
import { View, Button } from 'react-native';

const MyButton = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <View>
      <Button
        title={`Click me (${clickCount})`}
        backgroundColor={'props.backgroundColor'}
        color={'red'}
        fontSize={'props.fontSize'}
        borderRadius={props.borderRadius}
        onPress={handleButtonClick} 

      />
    </View>
  );
};

export default MyButton;
