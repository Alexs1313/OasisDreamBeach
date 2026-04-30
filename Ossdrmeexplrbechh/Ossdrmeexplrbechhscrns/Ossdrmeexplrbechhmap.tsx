import {ossdrmeexplrbechhLocations} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhdata';
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

import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';

const Ossdrmeexplrbechhmap = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();

  const [ossdrmeexplrbechSelectedId, setOssdrmeexplrbechSelectedId] = useState<
    string | null
  >(null);

  const ossdrmeexplrbechIgnoreNextMapPress = useRef(false);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const ossdrmeexplrbechDestinations = useMemo(() => {
    return ossdrmeexplrbechhLocations.filter(d => {
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

  const ossdrmeexplrbechSelected = useMemo(() => {
    return ossdrmeexplrbechDestinations.find(
      d => d.id === ossdrmeexplrbechSelectedId,
    );
  }, [ossdrmeexplrbechDestinations, ossdrmeexplrbechSelectedId]);

  const ossdrmeexplrbechRegion: Region = useMemo(() => {
    if (!ossdrmeexplrbechDestinations.length) {
      return {
        latitude: 20,
        longitude: 0,
        latitudeDelta: 80,
        longitudeDelta: 120,
      };
    }

    const lats = ossdrmeexplrbechDestinations.map(d =>
      Number(d.coordinates.lat),
    );
    const longs = ossdrmeexplrbechDestinations.map(d =>
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
  }, [ossdrmeexplrbechDestinations]);

  const ossdrmeexplrbechOpenFullDetails = () => {
    if (!ossdrmeexplrbechSelected) {
      return;
    }

    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhloc', {
      id: ossdrmeexplrbechSelected.id,
    });
  };

  return (
    <Ossdrmeexplrbechhlayt bounces={false}>
      <View style={styles.ossdrmeexplrbechwrap}>
        <View style={styles.ossdrmeexplrbechheader}>
          <View>
            <Text style={styles.ossdrmeexplrbechkicker}>EXPLORE</Text>
            <Text style={styles.ossdrmeexplrbechtitle}>WORLD MAP</Text>
          </View>

          <View style={styles.ossdrmeexplrbechcountPill}>
            <Text style={styles.ossdrmeexplrbechcountPillText}>
              {`${ossdrmeexplrbechDestinations.length} DESTINATIONS`}
            </Text>
          </View>
        </View>

        <View style={styles.ossdrmeexplrbechmapFrame}>
          <View style={styles.ossdrmeexplrbechcornerTL} />
          <View style={styles.ossdrmeexplrbechcornerTR} />
          <View style={styles.ossdrmeexplrbechcornerBL} />
          <View style={styles.ossdrmeexplrbechcornerBR} />

          <MapView
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            userInterfaceStyle="dark"
            initialRegion={ossdrmeexplrbechRegion}
            style={styles.ossdrmeexplrbechmap}
            onPress={() => {
              if (ossdrmeexplrbechIgnoreNextMapPress.current) {
                ossdrmeexplrbechIgnoreNextMapPress.current = false;
                return;
              }

              setOssdrmeexplrbechSelectedId(null);
            }}
            customMapStyle={ossdrmeexplrbechMapStyle}>
            {ossdrmeexplrbechDestinations.map(d => {
              const focused = d.id === ossdrmeexplrbechSelectedId;

              return (
                <Marker
                  key={d.id}
                  coordinate={{
                    latitude: Number(d.coordinates.lat),
                    longitude: Number(d.coordinates.long),
                  }}
                  onPress={() => {
                    ossdrmeexplrbechIgnoreNextMapPress.current = true;
                    setOssdrmeexplrbechSelectedId(d.id);
                  }}>
                  <View
                    style={[
                      styles.ossdrmeexplrbechmarker,
                      focused ? styles.ossdrmeexplrbechmarkerFocused : null,
                    ]}>
                    <View style={styles.ossdrmeexplrbechmarkerInner} />
                  </View>
                </Marker>
              );
            })}
          </MapView>

          {!ossdrmeexplrbechSelected ? (
            <View style={styles.ossdrmeexplrbechhintWrap}>
              <View style={styles.ossdrmeexplrbechhintDot} />
              <Text style={styles.ossdrmeexplrbechhintText}>
                Tap a marker to discover
              </Text>
            </View>
          ) : null}
        </View>

        {ossdrmeexplrbechSelected ? (
          <View style={styles.ossdrmeexplrbechsheet}>
            <LinearGradient
              colors={['#0A1628', '#071221']}
              style={styles.ossdrmeexplrbechsheetBg}
            />

            <Pressable
              onPress={() => setOssdrmeexplrbechSelectedId(null)}
              hitSlop={10}
              style={styles.ossdrmeexplrbechsheetClose}>
              <Text style={styles.ossdrmeexplrbechsheetCloseText}>×</Text>
            </Pressable>

            <View style={styles.ossdrmeexplrbechsheetTop}>
              <ImageBackground
                source={ossdrmeexplrbechSelected.image}
                style={styles.ossdrmeexplrbechsheetThumb}
                imageStyle={styles.ossdrmeexplrbechsheetThumbImg}
              />

              <View style={styles.ossdrmeexplrbechsheetText}>
                <Text style={styles.ossdrmeexplrbechsheetCoords}>
                  {`${Number(ossdrmeexplrbechSelected.coordinates.lat).toFixed(
                    3,
                  )}° | ${Number(
                    ossdrmeexplrbechSelected.coordinates.long,
                  ).toFixed(3)}°`}
                </Text>

                <Text style={styles.ossdrmeexplrbechsheetTitle}>
                  {ossdrmeexplrbechSelected.title}
                </Text>

                <Text
                  style={styles.ossdrmeexplrbechsheetDesc}
                  numberOfLines={2}>
                  {ossdrmeexplrbechSelected.description}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={ossdrmeexplrbechOpenFullDetails}
              style={styles.ossdrmeexplrbechctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ossdrmeexplrbechcta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpempvioew.png')}
                />
                <Text style={styles.ossdrmeexplrbechctaText}>
                  VIEW FULL DETAILS
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhmap;

const ossdrmeexplrbechMapStyle = [
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
  ossdrmeexplrbechcountPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF14',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  ossdrmeexplrbechcountPillText: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ossdrmeexplrbechwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ossdrmeexplrbechheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  ossdrmeexplrbechkicker: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  ossdrmeexplrbechtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
  },

  ossdrmeexplrbechmapFrame: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#050D1A',
  },

  ossdrmeexplrbechmap: {
    flex: 1,
  },

  ossdrmeexplrbechcornerTL: {
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

  ossdrmeexplrbechcornerTR: {
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

  ossdrmeexplrbechcornerBL: {
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

  ossdrmeexplrbechcornerBR: {
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

  ossdrmeexplrbechmarker: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF1A',
  },

  ossdrmeexplrbechmarkerFocused: {
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF26',
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  ossdrmeexplrbechmarkerInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00D4FF',
  },

  ossdrmeexplrbechhintWrap: {
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

  ossdrmeexplrbechhintDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00D4FF',
  },

  ossdrmeexplrbechhintText: {
    color: '#7BAFC4',
    fontSize: 12,
  },

  ossdrmeexplrbechsheet: {
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

  ossdrmeexplrbechsheetBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  ossdrmeexplrbechsheetClose: {
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

  ossdrmeexplrbechsheetCloseText: {
    color: '#7BAFC4',
    fontSize: 16,
    lineHeight: 18,
  },

  ossdrmeexplrbechsheetTop: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 24,
  },

  ossdrmeexplrbechsheetThumb: {
    width: 84,
    height: 84,
  },

  ossdrmeexplrbechsheetThumbImg: {
    borderRadius: 14,
  },

  ossdrmeexplrbechsheetText: {
    flex: 1,
  },

  ossdrmeexplrbechsheetCoords: {
    color: '#00D4FF80',
    fontSize: 10,
    marginBottom: 6,
  },

  ossdrmeexplrbechsheetTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },

  ossdrmeexplrbechsheetDesc: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  ossdrmeexplrbechctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 12,
  },

  ossdrmeexplrbechcta: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  ossdrmeexplrbechctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
