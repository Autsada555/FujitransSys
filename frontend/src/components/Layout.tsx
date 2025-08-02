import React, { useState } from 'react';
import { View, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';
import tw from 'twrnc';
import Navbar from './Navbar';
import SidebarMenu from './Sidebarmenu';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View style={tw`flex-1`}>
      <Navbar onMenuToggle={toggleMenu} />

      {/* Sidebar Modal */}
      {menuVisible && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={tw`absolute inset-0 bg-black bg-opacity-30`} />
        </TouchableWithoutFeedback>
      )}
      {menuVisible && <SidebarMenu onClose={toggleMenu} />}

      <View style={tw`flex-1`}>{children}</View>
    </View>
  );
};

export default Layout;
