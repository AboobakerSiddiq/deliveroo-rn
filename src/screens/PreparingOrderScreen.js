import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1">
      <LottieView
        source={require('../assets/images/order-loading')}
        autoPlay
        style={{
          alignItems: 'center',
          marginBottom: '10%',
          backgroundColor: '#00CCBB',
        }}
      />

      <Text className="text-white  mt-[50%] font-bold text-center text-xl">
        Waiting for the Restaurant to accept your order!
      </Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
        className="items-center mt-[80%]"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
