import {useNavigation} from '@react-navigation/native';

import {useOassicrmmenjoiirhSaved} from '../Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

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
import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';
import {
  oassicrmmenjoiirhGetDailyIndex,
  oassicrmmenjoiirhGetDailySafetyTip,
  oassicrmmenjoiirhLocations,
} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhdata';

import LinearGradient from 'react-native-linear-gradient';

const Oassicrmmenjoiirhome = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const {
    oassicrmmenjoiirhIsLocationSaved,
    oassicrmmenjoiirhToggleLocationSaved,
  } = useOassicrmmenjoiirhSaved();

  const oassicrmmenjoiirFeatured = useMemo(() => {
    return (
      oassicrmmenjoiirhLocations[
        oassicrmmenjoiirhGetDailyIndex(oassicrmmenjoiirhLocations.length)
      ] ?? oassicrmmenjoiirhLocations[0]
    );
  }, []);

  const oassicrmmenjoiirTip = useMemo(
    () => oassicrmmenjoiirhGetDailySafetyTip(),
    [],
  );

  const oassicrmmenjoiirFeaturedSaved = oassicrmmenjoiirhIsLocationSaved(
    oassicrmmenjoiirFeatured.id,
  );

  const oassicrmmenjoiirOpenLocation = (id: string) => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhloc', {id});
  };

  const oassicrmmenjoiirGoTab = (name: string) => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirtab');

    requestAnimationFrame(() => {
      oassicrmmenjoiirNavigation.navigate(name);
    });
  };

  return (
    <Oassicrmmenjoiirhlayt>
      <View style={styles.oassicrmmenjoiirwrap}>
        <View style={styles.oassicrmmenjoiirheader}>
          <View>
            <Text style={styles.oassicrmmenjoiirgoodMorning}>GOOD MORNING</Text>
            <Text style={styles.oassicrmmenjoiirbrand}>OASIC DREAM</Text>
          </View>
          <View style={styles.oassicrmmenjoiiravatarBtn}>
            <Image
              source={require('../../assets/i/ossdrmeexplrusr.png')}
              style={styles.oassicrmmenjoiiravatarImg}
            />
          </View>
        </View>

        <View style={styles.oassicrmmenjoiirsectionRow}>
          <Text style={styles.oassicrmmenjoiirsectionTitle}>
            LOCATION OF THE DAY
          </Text>
          <View style={styles.oassicrmmenjoiirsectionLine} />
        </View>

        <Pressable
          onPress={() =>
            oassicrmmenjoiirOpenLocation(oassicrmmenjoiirFeatured.id)
          }
          style={styles.oassicrmmenjoiirfeaturedPress}>
          <ImageBackground
            source={oassicrmmenjoiirFeatured.image}
            style={styles.oassicrmmenjoiirfeaturedBg}
            imageStyle={styles.oassicrmmenjoiirfeaturedBgImg}>
            <LinearGradient
              colors={['#050D1A1A', '#050D1A80', '#050D1AF2']}
              style={styles.oassicrmmenjoiirfeaturedFade}
            />

            <View style={styles.oassicrmmenjoiirfeaturedTop}>
              <View style={styles.oassicrmmenjoiirbadge}>
                <Text style={styles.oassicrmmenjoiirbadgeText}>
                  FEATURED TODAY
                </Text>
              </View>
              <Pressable
                onPress={e => {
                  e.stopPropagation?.();
                  oassicrmmenjoiirhToggleLocationSaved(
                    oassicrmmenjoiirFeatured.id,
                  );
                }}
                hitSlop={10}
                style={styles.oassicrmmenjoiirbookmark}>
                <Image
                  source={
                    oassicrmmenjoiirFeaturedSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>

            <View style={styles.oassicrmmenjoiirfeaturedContent}>
              <Text style={styles.oassicrmmenjoiircoords}>
                {`Lat: ${oassicrmmenjoiirFeatured.coordinates.lat.toFixed(
                  3,
                )}° | Long: ${oassicrmmenjoiirFeatured.coordinates.long.toFixed(
                  3,
                )}°`}
              </Text>
              <Text style={styles.oassicrmmenjoiirfeaturedTitle}>
                {oassicrmmenjoiirFeatured.title}
              </Text>
              <Text
                style={styles.oassicrmmenjoiirfeaturedSubtitle}
                numberOfLines={2}>
                {oassicrmmenjoiirFeatured.description}
              </Text>

              <View style={styles.oassicrmmenjoiirdetailsBtn}>
                <Text style={styles.oassicrmmenjoiirdetailsBtnText}>
                  View Details
                </Text>
                <Image
                  source={require('../../assets/i/ossdrmeexplrbecarr.png')}
                  style={styles.oassicrmmenjoiirdetailsBtnArrow}
                />
              </View>
            </View>
          </ImageBackground>
        </Pressable>

        <Text style={styles.oassicrmmenjoiirblockTitle}>QUICK ACCESS</Text>
        <View style={styles.oassicrmmenjoiirquickRow}>
          <Pressable
            onPress={() => oassicrmmenjoiirGoTab('Oassicrmmenjoiirhmap')}
            style={styles.oassicrmmenjoiirquickItem}>
            <View style={styles.oassicrmmenjoiirquickIcon}>
              <Image
                source={require('../../assets/i/oassicrmmenjoiirtab2.png')}
              />
            </View>
            <Text style={styles.oassicrmmenjoiirquickLabel}>Map</Text>
          </Pressable>
          <Pressable
            onPress={() => oassicrmmenjoiirGoTab('Oassicrmmenjoiirhstries')}
            style={styles.oassicrmmenjoiirquickItem}>
            <View style={styles.oassicrmmenjoiirquickIcon}>
              <Image
                source={require('../../assets/i/oassicrmmenjoiirtab3.png')}
              />
            </View>
            <Text style={styles.oassicrmmenjoiirquickLabel}>Stories</Text>
          </Pressable>
          <Pressable
            onPress={() => oassicrmmenjoiirGoTab('Oassicrmmenjoiirhquz')}
            style={styles.oassicrmmenjoiirquickItem}>
            <View style={styles.oassicrmmenjoiirquickIcon}>
              <Image
                source={require('../../assets/i/oassicrmmenjoiirtab4.png')}
              />
            </View>
            <Text style={styles.oassicrmmenjoiirquickLabel}>Quiz</Text>
          </Pressable>
          <Pressable
            onPress={() => oassicrmmenjoiirGoTab('Oassicrmmenjoiirhsvd')}
            style={styles.oassicrmmenjoiirquickItem}>
            <View style={styles.oassicrmmenjoiirquickIcon}>
              <Image source={require('../../assets/i/ossdrmeexplsvdqw.png')} />
            </View>
            <Text style={styles.oassicrmmenjoiirquickLabel}>Saved</Text>
          </Pressable>
        </View>

        <View style={styles.oassicrmmenjoiirsectionRow}>
          <Text style={styles.oassicrmmenjoiirsectionTitle}>HIDDEN SHORES</Text>
          <View style={styles.oassicrmmenjoiirsectionLine} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.oassicrmmenjoiirhiddenRow}>
          {oassicrmmenjoiirhLocations.map(loc => (
            <Pressable
              key={loc.id}
              onPress={() => oassicrmmenjoiirOpenLocation(loc.id)}
              style={styles.oassicrmmenjoiirhiddenCard}>
              <ImageBackground
                source={loc.image}
                style={styles.oassicrmmenjoiirhiddenImg}
                imageStyle={styles.oassicrmmenjoiirhiddenImgStyle}>
                <LinearGradient
                  colors={['#00000000', '#000000B3']}
                  style={styles.oassicrmmenjoiirhiddenFade}
                />
                <View style={styles.oassicrmmenjoiirhiddenTextWrap}>
                  <Text style={styles.oassicrmmenjoiirhiddenTitle}>
                    {loc.title}
                  </Text>
                </View>
              </ImageBackground>
              <Text style={styles.oassicrmmenjoiirhiddenCountry}>
                {loc.country}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.oassicrmmenjoiirsectionRow}>
          <Text style={styles.oassicrmmenjoiirsectionTitle}>OCEAN SAFETY</Text>
          <View style={styles.oassicrmmenjoiirsectionLine} />
        </View>

        <View style={styles.oassicrmmenjoiirsafetyCard}>
          <View style={styles.oassicrmmenjoiirsafetyIconWrap}>
            <Image source={require('../../assets/i/ossdrmeexpsaft.png')} />
          </View>
          <View style={styles.oassicrmmenjoiirsafetyText}>
            <Text style={styles.oassicrmmenjoiirsafetyTitle}>
              WATER SAFETY TODAY
            </Text>
            <Text style={styles.oassicrmmenjoiirsafetyBody}>
              {oassicrmmenjoiirTip.title}
              {'\n'}
              {oassicrmmenjoiirTip.body}
            </Text>
          </View>
        </View>
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhome;

const styles = StyleSheet.create({
  oassicrmmenjoiiravatarBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF14',
  },

  oassicrmmenjoiiravatarText: {color: '#00D4FF'},
  oassicrmmenjoiiravatarImg: {width: 18, height: 18, tintColor: '#00D4FF'},

  oassicrmmenjoiirwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  oassicrmmenjoiirheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  oassicrmmenjoiirgoodMorning: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 2,
  },
  oassicrmmenjoiirbrand: {
    color: '#E7F7FF',
    fontSize: 20,

    fontFamily: 'Cinzel-Bold',
  },

  oassicrmmenjoiirsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    marginBottom: 10,
  },
  oassicrmmenjoiirsectionTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 2,
  },
  oassicrmmenjoiirsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  oassicrmmenjoiirfeaturedPress: {borderRadius: 18, overflow: 'hidden'},
  oassicrmmenjoiirfeaturedBg: {height: 240, width: '100%'},
  oassicrmmenjoiirfeaturedBgImg: {borderRadius: 18},
  oassicrmmenjoiirfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
  },
  oassicrmmenjoiirfeaturedTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    alignItems: 'center',
  },
  oassicrmmenjoiirbadge: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00101866',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  oassicrmmenjoiirbadgeText: {
    color: '#7DE8FF',
    fontSize: 9,
    letterSpacing: 2,
  },
  oassicrmmenjoiirbookmark: {
    width: 31,
    height: 31,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1A99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirbookmarkText: {color: '#00D4FF'},
  oassicrmmenjoiirfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 14,
  },
  oassicrmmenjoiircoords: {
    color: '#00D4FF80',
    fontSize: 10,
    letterSpacing: 1,
    marginBottom: 6,
  },
  oassicrmmenjoiirfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  oassicrmmenjoiirfeaturedSubtitle: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    maxWidth: 280,
  },
  oassicrmmenjoiirdetailsBtn: {
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
  oassicrmmenjoiirdetailsBtnText: {color: '#00D4FF', fontSize: 12},
  oassicrmmenjoiirdetailsBtnArrow: {
    width: 12,
    height: 12,
    tintColor: '#00D4FF',
  },

  oassicrmmenjoiirblockTitle: {
    marginTop: 18,
    marginBottom: 12,
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  oassicrmmenjoiirquickRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  oassicrmmenjoiirquickItem: {
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
  oassicrmmenjoiirquickIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  oassicrmmenjoiirquickLabel: {color: '#BEEBFF', fontSize: 11},

  oassicrmmenjoiirhiddenRow: {paddingRight: 18, gap: 12},
  oassicrmmenjoiirhiddenCard: {width: 150},
  oassicrmmenjoiirhiddenImg: {height: 92, width: '100%'},
  oassicrmmenjoiirhiddenImgStyle: {borderRadius: 14},
  oassicrmmenjoiirhiddenFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    borderRadius: 14,
  },
  oassicrmmenjoiirhiddenTextWrap: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
  },
  oassicrmmenjoiirhiddenTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Cinzel-Bold',
  },
  oassicrmmenjoiirhiddenCountry: {color: '#7BAFC4', fontSize: 11, marginTop: 8},

  oassicrmmenjoiirsafetyCard: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    gap: 12,
  },
  oassicrmmenjoiirsafetyIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF0A',
  },
  oassicrmmenjoiirsafetyIcon: {color: '#00D4FF'},
  oassicrmmenjoiirsafetyText: {flex: 1},
  oassicrmmenjoiirsafetyTitle: {
    color: '#00D4FF',
    letterSpacing: 2,
    fontSize: 10,
    marginBottom: 6,
  },
  oassicrmmenjoiirsafetyBody: {
    color: '#7BAFC4',
    fontSize: 12,
    lineHeight: 18,
  },
});
