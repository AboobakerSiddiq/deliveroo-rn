import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {urlFor} from '../../../sanity';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../../app/Slice/BasketSlice';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({id}));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}>
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">Rs.{price}</Text>
          </View>
          <View>
            <Image
              style={{borderWidth: 1, borderColor: '#F3F3F3'}}
              source={{uri: urlFor(image).url()}}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className="bg-white px-3">
          <View className="flex-row items-center space-x-3 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}>
              <AntDesign
                name="minuscircle"
                size={30}
                // color="#00CCBB"
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>

            <Text className="text-lg text-gray-500">{items.length}</Text>
            <TouchableOpacity onPress={addItemsToBasket}>
              <AntDesign
                name="pluscircle"
                size={30}
                color="#00CCBB"
                // color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
