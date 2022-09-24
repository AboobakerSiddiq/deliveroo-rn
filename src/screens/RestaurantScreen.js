import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {urlFor} from '../../sanity';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import DishRow from '../components/RestaurantComponent/DishRow';
import Basket from '../components/RestaurantComponent/Basket';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../app/Slice/RestaurantSlice';

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(
      setRestaurant({
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
      }),
    );
  }, []);
  return (
    <>
      <Basket />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Portion */}
        <View className="relative">
          <Image
            source={{uri: urlFor(imgUrl).url()}}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-5 left-3 p-2 bg-gray-100 rounded-full">
            <AntDesign name="arrowleft" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text style={{color: 'black'}} className="text-3xl font-bold">
              {title}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <AntDesign name="star" color="rgb(34, 197, 94)" size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Evilicons
                  name="location"
                  color="rgb(107, 114, 128)"
                  size={22}
                />
                <Text className="text-gray-500 text-xs">
                  Nearby . {address}
                </Text>
              </View>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 px-4 pb-4">
            {short_description}
          </Text>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign
              color="rgb(107, 114, 128)"
              size={20}
              name="questioncircleo"
            />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy ?
            </Text>
            <Evilicons name="chevron-right" color="#00CCBB" size={25} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-gray-500">
            Menu
          </Text>
          {/* Doshes */}
          {dishes.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
