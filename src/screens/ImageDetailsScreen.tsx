import React from 'react';
import {View, Text, Image} from 'react-native';

const ImageDetailsScreen = ({ route }: any) => {

  const { code, name, emoji } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Image
        source={{ uri: 'https://flagcdn.com/w320/' + code.toLowerCase() + '.jpg' }}
        style={{
          width: '100%',
          height: 300,
          borderRadius: 12,
        }}
      />

      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          color: 'black',
        }}
      >
        {name}
      </Text>

    </View>
  );
};

export default ImageDetailsScreen;