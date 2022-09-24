import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {urlFor} from '../../../sanity';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      className="shadow-sm"
      style={styles.RestaurantCardView}>
      <Image style={styles.ImageDim} source={{uri: urlFor(imgUrl).url()}} />
      <View style={styles.ImageView}>
        <Text style={styles.TitleText}>{title}</Text>
        <View style={styles.IconView}>
          <AntDesign name="star" color="rgb(34, 197, 94)" size={22} />
          <Text style={styles.RatingView}>
            <Text style={styles.RatingText}>{rating}</Text> . Restaurants
          </Text>
        </View>
        <View style={styles.LocationView}>
          <EvilIcons name="location" color="rgb(156, 163, 175)" size={22} />
          <Text style={styles.LocationText}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  RestaurantCardView: {
    backgroundColor: 'white',
    marginRight: 12,
  },
  ImageDim: {
    height: 144,
    width: 256,
    borderRadius: 2,
  },
  ImageView: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  TitleText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
    paddingTop: 8,
    color: 'black',
  },
  IconView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 4,
  },
  RatingView: {
    paddingLeft: 4,
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107, 114, 128)',
  },
  RatingText: {
    color: 'rgb(34, 197, 94)',
  },
  LocationView: {
    paddingTop: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 4,
  },
  LocationText: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107, 114, 128)',
  },
});
