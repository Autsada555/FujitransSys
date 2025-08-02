import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Profile = () => (
  <View style={tw`flex-1 justify-center items-center`}>
    <Text style={tw`text-red-600 text-xl`}>โปรไฟล์ผู้ใช้</Text>
  </View>
);

export default Profile;