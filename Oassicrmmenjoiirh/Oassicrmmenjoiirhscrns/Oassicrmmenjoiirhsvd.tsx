import {oassicrmmenjoiirhStories} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhstories';

import {useOassicrmmenjoiirhSaved} from '../Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

import React, {useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';

import {oassicrmmenjoiirhLocations} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhdata';

const Oassicrmmenjoiirhsvd = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const [oassicrmmenjoiirTab, setOassicrmmenjoiirTab] = useState<
    'locations' | 'stories'
  >('locations');

  const {
    oassicrmmenjoiirhSavedLocations,
    oassicrmmenjoiirhSavedStories,
    oassicrmmenjoiirhToggleLocationSaved,
    oassicrmmenjoiirhToggleStorySaved,
  } = useOassicrmmenjoiirhSaved();

  const oassicrmmenjoiirSavedLocs = useMemo(() => {
    const set = new Set(oassicrmmenjoiirhSavedLocations);
    return oassicrmmenjoiirhLocations.filter(l => set.has(l.id));
  }, [oassicrmmenjoiirhSavedLocations]);

  const oassicrmmenjoiirSavedStrs = useMemo(() => {
    const set = new Set(oassicrmmenjoiirhSavedStories);
    return oassicrmmenjoiirhStories.filter(s => set.has(s.id));
  }, [oassicrmmenjoiirhSavedStories]);

  const oassicrmmenjoiirCounts = useMemo(() => {
    const locations = oassicrmmenjoiirSavedLocs.length;
    const stories = oassicrmmenjoiirSavedStrs.length;
    return {locations, stories, total: locations + stories};
  }, [oassicrmmenjoiirSavedLocs.length, oassicrmmenjoiirSavedStrs.length]);

  const oassicrmmenjoiirOpenLocation = (id: string) => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhloc', {id});
  };

  const oassicrmmenjoiirOpenStory = (id: string) => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhstry', {id});
  };

  const oassicrmmenjoiirGoStories = () => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhstries');
  };

  const oassicrmmenjoiirGoLocations = () => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhome');
  };

  const oassicrmmenjoiirIsLocations = oassicrmmenjoiirTab === 'locations';

  return (
    <Oassicrmmenjoiirhlayt>
      <View style={styles.oassicrmmenjoiirwrap}>
        <Text style={styles.oassicrmmenjoiirkicker}>YOUR COLLECTION</Text>
        <Text style={styles.oassicrmmenjoiirtitle}>SAVED</Text>

        <View style={styles.oassicrmmenjoiirstatsRow}>
          <View style={styles.oassicrmmenjoiirstat}>
            <Text style={styles.oassicrmmenjoiirstatNum}>
              {oassicrmmenjoiirCounts.locations}
            </Text>
            <Text style={styles.oassicrmmenjoiirstatLabel}>Locations</Text>
          </View>
          <View style={styles.oassicrmmenjoiirstat}>
            <Text style={styles.oassicrmmenjoiirstatNum}>
              {oassicrmmenjoiirCounts.stories}
            </Text>
            <Text style={styles.oassicrmmenjoiirstatLabel}>Stories</Text>
          </View>
          <View style={styles.oassicrmmenjoiirstat}>
            <Text style={styles.oassicrmmenjoiirstatNum}>
              {oassicrmmenjoiirCounts.total}
            </Text>
            <Text style={styles.oassicrmmenjoiirstatLabel}>Total</Text>
          </View>
        </View>

        <View style={styles.oassicrmmenjoiirseg}>
          <Pressable
            onPress={() => setOassicrmmenjoiirTab('locations')}
            style={[
              styles.oassicrmmenjoiirsegBtn,
              oassicrmmenjoiirIsLocations
                ? styles.oassicrmmenjoiirsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsloc.png')} />
            <Text
              style={[
                styles.oassicrmmenjoiirsegText,
                oassicrmmenjoiirIsLocations
                  ? styles.oassicrmmenjoiirsegTextActive
                  : null,
              ]}>
              Locations
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setOassicrmmenjoiirTab('stories')}
            style={[
              styles.oassicrmmenjoiirsegBtn,
              !oassicrmmenjoiirIsLocations
                ? styles.oassicrmmenjoiirsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsqzbok.png')} />
            <Text
              style={[
                styles.oassicrmmenjoiirsegText,
                !oassicrmmenjoiirIsLocations
                  ? styles.oassicrmmenjoiirsegTextActive
                  : null,
              ]}>
              Stories
            </Text>
          </Pressable>
        </View>

        {oassicrmmenjoiirIsLocations ? (
          oassicrmmenjoiirSavedLocs.length ? (
            <View style={styles.oassicrmmenjoiirlist}>
              {oassicrmmenjoiirSavedLocs.map(loc => (
                <Pressable
                  key={loc.id}
                  onPress={() => oassicrmmenjoiirOpenLocation(loc.id)}
                  style={styles.oassicrmmenjoiircard}>
                  <View style={styles.oassicrmmenjoiircardInner}>
                    <ImageBackground
                      source={loc.image}
                      style={styles.oassicrmmenjoiirthumb}
                      imageStyle={styles.oassicrmmenjoiirthumbImg}
                    />
                    <View style={styles.oassicrmmenjoiircardBody}>
                      <Text style={styles.oassicrmmenjoiircoords}>
                        {`${loc.coordinates.lat.toFixed(
                          3,
                        )}° | ${loc.coordinates.long.toFixed(3)}°`}
                      </Text>
                      <Text style={styles.oassicrmmenjoiircardTitle}>
                        {loc.title}
                      </Text>
                      <Text style={styles.oassicrmmenjoiircardSub}>
                        {loc.country}
                      </Text>
                    </View>
                    <Pressable
                      onPress={e => {
                        e.stopPropagation?.();
                        oassicrmmenjoiirhToggleLocationSaved(loc.id);
                      }}
                      hitSlop={10}
                      style={styles.oassicrmmenjoiirbookmark}>
                      <Image
                        source={require('../../assets/i/ossdrmeexplsvvd.png')}
                      />
                    </Pressable>
                  </View>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.oassicrmmenjoiirempty}>
              <View style={styles.oassicrmmenjoiiremptyIcon}>
                <Image
                  source={require('../../assets/i/ossdrmeexpemptloc.png')}
                />
              </View>
              <Text style={styles.oassicrmmenjoiiremptyTitle}>
                No saved locations yet
              </Text>
              <Text style={styles.oassicrmmenjoiiremptyDesc}>
                Discover extraordinary shores and save them to your collection.
              </Text>
              <Pressable
                onPress={oassicrmmenjoiirGoLocations}
                style={styles.oassicrmmenjoiiremptyBtn}>
                <Text style={styles.oassicrmmenjoiiremptyBtnText}>
                  Explore Locations
                </Text>
              </Pressable>
            </View>
          )
        ) : oassicrmmenjoiirSavedStrs.length ? (
          <View style={styles.oassicrmmenjoiirlist}>
            {oassicrmmenjoiirSavedStrs.map(story => (
              <Pressable
                key={story.id}
                onPress={() => oassicrmmenjoiirOpenStory(story.id)}
                style={styles.oassicrmmenjoiircard}>
                <View style={styles.oassicrmmenjoiircardInner}>
                  <ImageBackground
                    source={story.image}
                    style={styles.oassicrmmenjoiirthumb}
                    imageStyle={styles.oassicrmmenjoiirthumbImg}
                  />
                  <View style={styles.oassicrmmenjoiircardBody}>
                    <View style={styles.oassicrmmenjoiirstoryTopRow}>
                      <View style={styles.oassicrmmenjoiirstoryTagPill}>
                        <Text style={styles.oassicrmmenjoiirstoryTagText}>
                          {story.tag}
                        </Text>
                      </View>
                      <Text style={styles.oassicrmmenjoiirstoryMin}>
                        {`${story.readMin} min`}
                      </Text>
                    </View>
                    <Text style={styles.oassicrmmenjoiircardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.oassicrmmenjoiirstoryTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                  </View>
                  <Pressable
                    onPress={e => {
                      e.stopPropagation?.();
                      oassicrmmenjoiirhToggleStorySaved(story.id);
                    }}
                    hitSlop={10}
                    style={styles.oassicrmmenjoiirbookmark}>
                    <Image
                      source={require('../../assets/i/ossdrmeexplsvvd.png')}
                    />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.oassicrmmenjoiirempty}>
            <View style={styles.oassicrmmenjoiiremptyIcon}>
              <Image source={require('../../assets/i/ossdrmeexpemptst.png')} />
            </View>
            <Text style={styles.oassicrmmenjoiiremptyTitle}>
              No saved stories yet
            </Text>
            <Text style={styles.oassicrmmenjoiiremptyDesc}>
              Dive into ocean narratives and save the ones that move you.
            </Text>
            <Pressable
              onPress={oassicrmmenjoiirGoStories}
              style={styles.oassicrmmenjoiiremptyBtn}>
              <Text style={styles.oassicrmmenjoiiremptyBtnText}>
                Browse Stories
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhsvd;

const styles = StyleSheet.create({
  oassicrmmenjoiircard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },

  oassicrmmenjoiircardInner: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    minHeight: 90,
  },

  oassicrmmenjoiirwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 110,
  },
  oassicrmmenjoiirkicker: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  oassicrmmenjoiirtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
    marginBottom: 16,
  },

  oassicrmmenjoiirstatsRow: {flexDirection: 'row', gap: 10, marginBottom: 14},
  oassicrmmenjoiirstat: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    paddingVertical: 14,
    alignItems: 'center',
  },
  oassicrmmenjoiirstatNum: {
    color: '#00D4FF',
    fontSize: 20,
    fontWeight: '800',
  },
  oassicrmmenjoiirstatLabel: {color: '#7BAFC4', fontSize: 11, marginTop: 4},

  oassicrmmenjoiirseg: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
    marginBottom: 14,
    padding: 3,
  },
  oassicrmmenjoiirsegBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  oassicrmmenjoiirsegBtnActive: {
    backgroundColor: '#00D4FF14',
    borderColor: '#00D4FF66',
    borderRadius: 12,
  },
  oassicrmmenjoiirsegText: {color: '#7BAFC4', fontSize: 12},
  oassicrmmenjoiirsegTextActive: {color: '#00D4FF', fontWeight: '700'},

  oassicrmmenjoiirlist: {gap: 12, paddingTop: 4},

  oassicrmmenjoiirthumb: {width: 90, height: '100%'},
  oassicrmmenjoiirthumbImg: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  oassicrmmenjoiircardBody: {flex: 1, padding: 12},
  oassicrmmenjoiircoords: {color: '#00D4FF80', fontSize: 10, marginBottom: 6},
  oassicrmmenjoiircardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
  },
  oassicrmmenjoiircardSub: {color: '#7BAFC4', fontSize: 11, marginTop: 4},
  oassicrmmenjoiirbookmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oassicrmmenjoiirstoryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  oassicrmmenjoiirstoryTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  oassicrmmenjoiirstoryTagText: {color: '#00D4FF', fontSize: 10},
  oassicrmmenjoiirstoryMin: {color: '#7BAFC4', fontSize: 11},
  oassicrmmenjoiirstoryTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  oassicrmmenjoiirempty: {alignItems: 'center', paddingTop: 50},
  oassicrmmenjoiiremptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#00D4FF0F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  oassicrmmenjoiiremptyIconText: {color: '#00D4FF', fontSize: 18},
  oassicrmmenjoiiremptyTitle: {
    color: '#E7F7FF',
    fontSize: 17,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 12,
    marginTop: 5,
  },
  oassicrmmenjoiiremptyDesc: {
    color: '#7BAFC4',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 50,
  },
  oassicrmmenjoiiremptyBtn: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF0A',
  },
  oassicrmmenjoiiremptyBtnText: {color: '#00D4FF', fontSize: 13},
});
