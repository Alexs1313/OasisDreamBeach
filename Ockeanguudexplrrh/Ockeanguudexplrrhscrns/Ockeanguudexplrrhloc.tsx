// details
import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';
import {useOckeanguudexplrrhSaved} from '../Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

import React, {useMemo} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ockeanguudexplrrhGetLocationById,
  ockeanguudexplrrhLocations,
} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhdata';

const Ockeanguudexplrrhloc = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const ockeanguudexplrrRoute = useRoute<any>();
  const ockeanguudexplrrId: string =
    ockeanguudexplrrRoute?.params?.id ?? ockeanguudexplrrhLocations[0]?.id;

  const ockeanguudexplrrLoc = useMemo(() => {
    return (
      ockeanguudexplrrhGetLocationById(ockeanguudexplrrId) ??
      ockeanguudexplrrhLocations[0]
    );
  }, [ockeanguudexplrrId]);

  const {
    ockeanguudexplrrhIsLocationSaved,
    ockeanguudexplrrhToggleLocationSaved,
  } = useOckeanguudexplrrhSaved();
  const ockeanguudexplrrSaved = ockeanguudexplrrhIsLocationSaved(
    ockeanguudexplrrLoc.id,
  );

  const ockeanguudexplrrOnShare = async () => {
    try {
      await Share.share({
        message: `${ockeanguudexplrrLoc.title} (${ockeanguudexplrrLoc.country})\nLat: ${ockeanguudexplrrLoc.coordinates.lat} | Long: ${ockeanguudexplrrLoc.coordinates.long}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Ockeanguudexplrrhlayt bounces={false}>
      <View style={styles.ockeanguudexplrrsafe}>
        <View>
          <View style={styles.ockeanguudexplrrtopRow}>
            <Pressable
              onPress={() => ockeanguudexplrrNavigation.goBack()}
              style={styles.ockeanguudexplrrcircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>

            <View style={styles.ockeanguudexplrrtopRight}>
              <Pressable
                onPress={ockeanguudexplrrOnShare}
                style={styles.ockeanguudexplrrcircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  ockeanguudexplrrhToggleLocationSaved(ockeanguudexplrrLoc.id)
                }
                style={styles.ockeanguudexplrrcircleBtn}>
                <Image
                  source={
                    ockeanguudexplrrSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
          <Image
            source={ockeanguudexplrrLoc.image}
            style={styles.ockeanguudexplrrheroImg}
          />

          <LinearGradient
            colors={['#00000000', '#000000CC']}
            style={styles.ockeanguudexplrrfade}
          />

          <View style={styles.ockeanguudexplrrpill}>
            <Text style={styles.ockeanguudexplrrpillText}>
              {ockeanguudexplrrLoc.country.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.ockeanguudexplrrcontent}>
          <Text style={styles.ockeanguudexplrrcoords}>
            {`Lat: ${ockeanguudexplrrLoc.coordinates.lat.toFixed(
              3,
            )}° | Long: ${ockeanguudexplrrLoc.coordinates.long.toFixed(3)}°`}
          </Text>

          <Text style={styles.ockeanguudexplrrtitle}>
            {ockeanguudexplrrLoc.title}
          </Text>

          <Text style={styles.ockeanguudexplrrdesc}>
            {ockeanguudexplrrLoc.description}
          </Text>
        </View>

        <View style={styles.ockeanguudexplrrbottom}>
          <Pressable
            onPress={() =>
              ockeanguudexplrrhToggleLocationSaved(ockeanguudexplrrLoc.id)
            }
            style={styles.ockeanguudexplrrctaPress}>
            <LinearGradient
              colors={['#0099CC', '#00D4FF']}
              style={styles.ockeanguudexplrrcta}>
              <Image
                source={
                  ockeanguudexplrrSaved
                    ? require('../../assets/i/ossdrmeexpsavedloc.png')
                    : require('../../assets/i/ossdrmeexpsaveloc.png')
                }
              />
              <Text style={styles.ockeanguudexplrrctaText}>
                {ockeanguudexplrrSaved ? 'LOCATION SAVED' : 'SAVE LOCATION'}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhloc;

const styles = StyleSheet.create({
  ockeanguudexplrrpillText: {color: '#FFD46A', letterSpacing: 2, fontSize: 10},

  ockeanguudexplrrcoords: {
    color: '#00D4FF80',
    fontSize: 11,
    marginBottom: 12,
    marginTop: 17,
  },
  ockeanguudexplrrtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 18,
  },
  ockeanguudexplrrdesc: {
    color: '#E8F4F8CC',
    fontSize: 14,
    lineHeight: 24,
  },

  ockeanguudexplrrbottom: {
    paddingHorizontal: 22,
    paddingBottom: 18,
  },

  ockeanguudexplrrbg: {flex: 1},
  ockeanguudexplrrheroImg: {width: '100%', height: 290},
  ockeanguudexplrrfade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  ockeanguudexplrrsafe: {flex: 1},

  ockeanguudexplrrtopRow: {
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
  ockeanguudexplrrtopRight: {flexDirection: 'row', gap: 10},
  ockeanguudexplrrcircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF80',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrcircleText: {color: '#00D4FF', fontSize: 16},

  ockeanguudexplrrcontent: {
    paddingHorizontal: 22,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  ockeanguudexplrrpill: {
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

  ockeanguudexplrrctaPress: {borderRadius: 14, overflow: 'hidden'},
  ockeanguudexplrrcta: {
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
  ockeanguudexplrrctaText: {
    color: '#001018',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
