import React from 'react';
import { View, Text } from 'react-native';

const MyList = (props) => {
  const listItems = [
    { id: 1, title: 'Item 1', description: 'Test Item 1' },
    { id: 2, title: 'Item 2', description: 'Test Item 2' },
    { id: 3, title: 'Item 3', description: 'Test Item 3' },
  ];

  const renderItem = (item) => {
    return (
      <View key={item.id}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: props.backgroundColor , margin: '30px', borderStyle: 'dashed', borderWidth:'3px',width: '200px',height: '300px', alignItems: 'center'}}>
      {listItems.map((item) => renderItem(item))}
    </View>
  );
};

export default MyList;