import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, SafeAreaView, Pressable } from 'react-native';
import cities from '../data/cities';

const { width } = Dimensions.get('window');

const CityGrid = () => {
  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.name}</Text>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

export default function Page() {
  return <CityGrid />;
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    elevation: 2,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    padding: 2,
  },
});
