import {ossdrmeexplrbechhStories} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhstories';

import {useOssdrmeexplrbechhSaved} from '../Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

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

import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';

import {ossdrmeexplrbechhLocations} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhdata';

const Ossdrmeexplrbechhsvd = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const [ossdrmeexplrbechTab, setOssdrmeexplrbechTab] = useState<
    'locations' | 'stories'
  >('locations');

  const {
    ossdrmeexplrbechhSavedLocations,
    ossdrmeexplrbechhSavedStories,
    ossdrmeexplrbechhToggleLocationSaved,
    ossdrmeexplrbechhToggleStorySaved,
  } = useOssdrmeexplrbechhSaved();

  const ossdrmeexplrbechSavedLocs = useMemo(() => {
    const set = new Set(ossdrmeexplrbechhSavedLocations);
    return ossdrmeexplrbechhLocations.filter(l => set.has(l.id));
  }, [ossdrmeexplrbechhSavedLocations]);

  const ossdrmeexplrbechSavedStrs = useMemo(() => {
    const set = new Set(ossdrmeexplrbechhSavedStories);
    return ossdrmeexplrbechhStories.filter(s => set.has(s.id));
  }, [ossdrmeexplrbechhSavedStories]);

  const ossdrmeexplrbechCounts = useMemo(() => {
    const locations = ossdrmeexplrbechSavedLocs.length;
    const stories = ossdrmeexplrbechSavedStrs.length;
    return {locations, stories, total: locations + stories};
  }, [ossdrmeexplrbechSavedLocs.length, ossdrmeexplrbechSavedStrs.length]);

  const ossdrmeexplrbechOpenLocation = (id: string) => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhloc', {id});
  };

  const ossdrmeexplrbechOpenStory = (id: string) => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhstry', {id});
  };

  const ossdrmeexplrbechGoStories = () => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhstries');
  };

  const ossdrmeexplrbechGoLocations = () => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhome');
  };

  const ossdrmeexplrbechIsLocations = ossdrmeexplrbechTab === 'locations';

  return (
    <Ossdrmeexplrbechhlayt>
      <View style={styles.ossdrmeexplrbechwrap}>
        <Text style={styles.ossdrmeexplrbechkicker}>YOUR COLLECTION</Text>
        <Text style={styles.ossdrmeexplrbechtitle}>SAVED</Text>

        <View style={styles.ossdrmeexplrbechstatsRow}>
          <View style={styles.ossdrmeexplrbechstat}>
            <Text style={styles.ossdrmeexplrbechstatNum}>
              {ossdrmeexplrbechCounts.locations}
            </Text>
            <Text style={styles.ossdrmeexplrbechstatLabel}>Locations</Text>
          </View>
          <View style={styles.ossdrmeexplrbechstat}>
            <Text style={styles.ossdrmeexplrbechstatNum}>
              {ossdrmeexplrbechCounts.stories}
            </Text>
            <Text style={styles.ossdrmeexplrbechstatLabel}>Stories</Text>
          </View>
          <View style={styles.ossdrmeexplrbechstat}>
            <Text style={styles.ossdrmeexplrbechstatNum}>
              {ossdrmeexplrbechCounts.total}
            </Text>
            <Text style={styles.ossdrmeexplrbechstatLabel}>Total</Text>
          </View>
        </View>

        <View style={styles.ossdrmeexplrbechseg}>
          <Pressable
            onPress={() => setOssdrmeexplrbechTab('locations')}
            style={[
              styles.ossdrmeexplrbechsegBtn,
              ossdrmeexplrbechIsLocations
                ? styles.ossdrmeexplrbechsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsloc.png')} />
            <Text
              style={[
                styles.ossdrmeexplrbechsegText,
                ossdrmeexplrbechIsLocations
                  ? styles.ossdrmeexplrbechsegTextActive
                  : null,
              ]}>
              Locations
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setOssdrmeexplrbechTab('stories')}
            style={[
              styles.ossdrmeexplrbechsegBtn,
              !ossdrmeexplrbechIsLocations
                ? styles.ossdrmeexplrbechsegBtnActive
                : null,
            ]}>
            <Image source={require('../../assets/i/ossdrmeexpsqzbok.png')} />
            <Text
              style={[
                styles.ossdrmeexplrbechsegText,
                !ossdrmeexplrbechIsLocations
                  ? styles.ossdrmeexplrbechsegTextActive
                  : null,
              ]}>
              Stories
            </Text>
          </Pressable>
        </View>

        {ossdrmeexplrbechIsLocations ? (
          ossdrmeexplrbechSavedLocs.length ? (
            <View style={styles.ossdrmeexplrbechlist}>
              {ossdrmeexplrbechSavedLocs.map(loc => (
                <Pressable
                  key={loc.id}
                  onPress={() => ossdrmeexplrbechOpenLocation(loc.id)}
                  style={styles.ossdrmeexplrbechcard}>
                  <View style={styles.ossdrmeexplrbechcardInner}>
                    <ImageBackground
                      source={loc.image}
                      style={styles.ossdrmeexplrbechthumb}
                      imageStyle={styles.ossdrmeexplrbechthumbImg}
                    />
                    <View style={styles.ossdrmeexplrbechcardBody}>
                      <Text style={styles.ossdrmeexplrbechcoords}>
                        {`${loc.coordinates.lat.toFixed(
                          3,
                        )}° | ${loc.coordinates.long.toFixed(3)}°`}
                      </Text>
                      <Text style={styles.ossdrmeexplrbechcardTitle}>
                        {loc.title}
                      </Text>
                      <Text style={styles.ossdrmeexplrbechcardSub}>
                        {loc.country}
                      </Text>
                    </View>
                    <Pressable
                      onPress={e => {
                        e.stopPropagation?.();
                        ossdrmeexplrbechhToggleLocationSaved(loc.id);
                      }}
                      hitSlop={10}
                      style={styles.ossdrmeexplrbechbookmark}>
                      <Image
                        source={require('../../assets/i/ossdrmeexplsvvd.png')}
                      />
                    </Pressable>
                  </View>
                </Pressable>
              ))}
            </View>
          ) : (
            <View style={styles.ossdrmeexplrbechempty}>
              <View style={styles.ossdrmeexplrbechemptyIcon}>
                <Image
                  source={require('../../assets/i/ossdrmeexpemptloc.png')}
                />
              </View>
              <Text style={styles.ossdrmeexplrbechemptyTitle}>
                No saved locations yet
              </Text>
              <Text style={styles.ossdrmeexplrbechemptyDesc}>
                Discover extraordinary shores and save them to your collection.
              </Text>
              <Pressable
                onPress={ossdrmeexplrbechGoLocations}
                style={styles.ossdrmeexplrbechemptyBtn}>
                <Text style={styles.ossdrmeexplrbechemptyBtnText}>
                  Explore Locations
                </Text>
              </Pressable>
            </View>
          )
        ) : ossdrmeexplrbechSavedStrs.length ? (
          <View style={styles.ossdrmeexplrbechlist}>
            {ossdrmeexplrbechSavedStrs.map(story => (
              <Pressable
                key={story.id}
                onPress={() => ossdrmeexplrbechOpenStory(story.id)}
                style={styles.ossdrmeexplrbechcard}>
                <View style={styles.ossdrmeexplrbechcardInner}>
                  <ImageBackground
                    source={story.image}
                    style={styles.ossdrmeexplrbechthumb}
                    imageStyle={styles.ossdrmeexplrbechthumbImg}
                  />
                  <View style={styles.ossdrmeexplrbechcardBody}>
                    <View style={styles.ossdrmeexplrbechstoryTopRow}>
                      <View style={styles.ossdrmeexplrbechstoryTagPill}>
                        <Text style={styles.ossdrmeexplrbechstoryTagText}>
                          {story.tag}
                        </Text>
                      </View>
                      <Text style={styles.ossdrmeexplrbechstoryMin}>
                        {`${story.readMin} min`}
                      </Text>
                    </View>
                    <Text style={styles.ossdrmeexplrbechcardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.ossdrmeexplrbechstoryTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                  </View>
                  <Pressable
                    onPress={e => {
                      e.stopPropagation?.();
                      ossdrmeexplrbechhToggleStorySaved(story.id);
                    }}
                    hitSlop={10}
                    style={styles.ossdrmeexplrbechbookmark}>
                    <Image
                      source={require('../../assets/i/ossdrmeexplsvvd.png')}
                    />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        ) : (
          <View style={styles.ossdrmeexplrbechempty}>
            <View style={styles.ossdrmeexplrbechemptyIcon}>
              <Image source={require('../../assets/i/ossdrmeexpemptst.png')} />
            </View>
            <Text style={styles.ossdrmeexplrbechemptyTitle}>
              No saved stories yet
            </Text>
            <Text style={styles.ossdrmeexplrbechemptyDesc}>
              Dive into ocean narratives and save the ones that move you.
            </Text>
            <Pressable
              onPress={ossdrmeexplrbechGoStories}
              style={styles.ossdrmeexplrbechemptyBtn}>
              <Text style={styles.ossdrmeexplrbechemptyBtnText}>
                Browse Stories
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhsvd;

const styles = StyleSheet.create({
  ossdrmeexplrbechcard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },

  ossdrmeexplrbechcardInner: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    minHeight: 90,
  },

  ossdrmeexplrbechwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 110,
  },
  ossdrmeexplrbechkicker: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  ossdrmeexplrbechtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginTop: 2,
    marginBottom: 16,
  },

  ossdrmeexplrbechstatsRow: {flexDirection: 'row', gap: 10, marginBottom: 14},
  ossdrmeexplrbechstat: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    paddingVertical: 14,
    alignItems: 'center',
  },
  ossdrmeexplrbechstatNum: {
    color: '#00D4FF',
    fontSize: 20,
    fontWeight: '800',
  },
  ossdrmeexplrbechstatLabel: {color: '#7BAFC4', fontSize: 11, marginTop: 4},

  ossdrmeexplrbechseg: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
    marginBottom: 14,
    padding: 3,
  },
  ossdrmeexplrbechsegBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
  },
  ossdrmeexplrbechsegBtnActive: {
    backgroundColor: '#00D4FF14',
    borderColor: '#00D4FF66',
    borderRadius: 12,
  },
  ossdrmeexplrbechsegText: {color: '#7BAFC4', fontSize: 12},
  ossdrmeexplrbechsegTextActive: {color: '#00D4FF', fontWeight: '700'},

  ossdrmeexplrbechlist: {gap: 12, paddingTop: 4},

  ossdrmeexplrbechthumb: {width: 90, height: '100%'},
  ossdrmeexplrbechthumbImg: {
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  ossdrmeexplrbechcardBody: {flex: 1, padding: 12},
  ossdrmeexplrbechcoords: {color: '#00D4FF80', fontSize: 10, marginBottom: 6},
  ossdrmeexplrbechcardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
  },
  ossdrmeexplrbechcardSub: {color: '#7BAFC4', fontSize: 11, marginTop: 4},
  ossdrmeexplrbechbookmark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ossdrmeexplrbechstoryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  ossdrmeexplrbechstoryTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ossdrmeexplrbechstoryTagText: {color: '#00D4FF', fontSize: 10},
  ossdrmeexplrbechstoryMin: {color: '#7BAFC4', fontSize: 11},
  ossdrmeexplrbechstoryTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },

  ossdrmeexplrbechempty: {alignItems: 'center', paddingTop: 50},
  ossdrmeexplrbechemptyIcon: {
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
  ossdrmeexplrbechemptyIconText: {color: '#00D4FF', fontSize: 18},
  ossdrmeexplrbechemptyTitle: {
    color: '#E7F7FF',
    fontSize: 17,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 12,
    marginTop: 5,
  },
  ossdrmeexplrbechemptyDesc: {
    color: '#7BAFC4',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 50,
  },
  ossdrmeexplrbechemptyBtn: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF0A',
  },
  ossdrmeexplrbechemptyBtnText: {color: '#00D4FF', fontSize: 13},
});
