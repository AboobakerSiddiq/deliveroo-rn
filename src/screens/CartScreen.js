import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../app/Slice/RestaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
  selectBasketTotal,
} from '../app/Slice/BasketSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {urlFor} from '../../sanity';

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setgroupedItemsInBasket] = useState([]);

  const BasketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setgroupedItemsInBasket(groupedItems);
  }, [items]);

  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xl">
          <View>
            <Text className="text-lg font-bold text-center text-gray-500">
              Basket
            </Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-6 right-5">
            <AntDesign name="closecircle" color="#00CCBB" size={35} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="text-black flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          className="divide-y divide-gray-200"
          showsVerticalScrollIndicator={false}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                className="h-12 w-12 rounded-full"
                source={{uri: urlFor(items[0]?.image).url()}}
              />
              <Text className="flex-1 text-black">{items[0]?.name}</Text>
              <Text className="text-gray-600">Rs.{items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">Rs. {BasketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery</Text>
            {BasketTotal > 500 ? (
              <Text className="text-[#00CCBB]">Free</Text>
            ) : (
              <Text className="text-gray-400">Rs. 50</Text>
            )}
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black font-extrabold">Order Total</Text>
            {BasketTotal > 500 ? (
              <Text className="text-black font-extrabold">
                Rs. {BasketTotal + 0}
              </Text>
            ) : (
              <Text className="text-black font-extrabold">
                Rs. {BasketTotal + 50}
              </Text>
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrder')}
            className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-center text-white text-xl font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
