import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectRestaurant} from '../app/Slice/RestaurantSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const isSatellite = true;

  console.log(restaurant.lat);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="closecircleo" color="white" size={25} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help?</Text>
        </View>
        {/* Mins View */}
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shodow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold text-black">
                45-55 Minutes
              </Text>
            </View>
            <Image
              source={{uri: 'https://links.papareact.com/fls'}}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="text-gray-500 mt-3">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType={'standard'}>
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
