import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import tw from 'twrnc';

const Bookingcar = () => {
  return (
    <ScrollView style={tw`flex-1 bg-slate-100 p-4`}>
      {/* Header */}
      <Text style={tw`text-neutral-800 text-3xl font-bold mb-4`}>
        Car Booking
      </Text>

      {/* Card 1 */}
      <View style={tw`w-80 h-60 bg-white rounded-2xl shadow-md border border-zinc-400 mb-6 p-4`}>
        <Text style={tw`text-neutral-800 text-lg font-bold`}>Design Conference</Text>
        <Text style={tw`text-neutral-600 text-sm mt-1`}>Today 07:19 AM</Text>
        <Text style={tw`text-neutral-600 text-sm`}>56 Davion Mission Suite 157</Text>
        <Text style={tw`text-neutral-600 text-sm`}>Meaghanberg</Text>
        {/* <Image
          source={{ uri: 'https://placehold.co/100x60' }}
          style={tw`w-24 h-16 mt-3 rounded`}
        /> */}
      </View>

      {/* Card 2 */}
      <View style={tw`w-80 h-60 bg-white rounded-2xl shadow-md border border-zinc-400 mb-6 p-4`}>
        <Text style={tw`text-neutral-800 text-lg font-bold`}>Weekend Festival</Text>
        <Text style={tw`text-neutral-600 text-sm mt-1`}>16 October 2019 at 5.00 PM</Text>
        <Text style={tw`text-neutral-600 text-sm`}>853 Moore Flats Suite 158</Text>
        <Text style={tw`text-neutral-600 text-sm`}>Sweden</Text>
        {/* <Image
          source={{ uri: 'https://placehold.co/120x80' }}
          style={tw`w-28 h-20 mt-3 rounded`}
        /> */}
      </View>

      {/* Card 3 */}
      <View style={tw`w-80 h-60 bg-white rounded-2xl shadow-md border border-zinc-400 mb-6 p-4`}>
        <Text style={tw`text-neutral-800 text-lg font-bold`}>Glastonbury Festival</Text>
        <Text style={tw`text-neutral-600 text-sm mt-1`}>20-22 October 2019 at 8.00 PM</Text>
        <Text style={tw`text-neutral-600 text-sm`}>646 Walter Road Apt. 571</Text>
        <Text style={tw`text-neutral-600 text-sm`}>Turks and Caicos Islands</Text>
        {/* <Image
          source={{ uri: 'https://placehold.co/130x80' }}
          style={tw`w-32 h-20 mt-3 rounded`}
        /> */}
      </View>

      {/* Button */}
      <View style={tw`w-60 h-11 bg-blue-500 rounded-lg justify-center items-center mt-4`}>
        <Text style={tw`text-white text-sm font-bold`}>+ Add New Event</Text>
      </View>
    </ScrollView>
  );
};

export default Bookingcar;
