import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../app/Slice/BasketSlice';
import {useNavigation} from '@react-navigation/native';

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      {items.length > 0 ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
          <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1 rounded-lg">
            {items.length}
          </Text>
          <Text className="flex-1 text-white font-extrabold text-lg text-center">
            View Basket
          </Text>
          <Text className="text-lg text-white font-extrabold">
            Rs.{basketTotal}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});
