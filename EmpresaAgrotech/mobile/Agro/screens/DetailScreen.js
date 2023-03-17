import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.meubanco.com.br/search?q=${searchText}`);
    setResults(response.data);
  };

  const handleDetail = (item) => {
    navigation.navigate('Detail', { data: item });
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o termo de busca"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Buscar" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Detalhes" onPress={() => handleDetail(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
