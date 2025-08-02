import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const History = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text style={tw`text-red-600 text-xl`}>ประวัติการใช้งาน</Text>
  </View>
);

export default History;