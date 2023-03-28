import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

function MyImagePicker(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage(response.uri);
          props.onImageSelect(response);
        }
      },
    );
  };

  return (
    <View>
      <Button title="Select Image" onPress={handleImageSelect} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: '200px', height: '200px' }} />
      )}
    </View>
  );
}

export default MyImagePicker;
