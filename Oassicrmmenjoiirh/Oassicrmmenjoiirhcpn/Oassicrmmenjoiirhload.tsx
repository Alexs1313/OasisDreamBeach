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

const Oassicrmmenjoiirhload = () => {
  const oassicrmmenjoiirNavigation = useNavigation();

  useEffect(() => {
    const oassicrmmenjoiirTimer = setTimeout(() => {
      oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhonb' as never);
    }, 6000);

    return () => {
      clearTimeout(oassicrmmenjoiirTimer);
    };
  }, [oassicrmmenjoiirNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/ossdrmeexplrbecloadbg.png')}
      style={styles.oassicrmmenjoiirimageBg}>
      <ScrollView
        contentContainerStyle={styles.oassicrmmenjoiirscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.oassicrmmenjoiircenter}>
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

export default Oassicrmmenjoiirhload;

const styles = StyleSheet.create({
  oassicrmmenjoiirimageBg: {
    flex: 1,
  },
  oassicrmmenjoiirscrollContent: {
    flexGrow: 1,
  },
  oassicrmmenjoiircenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  oassicrmmenjoiirbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  oassicrmmenjoiirbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
});
