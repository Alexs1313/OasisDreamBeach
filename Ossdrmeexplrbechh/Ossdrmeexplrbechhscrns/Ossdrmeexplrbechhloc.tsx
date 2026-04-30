// details
import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';
import {useOssdrmeexplrbechhSaved} from '../Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

import React, {useMemo} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ossdrmeexplrbechhGetLocationById,
  ossdrmeexplrbechhLocations,
} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhdata';

const Ossdrmeexplrbechhloc = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const ossdrmeexplrbechRoute = useRoute<any>();
  const ossdrmeexplrbechId: string =
    ossdrmeexplrbechRoute?.params?.id ?? ossdrmeexplrbechhLocations[0]?.id;

  const ossdrmeexplrbechLoc = useMemo(() => {
    return (
      ossdrmeexplrbechhGetLocationById(ossdrmeexplrbechId) ??
      ossdrmeexplrbechhLocations[0]
    );
  }, [ossdrmeexplrbechId]);

  const {
    ossdrmeexplrbechhIsLocationSaved,
    ossdrmeexplrbechhToggleLocationSaved,
  } = useOssdrmeexplrbechhSaved();
  const ossdrmeexplrbechSaved = ossdrmeexplrbechhIsLocationSaved(
    ossdrmeexplrbechLoc.id,
  );

  const ossdrmeexplrbechOnShare = async () => {
    try {
      await Share.share({
        message: `${ossdrmeexplrbechLoc.title} (${ossdrmeexplrbechLoc.country})\nLat: ${ossdrmeexplrbechLoc.coordinates.lat} | Long: ${ossdrmeexplrbechLoc.coordinates.long}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Ossdrmeexplrbechhlayt bounces={false}>
      <View style={styles.ossdrmeexplrbechsafe}>
        <View>
          <View style={styles.ossdrmeexplrbechtopRow}>
            <Pressable
              onPress={() => ossdrmeexplrbechNavigation.goBack()}
              style={styles.ossdrmeexplrbechcircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>

            <View style={styles.ossdrmeexplrbechtopRight}>
              <Pressable
                onPress={ossdrmeexplrbechOnShare}
                style={styles.ossdrmeexplrbechcircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  ossdrmeexplrbechhToggleLocationSaved(ossdrmeexplrbechLoc.id)
                }
                style={styles.ossdrmeexplrbechcircleBtn}>
                <Image
                  source={
                    ossdrmeexplrbechSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
          <Image
            source={ossdrmeexplrbechLoc.image}
            style={styles.ossdrmeexplrbechheroImg}
          />

          <LinearGradient
            colors={['#00000000', '#000000CC']}
            style={styles.ossdrmeexplrbechfade}
          />

          <View style={styles.ossdrmeexplrbechpill}>
            <Text style={styles.ossdrmeexplrbechpillText}>
              {ossdrmeexplrbechLoc.country.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.ossdrmeexplrbechcontent}>
          <Text style={styles.ossdrmeexplrbechcoords}>
            {`Lat: ${ossdrmeexplrbechLoc.coordinates.lat.toFixed(
              3,
            )}° | Long: ${ossdrmeexplrbechLoc.coordinates.long.toFixed(3)}°`}
          </Text>

          <Text style={styles.ossdrmeexplrbechtitle}>
            {ossdrmeexplrbechLoc.title}
          </Text>

          <Text style={styles.ossdrmeexplrbechdesc}>
            {ossdrmeexplrbechLoc.description}
          </Text>
        </View>

        <View style={styles.ossdrmeexplrbechbottom}>
          <Pressable
            onPress={() =>
              ossdrmeexplrbechhToggleLocationSaved(ossdrmeexplrbechLoc.id)
            }
            style={styles.ossdrmeexplrbechctaPress}>
            <LinearGradient
              colors={['#0099CC', '#00D4FF']}
              style={styles.ossdrmeexplrbechcta}>
              <Image
                source={
                  ossdrmeexplrbechSaved
                    ? require('../../assets/i/ossdrmeexpsavedloc.png')
                    : require('../../assets/i/ossdrmeexpsaveloc.png')
                }
              />
              <Text style={styles.ossdrmeexplrbechctaText}>
                {ossdrmeexplrbechSaved ? 'LOCATION SAVED' : 'SAVE LOCATION'}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhloc;

const styles = StyleSheet.create({
  ossdrmeexplrbechpillText: {color: '#FFD46A', letterSpacing: 2, fontSize: 10},

  ossdrmeexplrbechcoords: {
    color: '#00D4FF80',
    fontSize: 11,
    marginBottom: 12,
    marginTop: 17,
  },
  ossdrmeexplrbechtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 18,
  },
  ossdrmeexplrbechdesc: {
    color: '#E8F4F8CC',
    fontSize: 14,
    lineHeight: 24,
  },

  ossdrmeexplrbechbottom: {
    paddingHorizontal: 22,
    paddingBottom: 18,
  },

  ossdrmeexplrbechbg: {flex: 1},
  ossdrmeexplrbechheroImg: {width: '100%', height: 290},
  ossdrmeexplrbechfade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  ossdrmeexplrbechsafe: {flex: 1},

  ossdrmeexplrbechtopRow: {
    paddingHorizontal: 18,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    paddingTop: 8,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ossdrmeexplrbechtopRight: {flexDirection: 'row', gap: 10},
  ossdrmeexplrbechcircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF80',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechcircleText: {color: '#00D4FF', fontSize: 16},

  ossdrmeexplrbechcontent: {
    paddingHorizontal: 22,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  ossdrmeexplrbechpill: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#FFD46A40',
    backgroundColor: '#FFD46A1A',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 14,
    position: 'absolute',
    bottom: 0,
    left: 22,
    zIndex: 1,
  },

  ossdrmeexplrbechctaPress: {borderRadius: 14, overflow: 'hidden'},
  ossdrmeexplrbechcta: {
    height: 52,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

    shadowColor: '#00D4FF59',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ossdrmeexplrbechctaText: {
    color: '#001018',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
