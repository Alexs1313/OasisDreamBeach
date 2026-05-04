import {useNavigation} from '@react-navigation/native';

import {useOckeanguudexplrrhSaved} from '../Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

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
import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';
import {
  ockeanguudexplrrhGetDailyIndex,
  ockeanguudexplrrhGetDailySafetyTip,
  ockeanguudexplrrhLocations,
} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhdata';

import LinearGradient from 'react-native-linear-gradient';

const Ockeanguudexplrrhome = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const {
    ockeanguudexplrrhIsLocationSaved,
    ockeanguudexplrrhToggleLocationSaved,
  } = useOckeanguudexplrrhSaved();

  const ockeanguudexplrrFeatured = useMemo(() => {
    return (
      ockeanguudexplrrhLocations[
        ockeanguudexplrrhGetDailyIndex(ockeanguudexplrrhLocations.length)
      ] ?? ockeanguudexplrrhLocations[0]
    );
  }, []);

  const ockeanguudexplrrTip = useMemo(
    () => ockeanguudexplrrhGetDailySafetyTip(),
    [],
  );

  const ockeanguudexplrrFeaturedSaved = ockeanguudexplrrhIsLocationSaved(
    ockeanguudexplrrFeatured.id,
  );

  const ockeanguudexplrrOpenLocation = (id: string) => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhloc', {id});
  };

  const ockeanguudexplrrGoTab = (name: string) => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrtab');

    requestAnimationFrame(() => {
      ockeanguudexplrrNavigation.navigate(name);
    });
  };

  return (
    <Ockeanguudexplrrhlayt>
      <View style={styles.ockeanguudexplrrwrap}>
        <View style={styles.ockeanguudexplrrheader}>
          <View>
            <Text style={styles.ockeanguudexplrrgoodMorning}>GOOD MORNING</Text>
            <Text style={styles.ockeanguudexplrrbrand}>OASIS SHORE</Text>
          </View>
          <View style={styles.ockeanguudexplrravatarBtn}>
            <Image
              source={require('../../assets/i/ossdrmeexplrusr.png')}
              style={styles.ockeanguudexplrravatarImg}
            />
          </View>
        </View>

        <View style={styles.ockeanguudexplrrsectionRow}>
          <Text style={styles.ockeanguudexplrrsectionTitle}>
            LOCATION OF THE DAY
          </Text>
          <View style={styles.ockeanguudexplrrsectionLine} />
        </View>

        <Pressable
          onPress={() =>
            ockeanguudexplrrOpenLocation(ockeanguudexplrrFeatured.id)
          }
          style={styles.ockeanguudexplrrfeaturedPress}>
          <ImageBackground
            source={ockeanguudexplrrFeatured.image}
            style={styles.ockeanguudexplrrfeaturedBg}
            imageStyle={styles.ockeanguudexplrrfeaturedBgImg}>
            <LinearGradient
              colors={['#050D1A1A', '#050D1A80', '#050D1AF2']}
              style={styles.ockeanguudexplrrfeaturedFade}
            />

            <View style={styles.ockeanguudexplrrfeaturedTop}>
              <View style={styles.ockeanguudexplrrbadge}>
                <Text style={styles.ockeanguudexplrrbadgeText}>
                  FEATURED TODAY
                </Text>
              </View>
              <Pressable
                onPress={e => {
                  e.stopPropagation?.();
                  ockeanguudexplrrhToggleLocationSaved(
                    ockeanguudexplrrFeatured.id,
                  );
                }}
                hitSlop={10}
                style={styles.ockeanguudexplrrbookmark}>
                <Image
                  source={
                    ockeanguudexplrrFeaturedSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>

            <View style={styles.ockeanguudexplrrfeaturedContent}>
              <Text style={styles.ockeanguudexplrrcoords}>
                {`Lat: ${ockeanguudexplrrFeatured.coordinates.lat.toFixed(
                  3,
                )}° | Long: ${ockeanguudexplrrFeatured.coordinates.long.toFixed(
                  3,
                )}°`}
              </Text>
              <Text style={styles.ockeanguudexplrrfeaturedTitle}>
                {ockeanguudexplrrFeatured.title}
              </Text>
              <Text
                style={styles.ockeanguudexplrrfeaturedSubtitle}
                numberOfLines={2}>
                {ockeanguudexplrrFeatured.description}
              </Text>

              <View style={styles.ockeanguudexplrrdetailsBtn}>
                <Text style={styles.ockeanguudexplrrdetailsBtnText}>
                  View Details
                </Text>
                <Image
                  source={require('../../assets/i/ossdrmeexplrbecarr.png')}
                  style={styles.ockeanguudexplrrdetailsBtnArrow}
                />
              </View>
            </View>
          </ImageBackground>
        </Pressable>

        <Text style={styles.ockeanguudexplrrblockTitle}>QUICK ACCESS</Text>
        <View style={styles.ockeanguudexplrrquickRow}>
          <Pressable
            onPress={() => ockeanguudexplrrGoTab('Ockeanguudexplrrhmap')}
            style={styles.ockeanguudexplrrquickItem}>
            <View style={styles.ockeanguudexplrrquickIcon}>
              <Image
                source={require('../../assets/i/ockeanguudexplrrtab2.png')}
              />
            </View>
            <Text style={styles.ockeanguudexplrrquickLabel}>Map</Text>
          </Pressable>
          <Pressable
            onPress={() => ockeanguudexplrrGoTab('Ockeanguudexplrrhstries')}
            style={styles.ockeanguudexplrrquickItem}>
            <View style={styles.ockeanguudexplrrquickIcon}>
              <Image
                source={require('../../assets/i/ockeanguudexplrrtab3.png')}
              />
            </View>
            <Text style={styles.ockeanguudexplrrquickLabel}>Stories</Text>
          </Pressable>
          <Pressable
            onPress={() => ockeanguudexplrrGoTab('Ockeanguudexplrrhquz')}
            style={styles.ockeanguudexplrrquickItem}>
            <View style={styles.ockeanguudexplrrquickIcon}>
              <Image
                source={require('../../assets/i/ockeanguudexplrrtab4.png')}
              />
            </View>
            <Text style={styles.ockeanguudexplrrquickLabel}>Quiz</Text>
          </Pressable>
          <Pressable
            onPress={() => ockeanguudexplrrGoTab('Ockeanguudexplrrhsvd')}
            style={styles.ockeanguudexplrrquickItem}>
            <View style={styles.ockeanguudexplrrquickIcon}>
              <Image source={require('../../assets/i/ossdrmeexplsvdqw.png')} />
            </View>
            <Text style={styles.ockeanguudexplrrquickLabel}>Saved</Text>
          </Pressable>
        </View>

        <View style={styles.ockeanguudexplrrsectionRow}>
          <Text style={styles.ockeanguudexplrrsectionTitle}>HIDDEN SHORES</Text>
          <View style={styles.ockeanguudexplrrsectionLine} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ockeanguudexplrrhiddenRow}>
          {ockeanguudexplrrhLocations.map(loc => (
            <Pressable
              key={loc.id}
              onPress={() => ockeanguudexplrrOpenLocation(loc.id)}
              style={styles.ockeanguudexplrrhiddenCard}>
              <ImageBackground
                source={loc.image}
                style={styles.ockeanguudexplrrhiddenImg}
                imageStyle={styles.ockeanguudexplrrhiddenImgStyle}>
                <LinearGradient
                  colors={['#00000000', '#000000B3']}
                  style={styles.ockeanguudexplrrhiddenFade}
                />
                <View style={styles.ockeanguudexplrrhiddenTextWrap}>
                  <Text style={styles.ockeanguudexplrrhiddenTitle}>
                    {loc.title}
                  </Text>
                </View>
              </ImageBackground>
              <Text style={styles.ockeanguudexplrrhiddenCountry}>
                {loc.country}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.ockeanguudexplrrsectionRow}>
          <Text style={styles.ockeanguudexplrrsectionTitle}>OCEAN SAFETY</Text>
          <View style={styles.ockeanguudexplrrsectionLine} />
        </View>

        <View style={styles.ockeanguudexplrrsafetyCard}>
          <View style={styles.ockeanguudexplrrsafetyIconWrap}>
            <Image source={require('../../assets/i/ossdrmeexpsaft.png')} />
          </View>
          <View style={styles.ockeanguudexplrrsafetyText}>
            <Text style={styles.ockeanguudexplrrsafetyTitle}>
              WATER SAFETY TODAY
            </Text>
            <Text style={styles.ockeanguudexplrrsafetyBody}>
              {ockeanguudexplrrTip.title}
              {'\n'}
              {ockeanguudexplrrTip.body}
            </Text>
          </View>
        </View>
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhome;

const styles = StyleSheet.create({
  ockeanguudexplrravatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF14',
  },

  ockeanguudexplrravatarText: {color: '#00D4FF'},
  ockeanguudexplrravatarImg: {width: 18, height: 18, tintColor: '#00D4FF'},

  ockeanguudexplrrwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ockeanguudexplrrheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  ockeanguudexplrrgoodMorning: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 2,
  },
  ockeanguudexplrrbrand: {
    color: '#E7F7FF',
    fontSize: 20,

    fontFamily: 'Cinzel-Bold',
  },

  ockeanguudexplrrsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    marginBottom: 10,
  },
  ockeanguudexplrrsectionTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 2,
  },
  ockeanguudexplrrsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  ockeanguudexplrrfeaturedPress: {borderRadius: 18, overflow: 'hidden'},
  ockeanguudexplrrfeaturedBg: {height: 240, width: '100%'},
  ockeanguudexplrrfeaturedBgImg: {borderRadius: 18},
  ockeanguudexplrrfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
  },
  ockeanguudexplrrfeaturedTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    alignItems: 'center',
  },
  ockeanguudexplrrbadge: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00101866',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  ockeanguudexplrrbadgeText: {
    color: '#7DE8FF',
    fontSize: 9,
    letterSpacing: 2,
  },
  ockeanguudexplrrbookmark: {
    width: 31,
    height: 31,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1A99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrbookmarkText: {color: '#00D4FF'},
  ockeanguudexplrrfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  ockeanguudexplrrcoords: {
    color: '#00D4FF80',
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 6,
  },
  ockeanguudexplrrfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  ockeanguudexplrrfeaturedSubtitle: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    maxWidth: 280,
  },
  ockeanguudexplrrdetailsBtn: {
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
  ockeanguudexplrrdetailsBtnText: {color: '#00D4FF', fontSize: 12},
  ockeanguudexplrrdetailsBtnArrow: {
    width: 12,
    height: 12,
    tintColor: '#00D4FF',
  },

  ockeanguudexplrrblockTitle: {
    marginTop: 18,
    marginBottom: 12,
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ockeanguudexplrrquickRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  ockeanguudexplrrquickItem: {
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
  ockeanguudexplrrquickIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  ockeanguudexplrrquickLabel: {color: '#BEEBFF', fontSize: 11},

  ockeanguudexplrrhiddenRow: {paddingRight: 18, gap: 12},
  ockeanguudexplrrhiddenCard: {width: 150},
  ockeanguudexplrrhiddenImg: {height: 92, width: '100%'},
  ockeanguudexplrrhiddenImgStyle: {borderRadius: 14},
  ockeanguudexplrrhiddenFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    borderRadius: 14,
  },
  ockeanguudexplrrhiddenTextWrap: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
  },
  ockeanguudexplrrhiddenTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },
  ockeanguudexplrrhiddenCountry: {color: '#7BAFC4', fontSize: 11, marginTop: 8},

  ockeanguudexplrrsafetyCard: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    gap: 12,
  },
  ockeanguudexplrrsafetyIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  ockeanguudexplrrsafetyIcon: {color: '#00D4FF'},
  ockeanguudexplrrsafetyText: {flex: 1},
  ockeanguudexplrrsafetyTitle: {
    color: '#00D4FF',
    letterSpacing: 2,
    fontSize: 10,
    marginBottom: 6,
  },
  ockeanguudexplrrsafetyBody: {
    color: '#7BAFC4',
    fontSize: 12,
    lineHeight: 18,
  },
});
