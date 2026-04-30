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

const Ossdrmeexplrbechhload = () => {
  const ossdrmeexplrbechNavigation = useNavigation();

  useEffect(() => {
    const ossdrmeexplrbechTimer = setTimeout(() => {
      ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhonb' as never);
    }, 6000);

    return () => {
      clearTimeout(ossdrmeexplrbechTimer);
    };
  }, [ossdrmeexplrbechNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/ossdrmeexplrbecloadbg.png')}
      style={styles.ossdrmeexplrbechimageBg}>
      <ScrollView
        contentContainerStyle={styles.ossdrmeexplrbechscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ossdrmeexplrbechcenter}>
          <Image
            source={
              Platform.OS === 'ios'
                ? require('../../assets/i/ossdrmeexplrbecload.png')
                : require('../../assets/i/ossdrmeexplrbecand.png')
            }
            style={
              Platform.OS === 'android' && {
                width: 210,
                height: 210,
                borderRadius: 60,
              }
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Ossdrmeexplrbechhload;

const styles = StyleSheet.create({
  ossdrmeexplrbechimageBg: {
    flex: 1,
  },
  ossdrmeexplrbechscrollContent: {
    flexGrow: 1,
  },
  ossdrmeexplrbechcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ossdrmeexplrbechbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  ossdrmeexplrbechbottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'DmSans-Regular',
    marginTop: 11,
    textAlign: 'center',
  },
});
