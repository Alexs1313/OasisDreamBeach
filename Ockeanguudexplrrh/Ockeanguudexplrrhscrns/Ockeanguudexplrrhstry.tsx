import {useOckeanguudexplrrhSaved} from '../Ockeanguudexplrrhstore/Ockeanguudexplrrhsaved';

import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useMemo} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ockeanguudexplrrhGetStoryById,
  ockeanguudexplrrhStories,
} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhstories';

import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';

const Ockeanguudexplrrhstry = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const ockeanguudexplrrRoute = useRoute<any>();
  const ockeanguudexplrrId: string =
    ockeanguudexplrrRoute?.params?.id ?? ockeanguudexplrrhStories[0]?.id;

  const ockeanguudexplrrStory = useMemo(() => {
    return (
      ockeanguudexplrrhGetStoryById(ockeanguudexplrrId) ??
      ockeanguudexplrrhStories[0]
    );
  }, [ockeanguudexplrrId]);

  const {ockeanguudexplrrhIsStorySaved, ockeanguudexplrrhToggleStorySaved} =
    useOckeanguudexplrrhSaved();
  const ockeanguudexplrrSaved = ockeanguudexplrrhIsStorySaved(
    ockeanguudexplrrStory.id,
  );

  const ockeanguudexplrrOnShare = async () => {
    try {
      await Share.share({
        message: `${ockeanguudexplrrStory.title}\n\n${ockeanguudexplrrStory.tagline}\n\n${ockeanguudexplrrStory.body}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Ockeanguudexplrrhlayt bounces={false}>
      <ImageBackground
        source={ockeanguudexplrrStory.image}
        style={styles.ockeanguudexplrrhero}
        imageStyle={styles.ockeanguudexplrrheroImg}>
        <LinearGradient
          colors={['#00000000', '#0B0F20F2']}
          style={styles.ockeanguudexplrrheroFade}
        />
        <View>
          <View style={styles.ockeanguudexplrrtopRow}>
            <Pressable
              onPress={() => ockeanguudexplrrNavigation.goBack()}
              style={styles.ockeanguudexplrrcircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>
            <View style={styles.ockeanguudexplrrtopRight}>
              <Pressable
                onPress={ockeanguudexplrrOnShare}
                style={styles.ockeanguudexplrrcircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  ockeanguudexplrrhToggleStorySaved(ockeanguudexplrrStory.id)
                }
                style={styles.ockeanguudexplrrcircleBtn}>
                <Image
                  source={
                    ockeanguudexplrrSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.ockeanguudexplrrtagPill}>
          <Text style={styles.ockeanguudexplrrtagPillText}>
            {ockeanguudexplrrStory.tag}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.ockeanguudexplrrcontent}>
        <Text style={styles.ockeanguudexplrrreadMin}>
          {`${ockeanguudexplrrStory.readMin} min read`}
        </Text>

        <Text style={styles.ockeanguudexplrrtitle}>
          {ockeanguudexplrrStory.title}
        </Text>
        <Text style={styles.ockeanguudexplrrtagline}>
          {ockeanguudexplrrStory.tagline}
        </Text>

        <Text style={styles.ockeanguudexplrrbody}>
          {ockeanguudexplrrStory.body}
        </Text>

        <Pressable
          onPress={() =>
            ockeanguudexplrrhToggleStorySaved(ockeanguudexplrrStory.id)
          }
          style={styles.ockeanguudexplrrctaPress}>
          <LinearGradient
            colors={['#0099CC', '#00D4FF']}
            style={styles.ockeanguudexplrrcta}>
            <Image
              source={
                ockeanguudexplrrSaved
                  ? require('../../assets/i/ossdrmeexpsavedloc.png')
                  : require('../../assets/i/ossdrmeexpsaveloc.png')
              }
            />
            <Text style={styles.ockeanguudexplrrctaText}>
              {ockeanguudexplrrSaved ? 'STORY SAVED' : 'SAVE STORY'}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhstry;

const styles = StyleSheet.create({
  ockeanguudexplrrcta: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    gap: 10,
  },

  ockeanguudexplrrbg: {flex: 1, backgroundColor: '#0B0F20'},
  ockeanguudexplrrhero: {height: 280, width: '100%'},
  ockeanguudexplrrheroImg: {resizeMode: 'cover'},
  ockeanguudexplrrheroFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 170,
  },

  ockeanguudexplrrtopRow: {
    paddingHorizontal: 18,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ockeanguudexplrrtopRight: {flexDirection: 'row', gap: 10},

  ockeanguudexplrrcircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrcircleText: {color: '#00D4FF', fontSize: 16},

  ockeanguudexplrrcontent: {
    paddingHorizontal: 22,
    paddingBottom: 24,
    paddingTop: 14,
  },
  ockeanguudexplrrtagPill: {
    borderWidth: 1,
    borderColor: '#FFD46A40',
    backgroundColor: '#FFD46A1A',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 10,
    position: 'absolute',
    bottom: 5,
    left: 22,
  },
  ockeanguudexplrrtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },

  ockeanguudexplrrreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 10},
  ockeanguudexplrrtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 10,
  },

  ockeanguudexplrrtagline: {
    color: '#00D4FF',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 18,
  },
  ockeanguudexplrrbody: {color: '#E8F4F8D1', fontSize: 14, lineHeight: 26},

  ockeanguudexplrrctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 24,
  },

  ockeanguudexplrrctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
