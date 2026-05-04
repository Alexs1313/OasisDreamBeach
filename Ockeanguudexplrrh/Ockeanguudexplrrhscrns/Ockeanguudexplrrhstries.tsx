import {ockeanguudexplrrhStories} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhstories';

import {useOckeanguudexplrrhSaved} from '../Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

import React, {useMemo} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';

const Ockeanguudexplrrhstries = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const {ockeanguudexplrrhIsStorySaved, ockeanguudexplrrhToggleStorySaved} =
    useOckeanguudexplrrhSaved();

  const ockeanguudexplrrFeatured = useMemo(() => {
    return ockeanguudexplrrhStories[2] ?? ockeanguudexplrrhStories[0];
  }, []);

  const ockeanguudexplrrOpenStory = (id: string) => {
    ockeanguudexplrrNavigation.navigate('Ockeanguudexplrrhstry', {id});
  };

  return (
    <Ockeanguudexplrrhlayt>
      <View style={styles.ockeanguudexplrrwrap}>
        <Text style={styles.ockeanguudexplrrpremium}>PREMIUM READING</Text>
        <Text style={styles.ockeanguudexplrrtitle}>OCEAN STORIES</Text>

        <Pressable
          onPress={() => ockeanguudexplrrOpenStory(ockeanguudexplrrFeatured.id)}
          style={styles.ockeanguudexplrrfeaturedPress}>
          <ImageBackground
            source={ockeanguudexplrrFeatured.image}
            style={styles.ockeanguudexplrrfeaturedBg}
            imageStyle={styles.ockeanguudexplrrfeaturedBgImg}>
            <LinearGradient
              colors={['#00000000', '#000000B3']}
              style={styles.ockeanguudexplrrfeaturedFade}
            />
            <View style={styles.ockeanguudexplrrtagPill}>
              <Text style={styles.ockeanguudexplrrtagPillText}>
                {ockeanguudexplrrFeatured.tag}
              </Text>
            </View>
            <View style={styles.ockeanguudexplrrfeaturedContent}>
              <Text style={styles.ockeanguudexplrrreadMin}>
                {`${ockeanguudexplrrFeatured.readMin} min read`}
              </Text>
              <Text style={styles.ockeanguudexplrrfeaturedTitle}>
                {ockeanguudexplrrFeatured.title}
              </Text>
              <Text
                style={styles.ockeanguudexplrrfeaturedTagline}
                numberOfLines={2}>
                {ockeanguudexplrrFeatured.tagline}
              </Text>
            </View>
          </ImageBackground>
        </Pressable>

        <View style={styles.ockeanguudexplrrsectionRow}>
          <Text style={styles.ockeanguudexplrrsectionTitle}>ALL STORIES</Text>
          <View style={styles.ockeanguudexplrrsectionLine} />
        </View>

        <View style={styles.ockeanguudexplrrlist}>
          {ockeanguudexplrrhStories.map(story => {
            const saved = ockeanguudexplrrhIsStorySaved(story.id);
            return (
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
                    <View style={styles.ockeanguudexplrrcardTopRow}>
                      <View style={styles.ockeanguudexplrrcardTagPill}>
                        <Text style={styles.ockeanguudexplrrcardTagText}>
                          {story.tag}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() =>
                          ockeanguudexplrrhToggleStorySaved(story.id)
                        }
                        hitSlop={10}
                        style={styles.ockeanguudexplrrsaveIconBtn}>
                        <Image
                          source={
                            saved
                              ? require('../../assets/i/ossdrmeexplsvvd.png')
                              : require('../../assets/i/ossdrmeexplsvv.png')
                          }
                        />
                      </Pressable>
                    </View>

                    <Text style={styles.ockeanguudexplrrcardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.ockeanguudexplrrcardTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                    <Text style={styles.ockeanguudexplrrcardReadMin}>
                      {`${story.readMin} min read`}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhstries;

const styles = StyleSheet.create({
  ockeanguudexplrrsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 10,
  },

  ockeanguudexplrrsectionTitle: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },
  ockeanguudexplrrsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  ockeanguudexplrrwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },
  ockeanguudexplrrpremium: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  ockeanguudexplrrtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 14,
    marginTop: 2,
  },

  ockeanguudexplrrfeaturedPress: {
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  ockeanguudexplrrfeaturedBg: {height: 170, width: '100%'},
  ockeanguudexplrrfeaturedBgImg: {borderRadius: 18},
  ockeanguudexplrrfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 110,
  },
  ockeanguudexplrrfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 12,
  },
  ockeanguudexplrrtagPill: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#D4A8534D',
    backgroundColor: '#D4A8531F',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 10,
    position: 'absolute',
    top: 12,
    left: 14,
    zIndex: 1,
  },
  ockeanguudexplrrtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },
  ockeanguudexplrrreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 4},
  ockeanguudexplrrfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  ockeanguudexplrrfeaturedTagline: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
  },

  ockeanguudexplrrlist: {gap: 12, paddingBottom: 12},
  ockeanguudexplrrcard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },
  ockeanguudexplrrcardInner: {flexDirection: 'row', padding: 12, gap: 12},
  ockeanguudexplrrthumb: {width: 86, height: 86},
  ockeanguudexplrrthumbImg: {borderRadius: 14},

  ockeanguudexplrrcardBody: {flex: 1},

  ockeanguudexplrrcardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  ockeanguudexplrrcardTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ockeanguudexplrrcardTagText: {
    color: '#00D4FF',
    fontSize: 10,
  },
  ockeanguudexplrrsaveIconBtn: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrsaveIcon: {color: '#00D4FF', fontSize: 14},

  ockeanguudexplrrcardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  ockeanguudexplrrcardTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },
  ockeanguudexplrrcardReadMin: {color: '#7BAFC4', fontSize: 11, marginTop: 8},
});
