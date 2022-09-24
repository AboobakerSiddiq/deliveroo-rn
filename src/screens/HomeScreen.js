import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HomeComponent/HeaderComponent';
import Categories from '../components/HomeComponent/Categories';
import FeaturedRows from '../components/HomeComponent/FeaturedRows';
import sanityClient from '../../sanity';
const HomeScreen = () => {
  const [featured, SetFeatured] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured']{
          ...,
            restaurants[] -> {
              ...,
              dishes[] ->
            }
          }`,
      )
      .then(data => {
        SetFeatured(data);
      });
  }, []);

  return (
    <SafeAreaView>
      <HeaderComponent />
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}>
        <Categories />
        {/* Featured */}
        {featured?.map(category => (
          <FeaturedRows
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
