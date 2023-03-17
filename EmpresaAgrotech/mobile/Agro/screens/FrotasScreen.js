import React from 'react';
import { View, Text, FlatList } from 'react-native';

const vehicles = [
  { id: 1, name: 'Carro', brand: 'Fiat', year: 2022 },
  { id: 2, name: 'Caminhão', brand: 'Volvo', year: 2021 },
  { id: 3, name: 'Moto', brand: 'Honda', year: 2023 },
  { id: 4, name: 'Van', brand: 'Mercedes', year: 2020 },
];

const VehicleList = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name} - {item.brand}</Text>
      <Text style={{ fontSize: 16 }}>{item.year}</Text>
    </View>
  );

  return (
    <FlatList
      data={vehicles}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default VehicleList;
