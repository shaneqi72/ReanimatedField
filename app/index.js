import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import cities from '../data/cities';

import Animated, { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const RenderItem = ({ item }) => (
  <Link href={`/${item.id}`} asChild>
    <Pressable style={styles.card}>
      <Animated.Image sharedTransitionTag={`image-${item.id}`} source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>
  </Link>
);

const RenderItemSkeleton = ({ item }) => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    // set opacity changable between 0.6 to 1, with duration 1 second, infinity loop which is -1 for, true value making transition smoothly 
    // utilize withRepeat hook and withTiming hook from react native reanimation
    opacity.value = withRepeat(withTiming(0.6, { duration: 1000 }), -1, true);
  }, []);

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.image, { opacity }]} />
      <Animated.View
        style={{
          height: 20,
          width: '50%',
          backgroundColor: 'gainsboro',
          marginTop: 10,
          opacity,
        }}
      />
    </View>
  );
};

const CityGrid = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <FlatList data={Array(10)} renderItem={() => <RenderItemSkeleton />} numColumns={2} />;

  return (
    <SafeAreaView>
      <FlatList
        data={cities}
        renderItem={() => <RenderItem />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

export default CityGrid;

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
    backgroundColor: 'gainsboro',
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
