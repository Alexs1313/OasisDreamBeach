import {ockeanguudexplrrhStories} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhstories';

import {useOckeanguudexplrrhSaved} from '../Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

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

import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';

import {ockeanguudexplrrhLocations} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhdata';

const Ockeanguudexplrrhsvd = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const [ockeanguudexplrrTab, setOckeanguudexplrrTab] = useState<
    'locations' | 'stories'
  >('locations');

  const {
    ockeanguudexplrrhSavedLocations,
    ockeanguudexplrrhSavedStories,
    ockeanguudexplrrhToggleLocationSaved,
    ockeanguudexplrrhToggleStorySaved,
  } = useOckeanguudexplrrhSaved();

  const ockeanguudexplrrSavedLocs = useMemo(() => {
    const set = new Set(ockeanguudexplrrhSavedLocations);
    return ockeanguudexplrrhLocations.filter(l => set.has(l.id));
  }, [ockeanguudexplrrhSavedLocations]);

  const ockeanguudexplrrSavedStrs = useMemo(() => {
    const set = new Set(ockeanguudexplrrhSavedStories);
    return ockeanguudexplrrhStories.filter(s => set.has(s.id));
  }, [ockeanguudexplrrhSavedStories]);

  const ockeanguudexplrrCounts = useMemo(() => {
    const locations = ockeanguudexplrrSavedLocs.length;
    const stories = ockeanguudexplrrSavedStrs.length;
    return {locations, stories, total: locations + stories};
  }, [ockeanguudexplrrSavedLocs.length, ockeanguudexplrrSavedStrs.length]);

  const ockeanguudexplrrOpenLocation = (id: string) => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhloc', {id});
  };

  const ockeanguudexplrrOpenStory = (id: string) => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhstry', {id});
  };

  const ockeanguudexplrrGoStories = () => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhstries');
  };

  const ockeanguudexplrrGoLocations = () => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhome');
  };

  const ockeanguudexplrrIsLocations = ockeanguudexplrrTab === 'locations';

  return (
    <Ockeanguudexplrrhlayt>
      <View style={styles.ockeanguudexplrrwrap}>
        <Text style={styles.ockeanguudexplrrkicker}>YOUR COLLECTION</Text>
        <Text style={styles.ockeanguudexplrrtitle}>SAVED</Text>

        <View style={styles.ockeanguudexplrrstatsRow}>
          <View style={styles.ockeanguudexplrrstat}>
            <Text style={styles.ockeanguudexplrrstatNum}>
              {ockeanguudexplrrCounts.locations}
            </Text>
            <Text style={styles.ockeanguudexplrrstatLabel}>Locations</Text>
          </View>
          <View style={styles.ockeanguudexplrrstat}>
            <Text style={styles.ockeanguudexplrrstatNum}>
              {ockeanguudexplrrCounts.stories}
            </Text>
            <Text style={styles.ockeanguudexplrrstatLabel}>Stories</Text>
          </View>
          <View style={styles.ockeanguudexplrrstat}>
            <Text style={styles.ockeanguudexplrrstatNum}>
              {ockeanguudexplrrCounts.total}
            </Text>
            <Text style={styles.ockeanguudexplrrstatLabel}>Total</Text>
          </View>
        </View>

        <View style={styles.ockeanguudexplrrseg}>
          <Pressable
            onPress={() => setOckeanguudexplrrTab('locations')}
            style={[
              styles.ockeanguudexplrrsegBtn,
              ockeanguudexplrrIsLocations
                ? styles.ockeanguudexplrrsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsloc.png')} />
            <Text
              style={[
                styles.ockeanguudexplrrsegText,
                ockeanguudexplrrIsLocations
                  ? styles.ockeanguudexplrrsegTextActive
                  : null,
              ]}>
              Locations
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setOckeanguudexplrrTab('stories')}
            style={[
              styles.ockeanguudexplrrsegBtn,
              !ockeanguudexplrrIsLocations
                ? styles.ockeanguudexplrrsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsqzbok.png')} />
            <Text
              style={[
                styles.ockeanguudexplrrsegText,
                !ockeanguudexplrrIsLocations
                  ? styles.ockeanguudexplrrsegTextActive
                  : null,
              ]}>
              Stories
            </Text>
          </Pressable>
        </View>

        {ockeanguudexplrrIsLocations ? (
          ockeanguudexplrrSavedLocs.length ? (
            <View style={styles.ockeanguudexplrrlist}>
              {ockeanguudexplrrSavedLocs.map(loc => (
                <Pressable
                  key={loc.id}
                  onPress={() => ockeanguudexplrrOpenLocation(loc.id)}
                  style={styles.ockeanguudexplrrcard}>
                  <View style={styles.ockeanguudexplrrcardInner}>
                    <ImageBackground
                      source={loc.image}
                      style={styles.ockeanguudexplrrthumb}
                      imageStyle={styles.ockeanguudexplrrthumbImg}
                    />
                    <View style={styles.ockeanguudexplrrcardBody}>
                      <Text style={styles.ockeanguudexplrrcoords}>
                        {`${loc.coordinates.lat.toFixed(
                          3,
                        )}° | ${loc.coordinates.long.toFixed(3)}°`}
                      </Text>
                      <Text style={styles.ockeanguudexplrrcardTitle}>
                        {loc.title}
                      </Text>
                      <Text style={styles.ockeanguudexplrrcardSub}>
                        {loc.country}
                      </Text>
                    </View>
                    <Pressable
                      onPress={e => {
                        e.stopPropagation?.();
                        ockeanguudexplrrhToggleLocationSaved(loc.id);
                      }}
                      hitSlop={10}
                      style={styles.ockeanguudexplrrbookmark}>
                      <Image
                        source={require('../../assets/i/ossdrmeexplsvvd.png')}
                      />
                    </Pressable>
                  </View>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.ockeanguudexplrrempty}>
              <View style={styles.ockeanguudexplrremptyIcon}>
                <Image
                  source={require('../../assets/i/ossdrmeexpemptloc.png')}
                />
              </View>
              <Text style={styles.ockeanguudexplrremptyTitle}>
                No saved locations yet
              </Text>
              <Text style={styles.ockeanguudexplrremptyDesc}>
                Discover extraordinary shores and save them to your collection.
              </Text>
              <Pressable
                onPress={ockeanguudexplrrGoLocations}
                style={styles.ockeanguudexplrremptyBtn}>
                <Text style={styles.ockeanguudexplrremptyBtnText}>
                  Explore Locations
                </Text>
              </Pressable>
            </View>
          )
        ) : ockeanguudexplrrSavedStrs.length ? (
          <View style={styles.ockeanguudexplrrlist}>
            {ockeanguudexplrrSavedStrs.map(story => (
              <Pressable
                key={story.id}
                onPress={() => ockeanguudexplrrOpenStory(story.id)}
                style={styles.ockeanguudexplrrcard}>
                <View style={styles.ockeanguudexplrrcardInner}>
                  <ImageBackground
                    source={story.image}
                    style={styles.ockeanguudexplrrthumb}
                    imageStyle={styles.ockeanguudexplrrthumbImg}
                  />
                  <View style={styles.ockeanguudexplrrcardBody}>
                    <View style={styles.ockeanguudexplrrstoryTopRow}>
                      <View style={styles.ockeanguudexplrrstoryTagPill}>
                        <Text style={styles.ockeanguudexplrrstoryTagText}>
                          {story.tag}
                        </Text>
                      </View>
                      <Text style={styles.ockeanguudexplrrstoryMin}>
                        {`${story.readMin} min`}
                      </Text>
                    </View>
                    <Text style={styles.ockeanguudexplrrcardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.ockeanguudexplrrstoryTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                  </View>
                  <Pressable
                    onPress={e => {
                      e.stopPropagation?.();
                      ockeanguudexplrrhToggleStorySaved(story.id);
                    }}
                    hitSlop={10}
                    style={styles.ockeanguudexplrrbookmark}>
                    <Image
                      source={require('../../assets/i/ossdrmeexplsvvd.png')}
                    />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.ockeanguudexplrrempty}>
            <View style={styles.ockeanguudexplrremptyIcon}>
              <Image source={require('../../assets/i/ossdrmeexpemptst.png')} />
            </View>
            <Text style={styles.ockeanguudexplrremptyTitle}>
              No saved stories yet
            </Text>
            <Text style={styles.ockeanguudexplrremptyDesc}>
              Dive into ocean narratives and save the ones that move you.
            </Text>
            <Pressable
              onPress={ockeanguudexplrrGoStories}
              style={styles.ockeanguudexplrremptyBtn}>
              <Text style={styles.ockeanguudexplrremptyBtnText}>
                Browse Stories
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhsvd;

const styles = StyleSheet.create({
  ockeanguudexplrrcard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },

  ockeanguudexplrrcardInner: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    minHeight: 90,
  },

  ockeanguudexplrrwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 110,
  },
  ockeanguudexplrrkicker: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  ockeanguudexplrrtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
    marginBottom: 16,
  },

  ockeanguudexplrrstatsRow: {flexDirection: 'row', gap: 10, marginBottom: 14},
  ockeanguudexplrrstat: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    paddingVertical: 14,
    alignItems: 'center',
  },
  ockeanguudexplrrstatNum: {
    color: '#00D4FF',
    fontSize: 20,
    fontWeight: '800',
  },
  ockeanguudexplrrstatLabel: {color: '#7BAFC4', fontSize: 11, marginTop: 4},

  ockeanguudexplrrseg: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
    marginBottom: 14,
    padding: 3,
  },
  ockeanguudexplrrsegBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  ockeanguudexplrrsegBtnActive: {
    backgroundColor: '#00D4FF14',
    borderColor: '#00D4FF66',
    borderRadius: 12,
  },
  ockeanguudexplrrsegText: {color: '#7BAFC4', fontSize: 12},
  ockeanguudexplrrsegTextActive: {color: '#00D4FF', fontWeight: '700'},

  ockeanguudexplrrlist: {gap: 12, paddingTop: 4},

  ockeanguudexplrrthumb: {width: 90, height: '100%'},
  ockeanguudexplrrthumbImg: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  ockeanguudexplrrcardBody: {flex: 1, padding: 12},
  ockeanguudexplrrcoords: {color: '#00D4FF80', fontSize: 10, marginBottom: 6},
  ockeanguudexplrrcardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
  },
  ockeanguudexplrrcardSub: {color: '#7BAFC4', fontSize: 11, marginTop: 4},
  ockeanguudexplrrbookmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ockeanguudexplrrstoryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  ockeanguudexplrrstoryTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ockeanguudexplrrstoryTagText: {color: '#00D4FF', fontSize: 10},
  ockeanguudexplrrstoryMin: {color: '#7BAFC4', fontSize: 11},
  ockeanguudexplrrstoryTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  ockeanguudexplrrempty: {alignItems: 'center', paddingTop: 50},
  ockeanguudexplrremptyIcon: {
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
  ockeanguudexplrremptyIconText: {color: '#00D4FF', fontSize: 18},
  ockeanguudexplrremptyTitle: {
    color: '#E7F7FF',
    fontSize: 17,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 12,
    marginTop: 5,
  },
  ockeanguudexplrremptyDesc: {
    color: '#7BAFC4',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 50,
  },
  ockeanguudexplrremptyBtn: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF0A',
  },
  ockeanguudexplrremptyBtnText: {color: '#00D4FF', fontSize: 13},
});
