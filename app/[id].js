import { useNavigation, useRouter, useSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import cities from '../data/cities';

import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CityDetails = () => {
  const { id } = useSearchParams();

  const router = useRouter();

  const city = cities.find((city) => city.id == id);

  const handlePressBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButtonContainer} onPress={handlePressBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </Pressable>
      <Image source={{ uri: city.image }} style={styles.image} />
      <Text style={styles.name}>{city.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus euismod, vestibulum dolor a, pulvinar
          odio. Nunc suscipit felis eget est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit amet
          semper molestie. Sed euismod ligula sit amet urna maximus dignissim. Praesent aliquam, nunc vel interdum
          dignissim, risus neque dignissim elit, id posuere mauris tortor at quam. Duis euismod lobortis enim, vel
          sollicitudin purus bibendum eu. Pellentesque luctus leo id elit congue faucibus. Morbi vel nulla enim.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#000000',
  },
});

export default CityDetails;
