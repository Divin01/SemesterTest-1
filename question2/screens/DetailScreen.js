import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  price: {
    fontSize: 16,
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    color: 'grey'
  }
});

export default DetailScreen;
