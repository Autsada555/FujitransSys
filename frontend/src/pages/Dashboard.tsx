import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';

const Dashboard = () => {
  return (
    <ScrollView style={tw`flex-1 bg-slate-100 p-4`}>
      {/* Title */}
      <Text style={tw`text-3xl font-bold text-neutral-800 mb-4`}>
        Dashboard
      </Text>

      {/* Sales Analytics Card */}
      <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4`}>
        <Text style={tw`text-xl font-bold text-neutral-800 mb-2`}>
          Sales Analytics
        </Text>
        <View style={tw`h-40 bg-blue-100 rounded-lg`} />
        <Text style={tw`text-gray-500 text-xs mt-2`}>
          (Chart Placeholder)
        </Text>
      </View>

      {/* Featured Product Card */}
      <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4`}>
        <Text style={tw`text-xl font-bold text-neutral-800 mb-2`}>
          Featured Product
        </Text>
        <View style={tw`h-40 bg-gray-200 rounded-lg`} />
        <Text style={tw`text-lg font-semibold text-blue-500 mt-2`}>
          Beats Headphone 2019 - $89.00
        </Text>
      </View>

      {/* Customers Card */}
      <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4`}>
        <Text style={tw`text-xl font-bold text-neutral-800 mb-2`}>
          Customers
        </Text>
        <Text style={tw`text-3xl font-bold text-neutral-800`}>
          34,249
        </Text>
        <Text style={tw`text-gray-500`}>New Customers</Text>
        <Text style={tw`text-3xl font-bold text-neutral-800 mt-2`}>
          1,420
        </Text>
        <Text style={tw`text-gray-500`}>Repeated</Text>
      </View>

      {/* Revenue Card */}
      <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4`}>
        <Text style={tw`text-xl font-bold text-neutral-800 mb-2`}>
          Revenue
        </Text>
        <View style={tw`h-40 bg-red-200 rounded-lg`} />
        <Text style={tw`text-gray-500 text-xs mt-2`}>
          (Revenue Chart Placeholder)
        </Text>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
