import {oassicrmmenjoiirhStories} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhstories';

import {useOassicrmmenjoiirhSaved} from '../Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

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

import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';

const Oassicrmmenjoiirhstries = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const {oassicrmmenjoiirhIsStorySaved, oassicrmmenjoiirhToggleStorySaved} =
    useOassicrmmenjoiirhSaved();

  const oassicrmmenjoiirFeatured = useMemo(() => {
    return oassicrmmenjoiirhStories[2] ?? oassicrmmenjoiirhStories[0];
  }, []);

  const oassicrmmenjoiirOpenStory = (id: string) => {
    oassicrmmenjoiirNavigation.navigate('Oassicrmmenjoiirhstry', {id});
  };

  return (
    <Oassicrmmenjoiirhlayt>
      <View style={styles.oassicrmmenjoiirwrap}>
        <Text style={styles.oassicrmmenjoiirpremium}>PREMIUM READING</Text>
        <Text style={styles.oassicrmmenjoiirtitle}>OCEAN STORIES</Text>

        <Pressable
          onPress={() => oassicrmmenjoiirOpenStory(oassicrmmenjoiirFeatured.id)}
          style={styles.oassicrmmenjoiirfeaturedPress}>
          <ImageBackground
            source={oassicrmmenjoiirFeatured.image}
            style={styles.oassicrmmenjoiirfeaturedBg}
            imageStyle={styles.oassicrmmenjoiirfeaturedBgImg}>
            <LinearGradient
              colors={['#00000000', '#000000B3']}
              style={styles.oassicrmmenjoiirfeaturedFade}
            />
            <View style={styles.oassicrmmenjoiirtagPill}>
              <Text style={styles.oassicrmmenjoiirtagPillText}>
                {oassicrmmenjoiirFeatured.tag}
              </Text>
            </View>
            <View style={styles.oassicrmmenjoiirfeaturedContent}>
              <Text style={styles.oassicrmmenjoiirreadMin}>
                {`${oassicrmmenjoiirFeatured.readMin} min read`}
              </Text>
              <Text style={styles.oassicrmmenjoiirfeaturedTitle}>
                {oassicrmmenjoiirFeatured.title}
              </Text>
              <Text
                style={styles.oassicrmmenjoiirfeaturedTagline}
                numberOfLines={2}>
                {oassicrmmenjoiirFeatured.tagline}
              </Text>
            </View>
          </ImageBackground>
        </Pressable>

        <View style={styles.oassicrmmenjoiirsectionRow}>
          <Text style={styles.oassicrmmenjoiirsectionTitle}>ALL STORIES</Text>
          <View style={styles.oassicrmmenjoiirsectionLine} />
        </View>

        <View style={styles.oassicrmmenjoiirlist}>
          {oassicrmmenjoiirhStories.map(story => {
            const saved = oassicrmmenjoiirhIsStorySaved(story.id);
            return (
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
                    <View style={styles.oassicrmmenjoiircardTopRow}>
                      <View style={styles.oassicrmmenjoiircardTagPill}>
                        <Text style={styles.oassicrmmenjoiircardTagText}>
                          {story.tag}
                        </Text>
                      </View>

                      <Pressable
                        onPress={() =>
                          oassicrmmenjoiirhToggleStorySaved(story.id)
                        }
                        hitSlop={10}
                        style={styles.oassicrmmenjoiirsaveIconBtn}>
                        <Image
                          source={
                            saved
                              ? require('../../assets/i/ossdrmeexplsvvd.png')
                              : require('../../assets/i/ossdrmeexplsvv.png')
                          }
                        />
                      </Pressable>
                    </View>

                    <Text style={styles.oassicrmmenjoiircardTitle}>
                      {story.title}
                    </Text>
                    <Text
                      style={styles.oassicrmmenjoiircardTagline}
                      numberOfLines={2}>
                      {story.tagline}
                    </Text>
                    <Text style={styles.oassicrmmenjoiircardReadMin}>
                      {`${story.readMin} min read`}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhstries;

const styles = StyleSheet.create({
  oassicrmmenjoiirsectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 10,
  },

  oassicrmmenjoiirsectionTitle: {
    color: '#00D4FF',
    fontSize: 10,
    letterSpacing: 2,
  },
  oassicrmmenjoiirsectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00D4FF26',
  },

  oassicrmmenjoiirwrap: {
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },
  oassicrmmenjoiirpremium: {color: '#00D4FF', fontSize: 10, letterSpacing: 2},
  oassicrmmenjoiirtitle: {
    color: '#E7F7FF',
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 14,
    marginTop: 2,
  },

  oassicrmmenjoiirfeaturedPress: {
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  oassicrmmenjoiirfeaturedBg: {height: 170, width: '100%'},
  oassicrmmenjoiirfeaturedBgImg: {borderRadius: 18},
  oassicrmmenjoiirfeaturedFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 110,
  },
  oassicrmmenjoiirfeaturedContent: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 12,
  },
  oassicrmmenjoiirtagPill: {
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
  oassicrmmenjoiirtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },
  oassicrmmenjoiirreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 4},
  oassicrmmenjoiirfeaturedTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 6,
  },
  oassicrmmenjoiirfeaturedTagline: {
    color: '#FFFFFFB3',
    fontSize: 12,
    lineHeight: 16,
  },

  oassicrmmenjoiirlist: {gap: 12, paddingBottom: 12},
  oassicrmmenjoiircard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    overflow: 'hidden',
  },
  oassicrmmenjoiircardInner: {flexDirection: 'row', padding: 12, gap: 12},
  oassicrmmenjoiirthumb: {width: 86, height: 86},
  oassicrmmenjoiirthumbImg: {borderRadius: 14},

  oassicrmmenjoiircardBody: {flex: 1},

  oassicrmmenjoiircardTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  oassicrmmenjoiircardTagPill: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  oassicrmmenjoiircardTagText: {
    color: '#00D4FF',
    fontSize: 10,
  },
  oassicrmmenjoiirsaveIconBtn: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirsaveIcon: {color: '#00D4FF', fontSize: 14},

  oassicrmmenjoiircardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  oassicrmmenjoiircardTagline: {
    color: '#BEEBFFB3',
    fontSize: 11,
    lineHeight: 15,
  },
  oassicrmmenjoiircardReadMin: {color: '#7BAFC4', fontSize: 11, marginTop: 8},
});
