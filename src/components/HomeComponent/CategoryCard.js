import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.categoryCardView}>
      <Image
        style={styles.ImageView}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.CardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCardView: {
    position: 'relative',
    marginRight: 8,
  },
  ImageView: {
    height: 80,
    width: 80,
  },
  CardText: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    color: 'white',
    fontWeight: 'bold',
  },
});
