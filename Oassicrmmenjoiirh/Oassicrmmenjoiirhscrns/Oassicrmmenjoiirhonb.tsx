import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';

import React, {useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

type OassicrmmenjoiirhOnbStep = {
  id: string;
  bg: ImageSourcePropType;
  pill: string;
  title: string;
  subtitle: string;
  cta: string;
};

const Oassicrmmenjoiirhonb = () => {
  const oassicrmmenjoiirNavigation = useNavigation<any>();
  const [oassicrmmenjoiirStep, setOassicrmmenjoiirStep] = useState(0);

  const oassicrmmenjoiirSteps: OassicrmmenjoiirhOnbStep[] = useMemo(
    () => [
      {
        id: 'welcome',
        bg: require('../../assets/i/ossdrmeexplrbecloadbg.png'),
        pill: 'WELCOME',
        title: Platform.OS === 'ios' ? 'DISCOVER HIDDEN SHORES' : 'OASIS SHORE',
        subtitle:
          'Explore curated beaches, ocean stories, and peaceful coastal places.',
        cta: 'CONTINUE',
      },

      {
        id: 'location',
        bg: require('../../assets/i/ossdrmeexplrbecloaon3.png'),
        pill: 'DISCOVER',
        title: 'LOCATION OF THE\nDAY',
        subtitle:
          'Each dawn reveals a new shore. Discover curated destinations with coordinates, stories, and thoughtful details beyond ordinary guidebooks.',
        cta: 'CONTINUE',
      },
      {
        id: 'map',
        bg: require('../../assets/i/ossdrmeexplrbecloaon2.png'),
        pill: 'EXPLORE',
        title: 'INTERACTIVE\nWORLD MAP',
        subtitle:
          'Navigate the globe’s most extraordinary coasts. Tap any marker to reveal a hidden destination.',
        cta: 'CONTINUE',
      },
      {
        id: 'stories',
        bg: require('../../assets/i/ossdrmeexplrbecloaon4.png'),
        pill: 'EXPERIENCE',
        title: 'STORIES & QUIZ',
        subtitle:
          'Dive into ocean culture, test your knowledge, and explore shores shaped by nature and history.',
        cta: 'BEGIN YOUR JOURNEY',
      },
    ],
    [],
  );

  const oassicrmmenjoiirCurrent = oassicrmmenjoiirSteps[oassicrmmenjoiirStep];

  const oassicrmmenjoiirNext = async () => {
    oassicrmmenjoiirStep === 3
      ? oassicrmmenjoiirNavigation.replace('Oassicrmmenjoiirtab' as never)
      : setOassicrmmenjoiirStep(v => v + 1);
  };

  const oassicrmmenjoiirSkip = async () => {
    oassicrmmenjoiirNavigation.replace('Oassicrmmenjoiirtab' as never);
  };

  return (
    <ImageBackground
      source={oassicrmmenjoiirCurrent.bg}
      style={styles.oassicrmmenjoiirbg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.oassicrmmenjoiirscrollContent}>
        <View style={styles.oassicrmmenjoiirsafe}>
          <View style={styles.oassicrmmenjoiirtopRow}>
            <Pressable onPress={oassicrmmenjoiirSkip} hitSlop={12}>
              <Text style={styles.oassicrmmenjoiirskip}>SKIP</Text>
            </Pressable>
          </View>

          <View style={styles.oassicrmmenjoiirlogo}>
            <Image source={require('../../assets/i/ossdrmeexplrbecllg.png')} />
          </View>

          <View style={styles.oassicrmmenjoiircontent}>
            <View style={styles.oassicrmmenjoiirpill}>
              <Text style={styles.oassicrmmenjoiirpillText}>
                {oassicrmmenjoiirCurrent.pill}
              </Text>
            </View>

            <Text style={styles.oassicrmmenjoiirtitle}>
              {oassicrmmenjoiirCurrent.title}
            </Text>
            <Text style={styles.oassicrmmenjoiirsubtitle}>
              {oassicrmmenjoiirCurrent.subtitle}
            </Text>
          </View>

          <View style={styles.oassicrmmenjoiirbottom}>
            <View style={styles.oassicrmmenjoiirdots}>
              {oassicrmmenjoiirSteps.map((s, idx) => {
                const active = idx === oassicrmmenjoiirStep;
                return (
                  <View
                    key={s.id}
                    style={[
                      styles.oassicrmmenjoiirdot,
                      active
                        ? styles.oassicrmmenjoiirdotActive
                        : styles.oassicrmmenjoiirdotIdle,
                    ]}
                  />
                );
              })}
            </View>

            <Pressable
              onPress={oassicrmmenjoiirNext}
              style={styles.oassicrmmenjoiirctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.oassicrmmenjoiircta}>
                <Text style={styles.oassicrmmenjoiirctaText}>
                  {oassicrmmenjoiirCurrent.cta}
                </Text>
                <Image
                  source={require('../../assets/i/ossdrmeexplrbecarr.png')}
                />
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Oassicrmmenjoiirhonb;

const styles = StyleSheet.create({
  oassicrmmenjoiirbg: {flex: 1},

  oassicrmmenjoiirsafe: {flex: 1, paddingBottom: 50},

  oassicrmmenjoiirlogo: {alignSelf: 'center', marginBottom: 5},
  oassicrmmenjoiirscrollContent: {flexGrow: 1},

  oassicrmmenjoiirtopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
    paddingTop: 50,
    marginBottom: 10,
  },
  oassicrmmenjoiirskip: {
    color: '#7BAFC4',
    fontSize: 14,
    fontWeight: '500',
  },

  oassicrmmenjoiircontent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  oassicrmmenjoiirpill: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#00D4FF1F',
    marginBottom: 18,
  },
  oassicrmmenjoiirpillText: {
    color: '#7DE8FF',
    letterSpacing: 2,
    fontSize: 10,
  },
  oassicrmmenjoiirtitle: {
    color: '#00D1FF',
    fontSize: 34,

    textAlign: 'center',
    fontFamily: 'Cinzel-Bold',
    marginBottom: 44,
  },
  oassicrmmenjoiirsubtitle: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    width: '80%',
    alignSelf: 'center',
    fontWeight: '400',
    marginBottom: 20,
  },

  oassicrmmenjoiirbottom: {
    paddingHorizontal: 22,
  },
  oassicrmmenjoiirdots: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6,
    marginBottom: 16,
  },
  oassicrmmenjoiirdot: {
    height: 6,
    borderRadius: 999,
  },
  oassicrmmenjoiirdotIdle: {width: 6, backgroundColor: '#FFFFFF33'},
  oassicrmmenjoiirdotActive: {width: 26, backgroundColor: '#00D4FF'},

  oassicrmmenjoiirctaPress: {borderRadius: 14, overflow: 'hidden'},
  oassicrmmenjoiircta: {
    height: 47,
    borderRadius: 14,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 9,

    shadowColor: '#00D4FF59',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  oassicrmmenjoiirctaText: {
    color: '#001018',
    fontSize: 13,
    fontWeight: '600',
  },
  oassicrmmenjoiirctaArrow: {
    color: '#001018',
    fontSize: 18,
    marginTop: -1,
  },
});
