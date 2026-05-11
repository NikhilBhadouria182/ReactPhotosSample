import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { commonStyles } from '../styles/theme';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from './../api/graphql/queries/photoQueries';

const GalleryScreen = ({ navigation }: any) => {

   useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => alert('Text Clicked!')} 
          style={{ marginRight: 15 }}>
          <Text style={{ color: '#007AFF', fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

    // THIS LINE CALLS API
  const { loading, error, data } = useQuery(GET_PHOTOS);
 
  if (loading) {
     return <ActivityIndicator size="large" />;
  }
  if (error) {
     return <Text>Error loading images</Text>;
  }
  const renderItem = ({ item }: any) => {
    return (
       <TouchableOpacity onPress={() => navigation.navigate('ImageDetails', { code: item.code, name: item.name, emoji: item.emoji })}>
        <Image source={{ uri: 'https://flagcdn.com/w320/' + item.code.toLowerCase() + '.jpg' }} style={commonStyles.image}/>
        <Text style={commonStyles.imageText}> {item.name} </Text>
       </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}} >
      <FlatList
        data={data?.countries || []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GalleryScreen;