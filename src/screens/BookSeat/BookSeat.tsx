import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Icons } from '../../utils/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../utils/colors';
import { scaleModerate } from '../../utils/responsive';
import { Fonts } from '../../utils/fonts';

const BookSeat = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { movie, selectedDate, selectedHall } = params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={Icons.backBlackIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.textColumn}>
          <Text style={styles.title}>
            {movie?.title || 'No title available'}
          </Text>
          <Text style={styles.status}>
            {selectedDate
              ? `${selectedHall?.title} ${selectedHall?.subtitle}`
              : 'No date or time selected'}
          </Text>
        </View>
        <View style={{ width: 30 }} /> {/* Spacer */}
      </View>
      <View>
        <Image
          source={Icons.hallSeatIcon}
          style={styles.backIcon1}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.myticketbtn1}>
          <Text style={styles.btnText1}>3/4 row</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          gap: 10,
        }}
      >
        <TouchableOpacity style={styles.myticketbtn1}>
          <Text style={styles.btnText1}>$ 50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myticketbtn}>
          <Text style={styles.btnText}>Proceed to pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookSeat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    padding: 8,
  },
  backIcon: {
    width: 34,
    height: 44,
  },
  backIcon1: {
    width: 404,
    height: 404,
    alignContent: 'center',
    alignSelf: 'center',
  },
  textColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    marginTop: 4,
    color: Colors.SKYBLUE,
  },
  myticketbtn: {
    paddingVertical: scaleModerate(12),
    borderRadius: scaleModerate(10),
    backgroundColor: Colors.SKYBLUE,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.WHITEPRO,
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: scaleModerate(14),
  },
  myticketbtn1: {
    paddingVertical: scaleModerate(12),
    borderRadius: scaleModerate(10),
    backgroundColor: Colors.lIGHTGREY,
    width: '30%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText1: {
    color: Colors.WHITEPRO,
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: scaleModerate(14),
  },
});
