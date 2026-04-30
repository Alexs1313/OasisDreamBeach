import {useOssdrmeexplrbechhSaved} from '../Ossdrmeexplrbechhstore/Ossdrmeexplrbechhsaved';

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
  ossdrmeexplrbechhGetStoryById,
  ossdrmeexplrbechhStories,
} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhstories';
import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';

const Ossdrmeexplrbechhstry = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const ossdrmeexplrbechRoute = useRoute<any>();
  const ossdrmeexplrbechId: string =
    ossdrmeexplrbechRoute?.params?.id ?? ossdrmeexplrbechhStories[0]?.id;

  const ossdrmeexplrbechStory = useMemo(() => {
    return (
      ossdrmeexplrbechhGetStoryById(ossdrmeexplrbechId) ??
      ossdrmeexplrbechhStories[0]
    );
  }, [ossdrmeexplrbechId]);

  const {ossdrmeexplrbechhIsStorySaved, ossdrmeexplrbechhToggleStorySaved} =
    useOssdrmeexplrbechhSaved();
  const ossdrmeexplrbechSaved = ossdrmeexplrbechhIsStorySaved(
    ossdrmeexplrbechStory.id,
  );

  const ossdrmeexplrbechOnShare = async () => {
    try {
      await Share.share({
        message: `${ossdrmeexplrbechStory.title}\n\n${ossdrmeexplrbechStory.tagline}\n\n${ossdrmeexplrbechStory.body}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Ossdrmeexplrbechhlayt bounces={false}>
      <ImageBackground
        source={ossdrmeexplrbechStory.image}
        style={styles.ossdrmeexplrbechhero}
        imageStyle={styles.ossdrmeexplrbechheroImg}>
        <LinearGradient
          colors={['#00000000', '#0B0F20F2']}
          style={styles.ossdrmeexplrbechheroFade}
        />
        <View>
          <View style={styles.ossdrmeexplrbechtopRow}>
            <Pressable
              onPress={() => ossdrmeexplrbechNavigation.goBack()}
              style={styles.ossdrmeexplrbechcircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>
            <View style={styles.ossdrmeexplrbechtopRight}>
              <Pressable
                onPress={ossdrmeexplrbechOnShare}
                style={styles.ossdrmeexplrbechcircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  ossdrmeexplrbechhToggleStorySaved(ossdrmeexplrbechStory.id)
                }
                style={styles.ossdrmeexplrbechcircleBtn}>
                <Image
                  source={
                    ossdrmeexplrbechSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.ossdrmeexplrbechtagPill}>
          <Text style={styles.ossdrmeexplrbechtagPillText}>
            {ossdrmeexplrbechStory.tag}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.ossdrmeexplrbechcontent}>
        <Text style={styles.ossdrmeexplrbechreadMin}>
          {`${ossdrmeexplrbechStory.readMin} min read`}
        </Text>

        <Text style={styles.ossdrmeexplrbechtitle}>
          {ossdrmeexplrbechStory.title}
        </Text>
        <Text style={styles.ossdrmeexplrbechtagline}>
          {ossdrmeexplrbechStory.tagline}
        </Text>

        <Text style={styles.ossdrmeexplrbechbody}>
          {ossdrmeexplrbechStory.body}
        </Text>

        <Pressable
          onPress={() =>
            ossdrmeexplrbechhToggleStorySaved(ossdrmeexplrbechStory.id)
          }
          style={styles.ossdrmeexplrbechctaPress}>
          <LinearGradient
            colors={['#0099CC', '#00D4FF']}
            style={styles.ossdrmeexplrbechcta}>
            <Image
              source={
                ossdrmeexplrbechSaved
                  ? require('../../assets/i/ossdrmeexpsavedloc.png')
                  : require('../../assets/i/ossdrmeexpsaveloc.png')
              }
            />
            <Text style={styles.ossdrmeexplrbechctaText}>
              {ossdrmeexplrbechSaved ? 'STORY SAVED' : 'SAVE STORY'}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhstry;

const styles = StyleSheet.create({
  ossdrmeexplrbechcta: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    gap: 10,
  },

  ossdrmeexplrbechbg: {flex: 1, backgroundColor: '#0B0F20'},
  ossdrmeexplrbechhero: {height: 280, width: '100%'},
  ossdrmeexplrbechheroImg: {resizeMode: 'cover'},
  ossdrmeexplrbechheroFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 170,
  },

  ossdrmeexplrbechtopRow: {
    paddingHorizontal: 18,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ossdrmeexplrbechtopRight: {flexDirection: 'row', gap: 10},
  ossdrmeexplrbechcircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechcircleText: {color: '#00D4FF', fontSize: 16},

  ossdrmeexplrbechcontent: {
    paddingHorizontal: 22,
    paddingBottom: 24,
    paddingTop: 14,
  },
  ossdrmeexplrbechtagPill: {
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
  ossdrmeexplrbechtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },
  ossdrmeexplrbechreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 10},
  ossdrmeexplrbechtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 10,
  },
  ossdrmeexplrbechtagline: {
    color: '#00D4FF',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 18,
  },
  ossdrmeexplrbechbody: {color: '#E8F4F8D1', fontSize: 14, lineHeight: 26},

  ossdrmeexplrbechctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 24,
  },

  ossdrmeexplrbechctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
