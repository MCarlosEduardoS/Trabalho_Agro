import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const vehiclesData = [
  { id: 1, name: 'Carro', brand: 'Fiat', driver:'Pedro', year: 2022 },
  { id: 2, name: 'Caminhão', brand: 'Volvo', driver:'Lucas', year: 2021 },
  { id: 3, name: 'Moto', brand: 'Honda', driver:'Jonas', year: 2023 },
  { id: 4, name: 'Van', brand: 'Mercedes', driver:'Emanoel', year: 2020 },
  { id: 4, name: 'Carro', brand: 'Mustang',driver:'Marcelo', year: 2020 },
];

const VehicleListScreen = ({ navigation }) => {
  const [vehicles, setVehicles] = useState(vehiclesData);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name} - {item.brand}</Text>
      <Text style={{ fontSize: 16 }}>{item.year}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Adicionar veículo" onPress={() => navigation.navigate('AddVehicle')} />
    </View>
  );
};

const AddVehicleScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [driver, setDriver] = useState('');
  const [year, setYear] = useState('');

  const handleSave = () => {
    const newVehicle = { id: vehiclesData.length + 1, name, brand, driver, year };
    setVehicles([...vehiclesData, newVehicle]);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Tipo de veiculo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={brand}
        onChangeText={setBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Motorista"
        value={driver}
        onChangeText={setDriver}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const Stack = createStackNavigator();

const VehicleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VehicleList" component={VehicleListScreen} />
      <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
    </Stack.Navigator>
  );
};

export default VehicleNavigator;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
