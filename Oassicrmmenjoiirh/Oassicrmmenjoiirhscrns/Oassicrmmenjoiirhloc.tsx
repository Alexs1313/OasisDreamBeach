// details
import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';
import {useOassicrmmenjoiirhSaved} from '../Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

import React, {useMemo} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  oassicrmmenjoiirhGetLocationById,
  oassicrmmenjoiirhLocations,
} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhdata';

const Oassicrmmenjoiirhloc = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const oassicrmmenjoiirRoute = useRoute<any>();
  const oassicrmmenjoiirId: string =
    oassicrmmenjoiirRoute?.params?.id ?? oassicrmmenjoiirhLocations[0]?.id;

  const oassicrmmenjoiirLoc = useMemo(() => {
    return (
      oassicrmmenjoiirhGetLocationById(oassicrmmenjoiirId) ??
      oassicrmmenjoiirhLocations[0]
    );
  }, [oassicrmmenjoiirId]);

  const {
    oassicrmmenjoiirhIsLocationSaved,
    oassicrmmenjoiirhToggleLocationSaved,
  } = useOassicrmmenjoiirhSaved();
  const oassicrmmenjoiirSaved = oassicrmmenjoiirhIsLocationSaved(
    oassicrmmenjoiirLoc.id,
  );

  const oassicrmmenjoiirOnShare = async () => {
    try {
      await Share.share({
        message: `${oassicrmmenjoiirLoc.title} (${oassicrmmenjoiirLoc.country})\nLat: ${oassicrmmenjoiirLoc.coordinates.lat} | Long: ${oassicrmmenjoiirLoc.coordinates.long}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Oassicrmmenjoiirhlayt bounces={false}>
      <View style={styles.oassicrmmenjoiirsafe}>
        <View>
          <View style={styles.oassicrmmenjoiirtopRow}>
            <Pressable
              onPress={() => oassicrmmenjoiirNavigation.goBack()}
              style={styles.oassicrmmenjoiircircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>

            <View style={styles.oassicrmmenjoiirtopRight}>
              <Pressable
                onPress={oassicrmmenjoiirOnShare}
                style={styles.oassicrmmenjoiircircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  oassicrmmenjoiirhToggleLocationSaved(oassicrmmenjoiirLoc.id)
                }
                style={styles.oassicrmmenjoiircircleBtn}>
                <Image
                  source={
                    oassicrmmenjoiirSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
          <Image
            source={oassicrmmenjoiirLoc.image}
            style={styles.oassicrmmenjoiirheroImg}
          />

          <LinearGradient
            colors={['#00000000', '#000000CC']}
            style={styles.oassicrmmenjoiirfade}
          />

          <View style={styles.oassicrmmenjoiirpill}>
            <Text style={styles.oassicrmmenjoiirpillText}>
              {oassicrmmenjoiirLoc.country.toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.oassicrmmenjoiircontent}>
          <Text style={styles.oassicrmmenjoiircoords}>
            {`Lat: ${oassicrmmenjoiirLoc.coordinates.lat.toFixed(
              3,
            )}° | Long: ${oassicrmmenjoiirLoc.coordinates.long.toFixed(3)}°`}
          </Text>

          <Text style={styles.oassicrmmenjoiirtitle}>
            {oassicrmmenjoiirLoc.title}
          </Text>

          <Text style={styles.oassicrmmenjoiirdesc}>
            {oassicrmmenjoiirLoc.description}
          </Text>
        </View>

        <View style={styles.oassicrmmenjoiirbottom}>
          <Pressable
            onPress={() =>
              oassicrmmenjoiirhToggleLocationSaved(oassicrmmenjoiirLoc.id)
            }
            style={styles.oassicrmmenjoiirctaPress}>
            <LinearGradient
              colors={['#0099CC', '#00D4FF']}
              style={styles.oassicrmmenjoiircta}>
              <Image
                source={
                  oassicrmmenjoiirSaved
                    ? require('../../assets/i/ossdrmeexpsavedloc.png')
                    : require('../../assets/i/ossdrmeexpsaveloc.png')
                }
              />
              <Text style={styles.oassicrmmenjoiirctaText}>
                {oassicrmmenjoiirSaved ? 'LOCATION SAVED' : 'SAVE LOCATION'}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhloc;

const styles = StyleSheet.create({
  oassicrmmenjoiirpillText: {color: '#FFD46A', letterSpacing: 2, fontSize: 10},

  oassicrmmenjoiircoords: {
    color: '#00D4FF80',
    fontSize: 11,
    marginBottom: 12,
    marginTop: 17,
  },
  oassicrmmenjoiirtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 18,
  },
  oassicrmmenjoiirdesc: {
    color: '#E8F4F8CC',
    fontSize: 14,
    lineHeight: 24,
  },

  oassicrmmenjoiirbottom: {
    paddingHorizontal: 22,
    paddingBottom: 18,
  },

  oassicrmmenjoiirbg: {flex: 1},
  oassicrmmenjoiirheroImg: {width: '100%', height: 290},
  oassicrmmenjoiirfade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  oassicrmmenjoiirsafe: {flex: 1},

  oassicrmmenjoiirtopRow: {
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
  oassicrmmenjoiirtopRight: {flexDirection: 'row', gap: 10},
  oassicrmmenjoiircircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF80',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiircircleText: {color: '#00D4FF', fontSize: 16},

  oassicrmmenjoiircontent: {
    paddingHorizontal: 22,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  oassicrmmenjoiirpill: {
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

  oassicrmmenjoiirctaPress: {borderRadius: 14, overflow: 'hidden'},
  oassicrmmenjoiircta: {
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
  oassicrmmenjoiirctaText: {
    color: '#001018',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
});
