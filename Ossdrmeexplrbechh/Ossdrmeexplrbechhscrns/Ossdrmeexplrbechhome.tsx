import {useNavigation} from '@react-navigation/native';

import {useOssdrmeexplrbechhSaved} from '../Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

import React, {useMemo} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';
import {
  ossdrmeexplrbechhGetDailyIndex,
  ossdrmeexplrbechhGetDailySafetyTip,
  ossdrmeexplrbechhLocations,
} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhdata';

import LinearGradient from 'react-native-linear-gradient';

const Ossdrmeexplrbechhome = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const {
    ossdrmeexplrbechhIsLocationSaved,
    ossdrmeexplrbechhToggleLocationSaved,
  } = useOssdrmeexplrbechhSaved();

  const ossdrmeexplrbechFeatured = useMemo(() => {
    return (
      ossdrmeexplrbechhLocations[
        ossdrmeexplrbechhGetDailyIndex(ossdrmeexplrbechhLocations.length)
      ] ?? ossdrmeexplrbechhLocations[0]
    );
  }, []);

  const ossdrmeexplrbechTip = useMemo(
    () => ossdrmeexplrbechhGetDailySafetyTip(),
    [],
  );

  const ossdrmeexplrbechFeaturedSaved = ossdrmeexplrbechhIsLocationSaved(
    ossdrmeexplrbechFeatured.id,
  );

  const ossdrmeexplrbechOpenLocation = (id: string) => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhloc', {id});
  };

  const ossdrmeexplrbechGoTab = (name: string) => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechtab');

    requestAnimationFrame(() => {
      ossdrmeexplrbechNavigation.navigate(name);
    });
  };

  return (
    <Ossdrmeexplrbechhlayt>
      <View style={styles.ossdrmeexplrbechwrap}>
        <View style={styles.ossdrmeexplrbechheader}>
          <View>
            <Text style={styles.ossdrmeexplrbechgoodMorning}>GOOD MORNING</Text>
            <Text style={styles.ossdrmeexplrbechbrand}>OASIS BEACH GUIDE</Text>
          </View>
          <View style={styles.ossdrmeexplrbechavatarBtn}>
            <Image
              source={require('../../assets/i/ossdrmeexplrusr.png')}
              style={styles.ossdrmeexplrbechavatarImg}
            />
          </View>
        </View>

        <View style={styles.ossdrmeexplrbechsectionRow}>
          <Text style={styles.ossdrmeexplrbechsectionTitle}>
            LOCATION OF THE DAY
          </Text>
          <View style={styles.ossdrmeexplrbechsectionLine} />
        </View>

        <Pressable
          onPress={() =>
            ossdrmeexplrbechOpenLocation(ossdrmeexplrbechFeatured.id)
          }
          style={styles.ossdrmeexplrbechfeaturedPress}>
          <ImageBackground
            source={ossdrmeexplrbechFeatured.image}
            style={styles.ossdrmeexplrbechfeaturedBg}
            imageStyle={styles.ossdrmeexplrbechfeaturedBgImg}>
            <LinearGradient
              colors={['#050D1A1A', '#050D1A80', '#050D1AF2']}
              style={styles.ossdrmeexplrbechfeaturedFade}
            />

            <View style={styles.ossdrmeexplrbechfeaturedTop}>
              <View style={styles.ossdrmeexplrbechbadge}>
                <Text style={styles.ossdrmeexplrbechbadgeText}>
                  FEATURED TODAY
                </Text>
              </View>
              <Pressable
                onPress={e => {
                  e.stopPropagation?.();
                  ossdrmeexplrbechhToggleLocationSaved(
                    ossdrmeexplrbechFeatured.id,
                  );
                }}
                hitSlop={10}
                style={styles.ossdrmeexplrbechbookmark}>
                <Image
                  source={
                    ossdrmeexplrbechFeaturedSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>

            <View style={styles.ossdrmeexplrbechfeaturedContent}>
              <Text style={styles.ossdrmeexplrbechcoords}>
                {`Lat: ${ossdrmeexplrbechFeatured.coordinates.lat.toFixed(
                  3,
                )}° | Long: ${ossdrmeexplrbechFeatured.coordinates.long.toFixed(
                  3,
                )}°`}
              </Text>
              <Text style={styles.ossdrmeexplrbechfeaturedTitle}>
                {ossdrmeexplrbechFeatured.title}
              </Text>
              <Text
                style={styles.ossdrmeexplrbechfeaturedSubtitle}
                numberOfLines={2}>
                {ossdrmeexplrbechFeatured.description}
              </Text>

              <View style={styles.ossdrmeexplrbechdetailsBtn}>
                <Text style={styles.ossdrmeexplrbechdetailsBtnText}>
                  View Details
                </Text>
                <Image
                  source={require('../../assets/i/ossdrmeexplrbecarr.png')}
                  style={styles.ossdrmeexplrbechdetailsBtnArrow}
                />
              </View>
            </View>
          </ImageBackground>
        </Pressable>

        <Text style={styles.ossdrmeexplrbechblockTitle}>QUICK ACCESS</Text>
        <View style={styles.ossdrmeexplrbechquickRow}>
          <Pressable
            onPress={() => ossdrmeexplrbechGoTab('Ossdrmeexplrbechhmap')}
            style={styles.ossdrmeexplrbechquickItem}>
            <View style={styles.ossdrmeexplrbechquickIcon}>
              <Image
                source={require('../../assets/i/ossdrmeexplrbechtab2.png')}
              />
            </View>
            <Text style={styles.ossdrmeexplrbechquickLabel}>Map</Text>
          </Pressable>
          <Pressable
            onPress={() => ossdrmeexplrbechGoTab('Ossdrmeexplrbechhstries')}
            style={styles.ossdrmeexplrbechquickItem}>
            <View style={styles.ossdrmeexplrbechquickIcon}>
              <Image
                source={require('../../assets/i/ossdrmeexplrbechtab3.png')}
              />
            </View>
            <Text style={styles.ossdrmeexplrbechquickLabel}>Stories</Text>
          </Pressable>
          <Pressable
            onPress={() => ossdrmeexplrbechGoTab('Ossdrmeexplrbechhquz')}
            style={styles.ossdrmeexplrbechquickItem}>
            <View style={styles.ossdrmeexplrbechquickIcon}>
              <Image
                source={require('../../assets/i/ossdrmeexplrbechtab4.png')}
              />
            </View>
            <Text style={styles.ossdrmeexplrbechquickLabel}>Quiz</Text>
          </Pressable>
          <Pressable
            onPress={() => ossdrmeexplrbechGoTab('Ossdrmeexplrbechhsvd')}
            style={styles.ossdrmeexplrbechquickItem}>
            <View style={styles.ossdrmeexplrbechquickIcon}>
              <Image source={require('../../assets/i/ossdrmeexplsvdqw.png')} />
            </View>
            <Text style={styles.ossdrmeexplrbechquickLabel}>Saved</Text>
          </Pressable>
        </View>

        <View style={styles.ossdrmeexplrbechsectionRow}>
          <Text style={styles.ossdrmeexplrbechsectionTitle}>HIDDEN SHORES</Text>
          <View style={styles.ossdrmeexplrbechsectionLine} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ossdrmeexplrbechhiddenRow}>
          {ossdrmeexplrbechhLocations.map(loc => (
            <Pressable
              key={loc.id}
              onPress={() => ossdrmeexplrbechOpenLocation(loc.id)}
              style={styles.ossdrmeexplrbechhiddenCard}>
              <ImageBackground
                source={loc.image}
                style={styles.ossdrmeexplrbechhiddenImg}
                imageStyle={styles.ossdrmeexplrbechhiddenImgStyle}>
                <LinearGradient
                  colors={['#00000000', '#000000B3']}
                  style={styles.ossdrmeexplrbechhiddenFade}
                />
                <View style={styles.ossdrmeexplrbechhiddenTextWrap}>
                  <Text style={styles.ossdrmeexplrbechhiddenTitle}>
                    {loc.title}
                  </Text>
                </View>
              </ImageBackground>
              <Text style={styles.ossdrmeexplrbechhiddenCountry}>
                {loc.country}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.ossdrmeexplrbechsectionRow}>
          <Text style={styles.ossdrmeexplrbechsectionTitle}>OCEAN SAFETY</Text>
          <View style={styles.ossdrmeexplrbechsectionLine} />
        </View>

        <View style={styles.ossdrmeexplrbechsafetyCard}>
          <View style={styles.ossdrmeexplrbechsafetyIconWrap}>
            <Image source={require('../../assets/i/ossdrmeexpsaft.png')} />
          </View>
          <View style={styles.ossdrmeexplrbechsafetyText}>
            <Text style={styles.ossdrmeexplrbechsafetyTitle}>
              WATER SAFETY TODAY
            </Text>
            <Text style={styles.ossdrmeexplrbechsafetyBody}>
              {ossdrmeexplrbechTip.title}
              {'\n'}
              {ossdrmeexplrbechTip.body}
            </Text>
          </View>
        </View>
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhome;

const styles = StyleSheet.create({
  ossdrmeexplrbechavatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF14',
  },

  ossdrmeexplrbechavatarText: {color: '#00D4FF'},
  ossdrmeexplrbechavatarImg: {width: 18, height: 18, tintColor: '#00D4FF'},

  ossdrmeexplrbechwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ossdrmeexplrbechheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  ossdrmeexplrbechgoodMorning: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 2,
  },
  ossdrmeexplrbechbrand: {
    color: '#E7F7FF',
    fontSize: 20,

    fontFamily: 'Cinzel-Bold',
  },

  ossdrmeexplrbechsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    marginBottom: 10,
  },
  ossdrmeexplrbechsectionTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 2,
  },
  ossdrmeexplrbechsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  ossdrmeexplrbechfeaturedPress: {borderRadius: 18, overflow: 'hidden'},
  ossdrmeexplrbechfeaturedBg: {height: 240, width: '100%'},
  ossdrmeexplrbechfeaturedBgImg: {borderRadius: 18},
  ossdrmeexplrbechfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
  },
  ossdrmeexplrbechfeaturedTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    alignItems: 'center',
  },
  ossdrmeexplrbechbadge: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00101866',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  ossdrmeexplrbechbadgeText: {
    color: '#7DE8FF',
    fontSize: 9,
    letterSpacing: 2,
  },
  ossdrmeexplrbechbookmark: {
    width: 31,
    height: 31,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1A99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechbookmarkText: {color: '#00D4FF'},
  ossdrmeexplrbechfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  ossdrmeexplrbechcoords: {
    color: '#00D4FF80',
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 6,
  },
  ossdrmeexplrbechfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  ossdrmeexplrbechfeaturedSubtitle: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    maxWidth: 280,
  },
  ossdrmeexplrbechdetailsBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#00D4FF59',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF0A',
  },
  ossdrmeexplrbechdetailsBtnText: {color: '#00D4FF', fontSize: 12},
  ossdrmeexplrbechdetailsBtnArrow: {
    width: 12,
    height: 12,
    tintColor: '#00D4FF',
  },

  ossdrmeexplrbechblockTitle: {
    marginTop: 18,
    marginBottom: 12,
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ossdrmeexplrbechquickRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  ossdrmeexplrbechquickItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 70,
  },
  ossdrmeexplrbechquickIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  ossdrmeexplrbechquickLabel: {color: '#BEEBFF', fontSize: 11},

  ossdrmeexplrbechhiddenRow: {paddingRight: 18, gap: 12},
  ossdrmeexplrbechhiddenCard: {width: 150},
  ossdrmeexplrbechhiddenImg: {height: 92, width: '100%'},
  ossdrmeexplrbechhiddenImgStyle: {borderRadius: 14},
  ossdrmeexplrbechhiddenFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    borderRadius: 14,
  },
  ossdrmeexplrbechhiddenTextWrap: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
  },
  ossdrmeexplrbechhiddenTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },
  ossdrmeexplrbechhiddenCountry: {color: '#7BAFC4', fontSize: 11, marginTop: 8},

  ossdrmeexplrbechsafetyCard: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    gap: 12,
  },
  ossdrmeexplrbechsafetyIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  ossdrmeexplrbechsafetyIcon: {color: '#00D4FF'},
  ossdrmeexplrbechsafetyText: {flex: 1},
  ossdrmeexplrbechsafetyTitle: {
    color: '#00D4FF',
    letterSpacing: 2,
    fontSize: 10,
    marginBottom: 6,
  },
  ossdrmeexplrbechsafetyBody: {
    color: '#7BAFC4',
    fontSize: 12,
    lineHeight: 18,
  },
});
