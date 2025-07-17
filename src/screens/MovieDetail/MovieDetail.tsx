import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import APIService from '../../Apis/Apis';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREENS } from '../../utils/navigationStrings';
import { Icons } from '../../utils/icons';
import { getRandomColor } from '../../utils/helpers';
import { useMovieDetailStyles } from './style';

const MovieDetail = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { movieId } = params;
  const styles = useMovieDetailStyles();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIService.getMovieDetail(movieId)
      .then(setMovie)
      .catch(err => console.log('Movie detail error:', err))
      .finally(() => setLoading(false));

    APIService.getMovieVideos(movieId)
      .then(res => {
        const trailer = res.results.find(
          v => v.type === 'Trailer' && v.site === 'YouTube',
        );
        if (trailer) {
          setTrailerUrl(
            `https://www.youtube.com/embed/${trailer.key}?autoplay=1`,
          );
        }
      })
      .catch(err => console.log('Trailer error:', err));
  }, [movieId]);

  if (loading || !movie) return <ActivityIndicator size="large" />;
  console.log('Movie:', movie);

  /* —————————————————  UI  ————————————————— */
  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.posterWrapper}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          }}
          style={styles.poster}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={Icons.backWhiteIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.myticketbtn, styles.ticketBtn]}
          onPress={() => navigation.navigate(SCREENS.BOOK_TICKET, { movie })}
        >
          <Text style={styles.btnText}>Get Tickets</Text>
        </TouchableOpacity>

        {trailerUrl && (
          <TouchableOpacity
            style={[styles.mytrailerbtn, styles.trailerBtn]}
            onPress={() => setShowPlayer(true)}
          >
            <Image
              source={Icons.playIcon}
              style={styles.playIcon}
              resizeMode="contain"
            />
            <Text style={styles.btnText}>Watch Trailer</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.genreContainer}>
        <Text style={styles.sectionTitle}>Genres:</Text>
        <View style={styles.genreList}>
          {movie.genres.map(genre => (
            <View
              key={genre.id}
              style={[styles.genreBadge, { backgroundColor: getRandomColor() }]}
            >
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.overview}>{movie.title}</Text>

        <Text style={styles.sectionTitle}>Overview:</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>

      <Modal visible={showPlayer} animationType="slide">
        <SafeAreaView style={{flex:1}}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setShowPlayer(false)}>
            <Image
              source={Icons.closeIcon}
              style={styles.closeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <WebView source={{ uri: trailerUrl }} />
        </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default MovieDetail;
