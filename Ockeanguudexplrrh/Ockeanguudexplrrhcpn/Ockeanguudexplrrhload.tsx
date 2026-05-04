import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const Ockeanguudexplrrhload = () => {
  const ockeanguudexplrrNavigation = useNavigation();

  useEffect(() => {
    const ockeanguudexplrrTimer = setTimeout(() => {
      ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhonb' as never);
    }, 6000);

    return () => {
      clearTimeout(ockeanguudexplrrTimer);
    };
  }, [ockeanguudexplrrNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/ossdrmeexplrbecloadbg.png')}
      style={styles.ockeanguudexplrrimageBg}>
      <ScrollView
        contentContainerStyle={styles.ockeanguudexplrrscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ockeanguudexplrrcenter}>
          <Image
            source={
              Platform.OS === 'ios'
                ? require('../../assets/i/ossdrmeexplrbecload.png')
                : require('../../assets/i/ossdrmeexplrbecand.png')
            }
            style={{
              width: 210,
              height: 210,
              borderRadius: 60,
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Ockeanguudexplrrhload;

const styles = StyleSheet.create({
  ockeanguudexplrrimageBg: {
    flex: 1,
  },
  ockeanguudexplrrscrollContent: {
    flexGrow: 1,
  },
  ockeanguudexplrrcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ockeanguudexplrrbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  ockeanguudexplrrbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
});
