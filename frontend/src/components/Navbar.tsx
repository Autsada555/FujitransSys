import React from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

interface NavbarProps {
  onMenuToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <View style={tw`w-full h-16 bg-white flex-row items-center justify-between px-4`}>
      {/* ซ้าย - ปุ่มเมนู */}
      <Pressable onPress={onMenuToggle}>
        <Icon name="menu" size={24} color="#333" />
      </Pressable>

      {/* กลาง - Search bar */}
      <View style={tw`flex-1 mx-4`}>
        <View style={tw`flex-row items-center bg-slate-100 rounded-full px-3 border border-neutral-300`}>
          <Icon name="search" size={16} color="#666" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#666"
            style={tw`flex-1 ml-2 text-neutral-800`}
          />
        </View>
      </View>

      {/* ขวา - Notifications + Profile */}
      <View style={tw`flex-row items-center`}>
        {/* Notification */}
        <View style={tw`mr-4 relative`}>
          <Icon name="bell" size={22} color="#444" />
          <View style={tw`absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 items-center justify-center`}>
            <Text style={tw`text-white text-xs font-bold`}>6</Text>
          </View>
        </View>

        {/* Language */}
        <Text style={tw`mr-4 text-stone-500 font-semibold`}>English</Text>

        {/* Profile */}
        <View style={tw`flex-row items-center`}>
          <Image
            source={{ uri: 'https://placehold.co/40x40' }}
            style={[tw`w-11 h-11 rounded-full bg-zinc-300`] as React.ComponentProps<typeof Image>['style']}
          />
          <View style={tw`ml-2`}>
            <Text style={tw`text-neutral-700 font-bold`}>Moni Roy</Text>
            <Text style={tw`text-neutral-600 text-xs`}>Admin</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
