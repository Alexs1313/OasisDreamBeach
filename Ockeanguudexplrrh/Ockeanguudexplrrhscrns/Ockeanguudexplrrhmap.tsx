import {ockeanguudexplrrhLocations} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhdata';
import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, type Region} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';

const Ockeanguudexplrrhmap = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();

  const [ockeanguudexplrrSelectedId, setOckeanguudexplrrSelectedId] = useState<
    string | null
  >(null);

  const ockeanguudexplrrIgnoreNextMapPress = useRef(false);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const ockeanguudexplrrDestinations = useMemo(() => {
    return ockeanguudexplrrhLocations.filter(d => {
      const lat = Number(d.coordinates?.lat);
      const long = Number(d.coordinates?.long);

      return (
        Number.isFinite(lat) &&
        Number.isFinite(long) &&
        lat >= -90 &&
        lat <= 90 &&
        long >= -180 &&
        long <= 180
      );
    });
  }, []);

  const ockeanguudexplrrSelected = useMemo(() => {
    return ockeanguudexplrrDestinations.find(
      d => d.id === ockeanguudexplrrSelectedId,
    );
  }, [ockeanguudexplrrDestinations, ockeanguudexplrrSelectedId]);

  const ockeanguudexplrrRegion: Region = useMemo(() => {
    if (!ockeanguudexplrrDestinations.length) {
      return {
        latitude: 20,
        longitude: 0,
        latitudeDelta: 80,
        longitudeDelta: 120,
      };
    }

    const lats = ockeanguudexplrrDestinations.map(d =>
      Number(d.coordinates.lat),
    );
    const longs = ockeanguudexplrrDestinations.map(d =>
      Number(d.coordinates.long),
    );

    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLong = Math.min(...longs);
    const maxLong = Math.max(...longs);

    const latitudeDelta = (maxLat - minLat) * 1.25;
    const longitudeDelta = (maxLong - minLong) * 1.25;

    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLong + maxLong) / 2,
      latitudeDelta: Math.min(100, Math.max(18, latitudeDelta || 18)),
      longitudeDelta: Math.min(180, Math.max(42, longitudeDelta || 42)),
    };
  }, [ockeanguudexplrrDestinations]);

  const ockeanguudexplrrOpenFullDetails = () => {
    if (!ockeanguudexplrrSelected) {
      return;
    }

    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhloc', {
      id: ockeanguudexplrrSelected.id,
    });
  };

  return (
    <Ockeanguudexplrrhlayt bounces={false}>
      <View style={styles.ockeanguudexplrrwrap}>
        <View style={styles.ockeanguudexplrrheader}>
          <View>
            <Text style={styles.ockeanguudexplrrkicker}>EXPLORE</Text>
            <Text style={styles.ockeanguudexplrrtitle}>WORLD MAP</Text>
          </View>

          <View style={styles.ockeanguudexplrrcountPill}>
            <Text style={styles.ockeanguudexplrrcountPillText}>
              {`${ockeanguudexplrrDestinations.length} DESTINATIONS`}
            </Text>
          </View>
        </View>

        <View style={styles.ockeanguudexplrrmapFrame}>
          <View style={styles.ockeanguudexplrrcornerTL} />
          <View style={styles.ockeanguudexplrrcornerTR} />
          <View style={styles.ockeanguudexplrrcornerBL} />
          <View style={styles.ockeanguudexplrrcornerBR} />

          <MapView
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            userInterfaceStyle="dark"
            initialRegion={ockeanguudexplrrRegion}
            style={styles.ockeanguudexplrrmap}
            onPress={() => {
              if (ockeanguudexplrrIgnoreNextMapPress.current) {
                ockeanguudexplrrIgnoreNextMapPress.current = false;
                return;
              }

              setOckeanguudexplrrSelectedId(null);
            }}
            customMapStyle={ockeanguudexplrrMapStyle}>
            {ockeanguudexplrrDestinations.map(d => {
              const focused = d.id === ockeanguudexplrrSelectedId;

              return (
                <Marker
                  key={d.id}
                  coordinate={{
                    latitude: Number(d.coordinates.lat),
                    longitude: Number(d.coordinates.long),
                  }}
                  onPress={() => {
                    ockeanguudexplrrIgnoreNextMapPress.current = true;
                    setOckeanguudexplrrSelectedId(d.id);
                  }}>
                  <View
                    style={[
                      styles.ockeanguudexplrrmarker,
                      focused ? styles.ockeanguudexplrrmarkerFocused : null,
                    ]}>
                    <View style={styles.ockeanguudexplrrmarkerInner} />
                  </View>
                </Marker>
              );
            })}
          </MapView>

          {!ockeanguudexplrrSelected ? (
            <View style={styles.ockeanguudexplrrhintWrap}>
              <View style={styles.ockeanguudexplrrhintDot} />
              <Text style={styles.ockeanguudexplrrhintText}>
                Tap a marker to discover
              </Text>
            </View>
          ) : null}
        </View>

        {ockeanguudexplrrSelected ? (
          <View style={styles.ockeanguudexplrrsheet}>
            <LinearGradient
              colors={['#0A1628', '#071221']}
              style={styles.ockeanguudexplrrsheetBg}
            />

            <Pressable
              onPress={() => setOckeanguudexplrrSelectedId(null)}
              hitSlop={10}
              style={styles.ockeanguudexplrrsheetClose}>
              <Text style={styles.ockeanguudexplrrsheetCloseText}>×</Text>
            </Pressable>

            <View style={styles.ockeanguudexplrrsheetTop}>
              <ImageBackground
                source={ockeanguudexplrrSelected.image}
                style={styles.ockeanguudexplrrsheetThumb}
                imageStyle={styles.ockeanguudexplrrsheetThumbImg}
              />

              <View style={styles.ockeanguudexplrrsheetText}>
                <Text style={styles.ockeanguudexplrrsheetCoords}>
                  {`${Number(ockeanguudexplrrSelected.coordinates.lat).toFixed(
                    3,
                  )}° | ${Number(
                    ockeanguudexplrrSelected.coordinates.long,
                  ).toFixed(3)}°`}
                </Text>

                <Text style={styles.ockeanguudexplrrsheetTitle}>
                  {ockeanguudexplrrSelected.title}
                </Text>

                <Text
                  style={styles.ockeanguudexplrrsheetDesc}
                  numberOfLines={2}>
                  {ockeanguudexplrrSelected.description}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={ockeanguudexplrrOpenFullDetails}
              style={styles.ockeanguudexplrrctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ockeanguudexplrrcta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpempvioew.png')}
                />
                <Text style={styles.ockeanguudexplrrctaText}>
                  VIEW FULL DETAILS
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhmap;

const ockeanguudexplrrMapStyle = [
  {elementType: 'geometry', stylers: [{color: '#0A1628'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#7BAFC4'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#0A1628'}]},
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{color: '#00D4FF1A'}],
  },
  {featureType: 'poi', elementType: 'labels', stylers: [{visibility: 'off'}]},
  {featureType: 'road', stylers: [{visibility: 'off'}]},
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#071221'}],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{color: '#050D1A'}],
  },
];

const styles = StyleSheet.create({
  ockeanguudexplrrcountPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF14',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  ockeanguudexplrrcountPillText: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ockeanguudexplrrwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ockeanguudexplrrheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  ockeanguudexplrrkicker: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ockeanguudexplrrtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
  },

  ockeanguudexplrrmapFrame: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#050D1A',
  },

  ockeanguudexplrrmap: {
    flex: 1,
  },

  ockeanguudexplrrcornerTL: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 14,
    height: 14,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: '#00D4FF40',
    zIndex: 3,
  },

  ockeanguudexplrrcornerTR: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 14,
    height: 14,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: '#00D4FF40',
    zIndex: 3,
  },

  ockeanguudexplrrcornerBL: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: 14,
    height: 14,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#00D4FF40',
    zIndex: 3,
  },

  ockeanguudexplrrcornerBR: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 14,
    height: 14,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#00D4FF40',
    zIndex: 3,
  },

  ockeanguudexplrrmarker: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF1A',
  },

  ockeanguudexplrrmarkerFocused: {
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF26',
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  ockeanguudexplrrmarkerInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00D4FF',
  },

  ockeanguudexplrrhintWrap: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#050D1AB2',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    zIndex: 3,
  },

  ockeanguudexplrrhintDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00D4FF',
  },

  ockeanguudexplrrhintText: {
    color: '#7BAFC4',
    fontSize: 12,
  },

  ockeanguudexplrrsheet: {
    position: 'absolute',
    width: '92%',
    alignSelf: 'center',
    bottom: 120,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    overflow: 'hidden',
    padding: 12,
  },

  ockeanguudexplrrsheetBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  ockeanguudexplrrsheetClose: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF0F',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },

  ockeanguudexplrrsheetCloseText: {
    color: '#7BAFC4',
    fontSize: 16,
    lineHeight: 18,
  },

  ockeanguudexplrrsheetTop: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 24,
  },

  ockeanguudexplrrsheetThumb: {
    width: 84,
    height: 84,
  },

  ockeanguudexplrrsheetThumbImg: {
    borderRadius: 14,
  },

  ockeanguudexplrrsheetText: {
    flex: 1,
  },

  ockeanguudexplrrsheetCoords: {
    color: '#00D4FF80',
    fontSize: 10,
    marginBottom: 6,
  },

  ockeanguudexplrrsheetTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },

  ockeanguudexplrrsheetDesc: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  ockeanguudexplrrctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 12,
  },

  ockeanguudexplrrcta: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  ockeanguudexplrrctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
