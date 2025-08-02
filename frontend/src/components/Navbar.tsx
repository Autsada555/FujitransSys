import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

interface NavbarProps {
  onMenuToggle?: () => void; // Optional
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <View style={tw`bg-red-600 h-16 flex-row justify-between items-center px-4`}>
      <Pressable onPress={onMenuToggle}>
        <Icon name="menu" size={28} color="#fff" />
      </Pressable>
      <Text style={tw`text-white text-xl font-bold`}>Fujitrans</Text>
      <View style={{ width: 28 }} /> {/* spacer */}
    </View>
  );
};

export default Navbar;
