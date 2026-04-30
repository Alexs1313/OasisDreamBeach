import {ossdrmeexplrbechhStories} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhstories';

import {useOssdrmeexplrbechhSaved} from '../Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

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

import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';

const Ossdrmeexplrbechhstries = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const {ossdrmeexplrbechhIsStorySaved, ossdrmeexplrbechhToggleStorySaved} =
    useOssdrmeexplrbechhSaved();

  const ossdrmeexplrbechFeatured = useMemo(() => {
    return ossdrmeexplrbechhStories[2] ?? ossdrmeexplrbechhStories[0];
  }, []);

  const ossdrmeexplrbechOpenStory = (id: string) => {
    ossdrmeexplrbechNavigation.navigate('Ossdrmeexplrbechhstry', {id});
  };

  return (
    <Ossdrmeexplrbechhlayt>
      <View style={styles.ossdrmeexplrbechwrap}>
        <Text style={styles.ossdrmeexplrbechpremium}>PREMIUM READING</Text>
        <Text style={styles.ossdrmeexplrbechtitle}>OCEAN STORIES</Text>

        <Pressable
          onPress={() => ossdrmeexplrbechOpenStory(ossdrmeexplrbechFeatured.id)}
          style={styles.ossdrmeexplrbechfeaturedPress}>
          <ImageBackground
            source={ossdrmeexplrbechFeatured.image}
            style={styles.ossdrmeexplrbechfeaturedBg}
            imageStyle={styles.ossdrmeexplrbechfeaturedBgImg}>
            <LinearGradient
              colors={['#00000000', '#000000B3']}
              style={styles.ossdrmeexplrbechfeaturedFade}
            />
            <View style={styles.ossdrmeexplrbechtagPill}>
              <Text style={styles.ossdrmeexplrbechtagPillText}>
                {ossdrmeexplrbechFeatured.tag}
              </Text>
            </View>
            <View style={styles.ossdrmeexplrbechfeaturedContent}>
              <Text style={styles.ossdrmeexplrbechreadMin}>
                {`${ossdrmeexplrbechFeatured.readMin} min read`}
              </Text>
              <Text style={styles.ossdrmeexplrbechfeaturedTitle}>
                {ossdrmeexplrbechFeatured.title}
              </Text>
              <Text
                style={styles.ossdrmeexplrbechfeaturedTagline}
                numberOfLines={2}>
                {ossdrmeexplrbechFeatured.tagline}
              </Text>
            </View>
          </ImageBackground>
        </Pressable>

        <View style={styles.ossdrmeexplrbechsectionRow}>
          <Text style={styles.ossdrmeexplrbechsectionTitle}>ALL STORIES</Text>
          <View style={styles.ossdrmeexplrbechsectionLine} />
        </View>

        <View style={styles.ossdrmeexplrbechlist}>
          {ossdrmeexplrbechhStories.map(story => {
            const saved = ossdrmeexplrbechhIsStorySaved(story.id);
            return (
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
                    <View style={styles.ossdrmeexplrbechcardTopRow}>
                      <View style={styles.ossdrmeexplrbechcardTagPill}>
                        <Text style={styles.ossdrmeexplrbechcardTagText}>
                          {story.tag}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() =>
                          ossdrmeexplrbechhToggleStorySaved(story.id)
                        }
                        hitSlop={10}
                        style={styles.ossdrmeexplrbechsaveIconBtn}>
                        <Image
                          source={
                            saved
                              ? require('../../assets/i/ossdrmeexplsvvd.png')
                              : require('../../assets/i/ossdrmeexplsvv.png')
                          }
                        />
                      </Pressable>
                    </View>

                    <Text style={styles.ossdrmeexplrbechcardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.ossdrmeexplrbechcardTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                    <Text style={styles.ossdrmeexplrbechcardReadMin}>
                      {`${story.readMin} min read`}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhstries;

const styles = StyleSheet.create({
  ossdrmeexplrbechsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 10,
  },

  ossdrmeexplrbechsectionTitle: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },
  ossdrmeexplrbechsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  ossdrmeexplrbechwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },
  ossdrmeexplrbechpremium: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  ossdrmeexplrbechtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 14,
    marginTop: 2,
  },

  ossdrmeexplrbechfeaturedPress: {
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  ossdrmeexplrbechfeaturedBg: {height: 170, width: '100%'},
  ossdrmeexplrbechfeaturedBgImg: {borderRadius: 18},
  ossdrmeexplrbechfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 110,
  },
  ossdrmeexplrbechfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 12,
  },
  ossdrmeexplrbechtagPill: {
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
  ossdrmeexplrbechtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },
  ossdrmeexplrbechreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 4},
  ossdrmeexplrbechfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  ossdrmeexplrbechfeaturedTagline: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
  },

  ossdrmeexplrbechlist: {gap: 12, paddingBottom: 12},
  ossdrmeexplrbechcard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },
  ossdrmeexplrbechcardInner: {flexDirection: 'row', padding: 12, gap: 12},
  ossdrmeexplrbechthumb: {width: 86, height: 86},
  ossdrmeexplrbechthumbImg: {borderRadius: 14},

  ossdrmeexplrbechcardBody: {flex: 1},
  ossdrmeexplrbechcardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  ossdrmeexplrbechcardTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ossdrmeexplrbechcardTagText: {
    color: '#00D4FF',
    fontSize: 10,
  },
  ossdrmeexplrbechsaveIconBtn: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechsaveIcon: {color: '#00D4FF', fontSize: 14},

  ossdrmeexplrbechcardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  ossdrmeexplrbechcardTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },
  ossdrmeexplrbechcardReadMin: {color: '#7BAFC4', fontSize: 11, marginTop: 8},
});
