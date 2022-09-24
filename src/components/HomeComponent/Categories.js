import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, {urlFor} from '../../../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () =>
    sanityClient
      .fetch(`*[_type == 'category']`)
      .then(data => setCategories(data));
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal>
      {/* CategoriesCard */}

      {categories?.map(cate => (
        <CategoryCard
          key={cate._id}
          id={cate._id}
          imgUrl={urlFor(cate.image).width(200).url()}
          title={cate.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
