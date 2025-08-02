import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

interface Props {
  onClose: () => void;
}

const SidebarMenu: React.FC<Props> = ({ onClose }) => {
  const navigation = useNavigation<any>();

  const handleNavigate = (screen: string) => {
    onClose();
    navigation.navigate(screen);
  };

  return (
    <View style={tw`absolute top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4`}>
      <Text style={tw`text-xl font-bold mb-4 text-red-600`}>เมนู</Text>

      <Pressable onPress={() => handleNavigate('Booking')} style={tw`mb-3`}>
        <Text style={tw`text-base text-gray-800`}>🚗 จองรถ</Text>
      </Pressable>

      <Pressable onPress={() => handleNavigate('History')} style={tw`mb-3`}>
        <Text style={tw`text-base text-gray-800`}>📜 ประวัติ</Text>
      </Pressable>

      <Pressable onPress={() => handleNavigate('Profile')}>
        <Text style={tw`text-base text-gray-800`}>👤 โปรไฟล์</Text>
      </Pressable>
    </View>
  );
};

export default SidebarMenu;
