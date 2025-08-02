import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import tw from 'twrnc';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Car {
  id: string;
  name: string;
  bookedDates: string[]; // วันที่ไม่ว่าง รูปแบบ "YYYY-MM-DD"
}

const cars: Car[] = [
  { id: '1', name: 'รถตู้หมายเลข 1', bookedDates: ['2025-08-05', '2025-08-08'] },
  { id: '2', name: 'รถตู้หมายเลข 2', bookedDates: ['2025-08-06'] },
  { id: '3', name: 'รถตู้หมายเลข 3', bookedDates: [] },
  { id: '4', name: 'รถตู้หมายเลข 4', bookedDates: ['2025-08-07'] },
  { id: '5', name: 'รถตู้หมายเลข 5', bookedDates: ['2025-08-05', '2025-08-09'] },
];

const formatDate = (date: Date) => date.toISOString().split('T')[0]; // "YYYY-MM-DD"

const Bookingcar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, date?: Date) => {
    setShowPicker(false);
    if (date) setSelectedDate(date);
  };

  const selectedDateStr = formatDate(selectedDate);

  const renderCar = ({ item }: { item: Car }) => {
    const isAvailable = !item.bookedDates.includes(selectedDateStr);

    return (
      <Pressable
        onPress={() =>
          Alert.alert(
            item.name,
            isAvailable
              ? `รถว่างในวันที่ ${selectedDateStr}`
              : `รถไม่ว่างในวันที่ ${selectedDateStr}`
          )
        }
        style={[tw`bg-white rounded-lg p-4 mb-4 shadow-md border`,
            isAvailable ? tw`border-green-500` : tw`border-red-500`]}>
        <Text style={tw`text-xl font-semibold text-red-600`}>{item.name}</Text>
        <Text
        style={[tw`mt-1 font-bold`,
            isAvailable ? tw`text-green-600` : tw`text-red-600`]}>
          {isAvailable ? 'ว่าง' : 'ไม่ว่าง'}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={tw`flex-1 bg-red-50 px-4 pt-6`}>
      <Text style={tw`text-center text-2xl font-bold text-red-600 mb-4`}>
        เลือกวันที่ต้องการจอง
      </Text>

      <Pressable
        onPress={() => setShowPicker(true)}
        style={tw`bg-white rounded-lg py-3 px-4 mb-6 shadow-md`}
      >
        <Text style={tw`text-center text-red-600 text-lg`}>
          วันที่: {selectedDateStr} (กดเปลี่ยนวันที่)
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={renderCar}
      />
    </View>
  );
};

export default Bookingcar;
