import { Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import APIService from '../../Apis/Apis';
import { SCREENS } from '../../utils/navigationStrings';
import { useDashboadStyles } from './style';

const Dashboard = () => {
   const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();
  const styles = useDashboadStyles();

  useEffect(() => {
    APIService.getLatestMovies(1)
      .then(res => {
        setMovies(res.results);
        setFilteredData(res.results);
      })
      .catch(err => {
        console.log('Error fetching movies:', err);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() =>
        navigation.navigate(SCREENS.MOVIE_DETAIL, { movieId: item.id })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }}
          style={styles.poster}
        />
        <Text style={styles.titleOverlay}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
    const handleSearch = (text: string) => {
    setSearch(text);

    if (text) {
      const newData = movies.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(movies);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🎥 Upcoming Movies</Text>
       <TextInput
        style={styles.input}
        placeholder="Search by title"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
