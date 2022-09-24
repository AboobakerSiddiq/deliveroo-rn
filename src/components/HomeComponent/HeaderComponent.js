import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderComponent = () => {
  return (
    <View style={styles.Header}>
      <View style={styles.HeaderView}>
        <Image
          style={styles.ImageView}
          source={{uri: 'https://links.papareact.com/wru'}}
        />
        <View style={styles.HeaderText}>
          <Text style={styles.fonttext1}>Deliver Now!</Text>
          <Text style={styles.fonttext2}>
            Current Location
            <Ionicons name="chevron-down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <FontAwesome name="user-o" size={35} color="#00CCBB" />
      </View>
      <View style={styles.Input}>
        <View style={styles.InputView}>
          <AntDesign
            style={styles.Icon}
            name="search1"
            color="gray"
            size={20}
          />
          <TextInput
            style={styles.InputTextView}
            placeholder="Restaurants and cuisines"
            placeholderTextColor="rgb(156, 163, 175)"
          />
        </View>
        <AntDesign
          style={styles.IconAdjust}
          name="filter"
          color="#00CCBB"
          size={24}
        />
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#fff',
  },
  HeaderView: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  HeaderText: {
    flex: 1,
  },
  ImageView: {
    height: 28,
    width: 28,
    backgroundColor: 'rgb(156, 163, 175)',
    padding: 16,
    borderRadius: 50,
  },
  fonttext1: {
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 8,
    fontSize: 12,
  },
  fonttext2: {
    fontWeight: 'bold',
    paddingLeft: 8,
    fontSize: 20,
    color: 'black',
  },
  Input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    marginHorizontal: 16,
  },
  InputView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'rgb(229, 231, 235)',
    borderRadius: 5,
  },
  InputTextView: {
    marginLeft: 8,
    fontSize: 16,
    color: '#00CCBB',
  },
  Icon: {
    paddingHorizontal: 4,
  },
  IconAdjust: {
    paddingLeft: 16,
    // paddingRight: 6,
  },
});
