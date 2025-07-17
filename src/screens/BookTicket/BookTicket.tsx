import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Icons } from '../../utils/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import { SCREENS } from '../../utils/navigationStrings';
import { bookHall } from '../../utils/contants';
import { useBookTicketStyles } from './style';
const BookTicket = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { movie } = params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateList, setDateList] = useState([]);
  const styles = useBookTicketStyles();
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    const today = moment();
    const dates = [];

    for (let i = 0; i < 14; i++) {
      const date = moment(today).add(i, 'days');
      dates.push({
        label: date.format('ddd'), // e.g., Mon, Tue
        value: date.format('YYYY-MM-DD'),
        display: date.format('D MMM'), // e.g., 16 Jul
      });
    }

    setDateList(dates);
    setSelectedDate(dates[0]?.value); // default to today
  }, []);
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
            {movie?.status || 'No status available'}
          </Text>
        </View>
        <View></View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Date</Text>
        <FlatList
          data={dateList}
          horizontal
          keyExtractor={item => item.value}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => {
            const isSelected = item.value === selectedDate;
            return (
              <TouchableOpacity
                onPress={() => setSelectedDate(item.value)}
                style={[styles.dateItem, isSelected && styles.selectedDateItem]}
              >
                <Text
                  style={[
                    styles.dateLabel,
                    isSelected && styles.selectedDateLabel,
                  ]}
                >
                  {item.label}
                </Text>
                <Text
                  style={[
                    styles.dateDisplay,
                    isSelected && styles.selectedDateLabel,
                  ]}
                >
                  {item.display}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <FlatList
          data={bookHall}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => {
            const isSelected = selectedHall?.id === item.id;
            return (
              <TouchableOpacity
                onPress={() => setSelectedHall(item)}
                style={[
                  styles.hallCard,
                  isSelected && styles.selectedHallCard, // Add border style if selected
                ]}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <Text style={styles.hallTime}>{item.title}</Text>
                  <Text style={styles.hallSubtitle}>{item.subtitle}</Text>
                </View>
                <Image source={item.icon} style={styles.hallIcon} />
                <Text style={styles.hallValue}>{item.value}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <TouchableOpacity
        style={[styles.myticketbtn, styles.ticketBtn]}
        onPress={() =>
          navigation.navigate(SCREENS.BOOK_SEAT, {
            movie,
            selectedDate,
            selectedHall,
          })
        }
      >
        <Text style={styles.btnText}>Select Seats</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BookTicket;
