import {useOassicrmmenjoiirhSaved} from '../Oassicrmmenjoiirhstore/Oassicrmmenjoiirhsaved';

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
  oassicrmmenjoiirhGetStoryById,
  oassicrmmenjoiirhStories,
} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhstories';

import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';

const Oassicrmmenjoiirhstry = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const oassicrmmenjoiirRoute = useRoute<any>();
  const oassicrmmenjoiirId: string =
    oassicrmmenjoiirRoute?.params?.id ?? oassicrmmenjoiirhStories[0]?.id;

  const oassicrmmenjoiirStory = useMemo(() => {
    return (
      oassicrmmenjoiirhGetStoryById(oassicrmmenjoiirId) ??
      oassicrmmenjoiirhStories[0]
    );
  }, [oassicrmmenjoiirId]);

  const {oassicrmmenjoiirhIsStorySaved, oassicrmmenjoiirhToggleStorySaved} =
    useOassicrmmenjoiirhSaved();
  const oassicrmmenjoiirSaved = oassicrmmenjoiirhIsStorySaved(
    oassicrmmenjoiirStory.id,
  );

  const oassicrmmenjoiirOnShare = async () => {
    try {
      await Share.share({
        message: `${oassicrmmenjoiirStory.title}\n\n${oassicrmmenjoiirStory.tagline}\n\n${oassicrmmenjoiirStory.body}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Oassicrmmenjoiirhlayt bounces={false}>
      <ImageBackground
        source={oassicrmmenjoiirStory.image}
        style={styles.oassicrmmenjoiirhero}
        imageStyle={styles.oassicrmmenjoiirheroImg}>
        <LinearGradient
          colors={['#00000000', '#0B0F20F2']}
          style={styles.oassicrmmenjoiirheroFade}
        />
        <View>
          <View style={styles.oassicrmmenjoiirtopRow}>
            <Pressable
              onPress={() => oassicrmmenjoiirNavigation.goBack()}
              style={styles.oassicrmmenjoiircircleBtn}>
              <Image source={require('../../assets/i/ossdrmeexpbck.png')} />
            </Pressable>
            <View style={styles.oassicrmmenjoiirtopRight}>
              <Pressable
                onPress={oassicrmmenjoiirOnShare}
                style={styles.oassicrmmenjoiircircleBtn}>
                <Image source={require('../../assets/i/ossdrmeexplshr.png')} />
              </Pressable>
              <Pressable
                onPress={() =>
                  oassicrmmenjoiirhToggleStorySaved(oassicrmmenjoiirStory.id)
                }
                style={styles.oassicrmmenjoiircircleBtn}>
                <Image
                  source={
                    oassicrmmenjoiirSaved
                      ? require('../../assets/i/ossdrmeexplsvvd.png')
                      : require('../../assets/i/ossdrmeexplsvv.png')
                  }
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.oassicrmmenjoiirtagPill}>
          <Text style={styles.oassicrmmenjoiirtagPillText}>
            {oassicrmmenjoiirStory.tag}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.oassicrmmenjoiircontent}>
        <Text style={styles.oassicrmmenjoiirreadMin}>
          {`${oassicrmmenjoiirStory.readMin} min read`}
        </Text>

        <Text style={styles.oassicrmmenjoiirtitle}>
          {oassicrmmenjoiirStory.title}
        </Text>
        <Text style={styles.oassicrmmenjoiirtagline}>
          {oassicrmmenjoiirStory.tagline}
        </Text>

        <Text style={styles.oassicrmmenjoiirbody}>
          {oassicrmmenjoiirStory.body}
        </Text>

        <Pressable
          onPress={() =>
            oassicrmmenjoiirhToggleStorySaved(oassicrmmenjoiirStory.id)
          }
          style={styles.oassicrmmenjoiirctaPress}>
          <LinearGradient
            colors={['#0099CC', '#00D4FF']}
            style={styles.oassicrmmenjoiircta}>
            <Image
              source={
                oassicrmmenjoiirSaved
                  ? require('../../assets/i/ossdrmeexpsavedloc.png')
                  : require('../../assets/i/ossdrmeexpsaveloc.png')
              }
            />
            <Text style={styles.oassicrmmenjoiirctaText}>
              {oassicrmmenjoiirSaved ? 'STORY SAVED' : 'SAVE STORY'}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhstry;

const styles = StyleSheet.create({
  oassicrmmenjoiircta: {
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    gap: 10,
  },

  oassicrmmenjoiirbg: {flex: 1, backgroundColor: '#0B0F20'},
  oassicrmmenjoiirhero: {height: 280, width: '100%'},
  oassicrmmenjoiirheroImg: {resizeMode: 'cover'},
  oassicrmmenjoiirheroFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 170,
  },

  oassicrmmenjoiirtopRow: {
    paddingHorizontal: 18,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  oassicrmmenjoiirtopRight: {flexDirection: 'row', gap: 10},

  oassicrmmenjoiircircleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#050D1AB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiircircleText: {color: '#00D4FF', fontSize: 16},

  oassicrmmenjoiircontent: {
    paddingHorizontal: 22,
    paddingBottom: 24,
    paddingTop: 14,
  },
  oassicrmmenjoiirtagPill: {
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
  oassicrmmenjoiirtagPillText: {
    color: '#FFD46A',
    letterSpacing: 2,
    fontSize: 10,
  },

  oassicrmmenjoiirreadMin: {color: '#7BAFC4', fontSize: 12, marginBottom: 10},
  oassicrmmenjoiirtitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 10,
  },

  oassicrmmenjoiirtagline: {
    color: '#00D4FF',
    fontSize: 13,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 18,
  },
  oassicrmmenjoiirbody: {color: '#E8F4F8D1', fontSize: 14, lineHeight: 26},

  oassicrmmenjoiirctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 24,
  },

  oassicrmmenjoiirctaText: {
    color: '#050D1A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
