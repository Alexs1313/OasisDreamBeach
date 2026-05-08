import {oassicrmmenjoiirhLocations} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhdata';
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

import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';

const Oassicrmmenjoiirhmap = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();

  const [oassicrmmenjoiirSelectedId, setOassicrmmenjoiirSelectedId] = useState<
    string | null
  >(null);

  const oassicrmmenjoiirIgnoreNextMapPress = useRef(false);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const oassicrmmenjoiirDestinations = useMemo(() => {
    return oassicrmmenjoiirhLocations.filter(d => {
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

  const oassicrmmenjoiirSelected = useMemo(() => {
    return oassicrmmenjoiirDestinations.find(
      d => d.id === oassicrmmenjoiirSelectedId,
    );
  }, [oassicrmmenjoiirDestinations, oassicrmmenjoiirSelectedId]);

  const oassicrmmenjoiirRegion: Region = useMemo(() => {
    if (!oassicrmmenjoiirDestinations.length) {
      return {
        latitude: 20,
        longitude: 0,
        latitudeDelta: 80,
        longitudeDelta: 120,
      };
    }

    const lats = oassicrmmenjoiirDestinations.map(d =>
      Number(d.coordinates.lat),
    );
    const longs = oassicrmmenjoiirDestinations.map(d =>
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
  }, [oassicrmmenjoiirDestinations]);

  const oassicrmmenjoiirOpenFullDetails = () => {
    if (!oassicrmmenjoiirSelected) {
      return;
    }

    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhloc', {
      id: oassicrmmenjoiirSelected.id,
    });
  };

  return (
    <Oassicrmmenjoiirhlayt bounces={false}>
      <View style={styles.oassicrmmenjoiirwrap}>
        <View style={styles.oassicrmmenjoiirheader}>
          <View>
            <Text style={styles.oassicrmmenjoiirkicker}>EXPLORE</Text>
            <Text style={styles.oassicrmmenjoiirtitle}>WORLD MAP</Text>
          </View>

          <View style={styles.oassicrmmenjoiircountPill}>
            <Text style={styles.oassicrmmenjoiircountPillText}>
              {`${oassicrmmenjoiirDestinations.length} DESTINATIONS`}
            </Text>
          </View>
        </View>

        <View style={styles.oassicrmmenjoiirmapFrame}>
          <View style={styles.oassicrmmenjoiircornerTL} />
          <View style={styles.oassicrmmenjoiircornerTR} />
          <View style={styles.oassicrmmenjoiircornerBL} />
          <View style={styles.oassicrmmenjoiircornerBR} />

          <MapView
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            userInterfaceStyle="dark"
            initialRegion={oassicrmmenjoiirRegion}
            style={styles.oassicrmmenjoiirmap}
            onPress={() => {
              if (oassicrmmenjoiirIgnoreNextMapPress.current) {
                oassicrmmenjoiirIgnoreNextMapPress.current = false;
                return;
              }

              setOassicrmmenjoiirSelectedId(null);
            }}
            customMapStyle={oassicrmmenjoiirMapStyle}>
            {oassicrmmenjoiirDestinations.map(d => {
              const focused = d.id === oassicrmmenjoiirSelectedId;

              return (
                <Marker
                  key={d.id}
                  coordinate={{
                    latitude: Number(d.coordinates.lat),
                    longitude: Number(d.coordinates.long),
                  }}
                  onPress={() => {
                    oassicrmmenjoiirIgnoreNextMapPress.current = true;
                    setOassicrmmenjoiirSelectedId(d.id);
                  }}>
                  <View
                    style={[
                      styles.oassicrmmenjoiirmarker,
                      focused ? styles.oassicrmmenjoiirmarkerFocused : null,
                    ]}>
                    <View style={styles.oassicrmmenjoiirmarkerInner} />
                  </View>
                </Marker>
              );
            })}
          </MapView>

          {!oassicrmmenjoiirSelected ? (
            <View style={styles.oassicrmmenjoiirhintWrap}>
              <View style={styles.oassicrmmenjoiirhintDot} />
              <Text style={styles.oassicrmmenjoiirhintText}>
                Tap a marker to discover
              </Text>
            </View>
          ) : null}
        </View>

        {oassicrmmenjoiirSelected ? (
          <View style={styles.oassicrmmenjoiirsheet}>
            <LinearGradient
              colors={['#0A1628', '#071221']}
              style={styles.oassicrmmenjoiirsheetBg}
            />

            <Pressable
              onPress={() => setOassicrmmenjoiirSelectedId(null)}
              hitSlop={10}
              style={styles.oassicrmmenjoiirsheetClose}>
              <Text style={styles.oassicrmmenjoiirsheetCloseText}>×</Text>
            </Pressable>

            <View style={styles.oassicrmmenjoiirsheetTop}>
              <ImageBackground
                source={oassicrmmenjoiirSelected.image}
                style={styles.oassicrmmenjoiirsheetThumb}
                imageStyle={styles.oassicrmmenjoiirsheetThumbImg}
              />

              <View style={styles.oassicrmmenjoiirsheetText}>
                <Text style={styles.oassicrmmenjoiirsheetCoords}>
                  {`${Number(oassicrmmenjoiirSelected.coordinates.lat).toFixed(
                    3,
                  )}° | ${Number(
                    oassicrmmenjoiirSelected.coordinates.long,
                  ).toFixed(3)}°`}
                </Text>

                <Text style={styles.oassicrmmenjoiirsheetTitle}>
                  {oassicrmmenjoiirSelected.title}
                </Text>

                <Text
                  style={styles.oassicrmmenjoiirsheetDesc}
                  numberOfLines={2}>
                  {oassicrmmenjoiirSelected.description}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={oassicrmmenjoiirOpenFullDetails}
              style={styles.oassicrmmenjoiirctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.oassicrmmenjoiircta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpempvioew.png')}
                />
                <Text style={styles.oassicrmmenjoiirctaText}>
                  VIEW FULL DETAILS
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhmap;

const oassicrmmenjoiirMapStyle = [
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
  oassicrmmenjoiircountPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF14',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  oassicrmmenjoiircountPillText: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  oassicrmmenjoiirwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  oassicrmmenjoiirheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  oassicrmmenjoiirkicker: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },

  oassicrmmenjoiirtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
  },

  oassicrmmenjoiirmapFrame: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#050D1A',
  },

  oassicrmmenjoiirmap: {
    flex: 1,
  },

  oassicrmmenjoiircornerTL: {
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

  oassicrmmenjoiircornerTR: {
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

  oassicrmmenjoiircornerBL: {
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

  oassicrmmenjoiircornerBR: {
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

  oassicrmmenjoiirmarker: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#00D4FF59',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00D4FF1A',
  },

  oassicrmmenjoiirmarkerFocused: {
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF26',
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  oassicrmmenjoiirmarkerInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00D4FF',
  },

  oassicrmmenjoiirhintWrap: {
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

  oassicrmmenjoiirhintDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00D4FF',
  },

  oassicrmmenjoiirhintText: {
    color: '#7BAFC4',
    fontSize: 12,
  },

  oassicrmmenjoiirsheet: {
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

  oassicrmmenjoiirsheetBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  oassicrmmenjoiirsheetClose: {
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

  oassicrmmenjoiirsheetCloseText: {
    color: '#7BAFC4',
    fontSize: 16,
    lineHeight: 18,
  },

  oassicrmmenjoiirsheetTop: {
    flexDirection: 'row',
    gap: 12,
    paddingRight: 24,
  },

  oassicrmmenjoiirsheetThumb: {
    width: 84,
    height: 84,
  },

  oassicrmmenjoiirsheetThumbImg: {
    borderRadius: 14,
  },

  oassicrmmenjoiirsheetText: {
    flex: 1,
  },

  oassicrmmenjoiirsheetCoords: {
    color: '#00D4FF80',
    fontSize: 10,
    marginBottom: 6,
  },

  oassicrmmenjoiirsheetTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },

  oassicrmmenjoiirsheetDesc: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  oassicrmmenjoiirctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 12,
  },

  oassicrmmenjoiircta: {
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  oassicrmmenjoiirctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
