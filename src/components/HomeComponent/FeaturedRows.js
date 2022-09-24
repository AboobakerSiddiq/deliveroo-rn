import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../../../sanity';

const FeaturedRows = ({id, title, description, featuredCategory}) => {
  const [restaurants, SetRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () =>
    sanityClient
      .fetch(
        `*[_type == 'featured' && _id==$id]{
      ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
        }
      }[0]`,
        {id},
      )
      .then(
        data => {
          SetRestaurants(data?.restaurants);
        },
        [id],
      );
  return (
    <View>
      <View style={styles.TitleView}>
        <Text style={styles.Texttitle}>{title}</Text>
        <AntDesign color="#00CCBB" name="arrowright" size={24} />
      </View>
      <Text style={styles.Textdescription}>{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        style={styles.FeaturedScroll}>
        {restaurants?.map(res => (
          <RestaurantCard
            key={res._id}
            id={res._id}
            imgUrl={res.image}
            title={res.name}
            rating={res.rating}
            genre={res.type?.name}
            address={res.address}
            short_description={res.short_description}
            dishes={res.dishes}
            long={res.long}
            lat={res.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;

const styles = StyleSheet.create({
  TitleView: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  Texttitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 28,
  },
  Textdescription: {
    color: 'rgb(107, 114, 128)',
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 16,
  },
  FeaturedScroll: {
    paddingTop: 16,
  },
});
