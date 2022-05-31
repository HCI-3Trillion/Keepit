import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import ArrowButton from '../components/ArrowButton';
import DayBox from '../components/DayBox';

import stories from '../stores/stories';
import { ColorCode, MonthName, DayName } from '../utils/constants';

const CalendarScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const nextMonth = () => {
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const generateDays = () => {
    const init = Array.from({ length: firstDay }, (v, i) => 0);
    const array = Array.from({ length: lastDate }, (v, i) => i + 1);
    return [...init, ...array];
  };

  const moveToStoryDetail = ({ id, comment, date, emotion, imgLink }) => {
    navigation.navigate('StoryDetail', { id, comment, date, emotion, imgLink });
  };

  const isSameDate = (storyDate, currDate) => {
    return (
      storyDate.getFullYear() == date.getFullYear() &&
      storyDate.getMonth() == date.getMonth() &&
      storyDate.getDate() == currDate
    );
  };

  return (
    <View style={styles.contatiner}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Emotions</Text>
        <View style={styles.dateContainer}>
          <ArrowButton iconName="left" handler={prevMonth} />
          <View style={styles.dateWrap}>
            <Text style={styles.month}>{MonthName[date.getMonth()]}</Text>
            <Text style={styles.year}>{date.getFullYear()}</Text>
          </View>
          <ArrowButton iconName="right" handler={nextMonth} />
        </View>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.dayNameContainer}>
          {DayName.map((dayName) => (
            <Text style={styles.dayName} key={dayName}>
              {dayName}
            </Text>
          ))}
        </View>
        <View style={styles.dayContainer}>
          <FlatList
            key={'#'}
            data={generateDays()}
            renderItem={({ item }) => {
              const story = stories.filter((story) => isSameDate(story.date, item))[0];
              return (
                <DayBox
                  text={item}
                  emotion={story ? story.emotion : 'none'}
                  handler={story ? () => moveToStoryDetail(story) : () => {}}
                />
              );
            }}
            keyExtractor={(item) => item}
            numColumns={7}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    marginTop: 10,
    flex: 1,
  },
  topContainer: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
    marginBottom: 20,
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  dateWrap: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    fontSize: 20,
  },
  year: {
    color: ColorCode.GRAY1,
    fontSize: 15,
  },
  calendarContainer: {
    width: Dimensions.get('window').width,
    flex: 8,
  },
  dayNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dayName: {
    width: Dimensions.get('window').width * 0.11,
    margin: Dimensions.get('window').width * 0.01,
    textAlign: 'center',
  },
  dayContainer: {
    alignItems: 'center',
  },
});

export default CalendarScreen;
