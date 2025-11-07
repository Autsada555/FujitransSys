import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';

interface Props {
  onClose: () => void;
}

const SidebarMenu: React.FC<Props> = ({ onClose }) => {
  const navigation = useNavigation<any>();

  const menuItems = [
    { label: 'Dashboard', icon: 'grid', screen: 'Dashboard' },
    { label: 'Products', icon: 'box', screen: 'Products' },
    { label: 'Favorites', icon: 'heart', screen: 'Favorites' },
    { label: 'Inbox', icon: 'mail', screen: 'Inbox' },
    { label: 'Order Lists', icon: 'list', screen: 'Orders' },
    { label: 'Product Stock', icon: 'layers', screen: 'Stock' },
    { label: 'Pricing', icon: 'dollar-sign', screen: 'Pricing' },
    { label: 'Calendar', icon: 'calendar', screen: 'Bookingcar' },
    { label: 'To-Do', icon: 'check-square', screen: 'Todo' },
    { label: 'Contact', icon: 'phone', screen: 'Contact' },
    { label: 'Invoice', icon: 'file-text', screen: 'Invoice' },
    { label: 'UI Elements', icon: 'sliders', screen: 'UI' },
    { label: 'Team', icon: 'users', screen: 'Team' },
    { label: 'Table', icon: 'grid', screen: 'Table' },
    { label: 'Settings', icon: 'settings', screen: 'Settings' },
    { label: 'Logout', icon: 'log-out', screen: 'Logout' },
  ];

  const handleNavigate = (screen: string) => {
    onClose();
    navigation.navigate(screen);
  };

  return (
    <View style={tw`w-60 h-full bg-white shadow-lg`}>
      {/* Header */}
      <View style={tw`h-16 flex-row items-center px-4 bg-red-600`}>
        <Text style={tw`text-white text-xl font-bold`}>Fujitrans</Text>
      </View>

      {/* Menu */}
      <ScrollView style={tw`flex-1`}>
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => handleNavigate(item.screen)}
            style={tw`flex-row items-center px-4 py-3 border-b border-gray-200`}
          >
            <Icon name={item.icon} size={20} color="#333" style={tw`mr-3`} />
            <Text style={tw`text-gray-800 text-base`}>{item.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Close button */}
      <Pressable
        onPress={onClose}
        style={tw`absolute top-4 right-4 bg-white rounded-full p-2 shadow`}
      >
        <Icon name="x" size={20} color="#333" />
      </Pressable>
    </View>
  );
};

export default SidebarMenu;
