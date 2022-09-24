import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#fff]">
      <View className="h-[25%]"></View>
      <Image
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          display: 'flex',
        }}
        className="h-[50%] w-[100%] items-center  justify-center"
        source={require('../assets/images/Deliveroo-Logo1.png')}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
