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

type OckeanguudexplrrhOnbStep = {
  id: string;
  bg: ImageSourcePropType;
  pill: string;
  title: string;
  subtitle: string;
  cta: string;
};

const Ockeanguudexplrrhonb = () => {
  const ockeanguudexplrrNavigation = useNavigation<any>();
  const [ockeanguudexplrrStep, setOckeanguudexplrrStep] = useState(0);

  const ockeanguudexplrrSteps: OckeanguudexplrrhOnbStep[] = useMemo(
    () => [
      {
        id: 'welcome',
        bg: require('../../assets/i/ossdrmeexplrbecloadbg.png'),
        pill: 'WELCOME TO',
        title: Platform.OS === 'ios' ? 'OASIC DREAM ENJOY' : 'OASIS SHORE',
        subtitle:
          'Curated shores. Hidden worlds. Discover the ocean’s finest secrets.',
        cta: 'CONTINUE',
      },

      {
        id: 'location',
        bg: require('../../assets/i/ossdrmeexplrbecloaon3.png'),
        pill: 'DISCOVER',
        title: 'LOCATION OF THE\nDAY',
        subtitle:
          'Each dawn reveals a new shore. Curated destinations with coordinates, stories and the secrets that guidebooks omit.',
        cta: 'CONTINUE',
      },
      {
        id: 'map',
        bg: require('../../assets/i/ossdrmeexplrbecloaon2.png'),
        pill: 'EXPLORE',
        title: 'INTERACTIVE\nWORLD MAP',
        subtitle:
          "Navigate the globe's most extraordinary coasts. Tap any marker to unlock a hidden destination.",
        cta: 'CONTINUE',
      },
      {
        id: 'stories',
        bg: require('../../assets/i/ossdrmeexplrbecloaon4.png'),
        pill: 'EXPERIENCE',
        title: 'STORIES & QUIZ',
        subtitle:
          "Deep dives into ocean culture. Test your knowledge. Explore the world's finest shores.",
        cta: 'BEGIN YOUR JOURNEY',
      },
    ],
    [],
  );

  const ockeanguudexplrrCurrent = ockeanguudexplrrSteps[ockeanguudexplrrStep];

  const ockeanguudexplrrNext = async () => {
    ockeanguudexplrrStep === 3
      ? ockeanguudexplrrNavigation.replace('Ockeanguudexplrrtab' as never)
      : setOckeanguudexplrrStep(v => v + 1);
  };

  const ockeanguudexplrrSkip = async () => {
    ockeanguudexplrrNavigation.replace('Ockeanguudexplrrtab' as never);
  };

  return (
    <ImageBackground
      source={ockeanguudexplrrCurrent.bg}
      style={styles.ockeanguudexplrrbg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ockeanguudexplrrscrollContent}>
        <View style={styles.ockeanguudexplrrsafe}>
          <View style={styles.ockeanguudexplrrtopRow}>
            <Pressable onPress={ockeanguudexplrrSkip} hitSlop={12}>
              <Text style={styles.ockeanguudexplrrskip}>SKIP</Text>
            </Pressable>
          </View>

          <View style={styles.ockeanguudexplrrlogo}>
            <Image source={require('../../assets/i/ossdrmeexplrbecllg.png')} />
          </View>

          <View style={styles.ockeanguudexplrrcontent}>
            <View style={styles.ockeanguudexplrrpill}>
              <Text style={styles.ockeanguudexplrrpillText}>
                {ockeanguudexplrrCurrent.pill}
              </Text>
            </View>

            <Text style={styles.ockeanguudexplrrtitle}>
              {ockeanguudexplrrCurrent.title}
            </Text>
            <Text style={styles.ockeanguudexplrrsubtitle}>
              {ockeanguudexplrrCurrent.subtitle}
            </Text>
          </View>

          <View style={styles.ockeanguudexplrrbottom}>
            <View style={styles.ockeanguudexplrrdots}>
              {ockeanguudexplrrSteps.map((s, idx) => {
                const active = idx === ockeanguudexplrrStep;
                return (
                  <View
                    key={s.id}
                    style={[
                      styles.ockeanguudexplrrdot,
                      active
                        ? styles.ockeanguudexplrrdotActive
                        : styles.ockeanguudexplrrdotIdle,
                    ]}
                  />
                );
              })}
            </View>

            <Pressable
              onPress={ockeanguudexplrrNext}
              style={styles.ockeanguudexplrrctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ockeanguudexplrrcta}>
                <Text style={styles.ockeanguudexplrrctaText}>
                  {ockeanguudexplrrCurrent.cta}
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

export default Ockeanguudexplrrhonb;

const styles = StyleSheet.create({
  ockeanguudexplrrbg: {flex: 1},

  ockeanguudexplrrsafe: {flex: 1, paddingBottom: 50},

  ockeanguudexplrrlogo: {alignSelf: 'center', marginBottom: 5},
  ockeanguudexplrrscrollContent: {flexGrow: 1},

  ockeanguudexplrrtopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
    paddingTop: 50,
    marginBottom: 10,
  },
  ockeanguudexplrrskip: {
    color: '#7BAFC4',
    fontSize: 14,
    fontWeight: '500',
  },

  ockeanguudexplrrcontent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  ockeanguudexplrrpill: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#00D4FF1F',
    marginBottom: 18,
  },
  ockeanguudexplrrpillText: {
    color: '#7DE8FF',
    letterSpacing: 2,
    fontSize: 10,
  },
  ockeanguudexplrrtitle: {
    color: '#00D1FF',
    fontSize: 34,

    textAlign: 'center',
    fontFamily: 'Cinzel-Bold',
    marginBottom: 44,
  },
  ockeanguudexplrrsubtitle: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    width: '80%',
    alignSelf: 'center',
    fontWeight: '400',
    marginBottom: 20,
  },

  ockeanguudexplrrbottom: {
    paddingHorizontal: 22,
  },
  ockeanguudexplrrdots: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6,
    marginBottom: 16,
  },
  ockeanguudexplrrdot: {
    height: 6,
    borderRadius: 999,
  },
  ockeanguudexplrrdotIdle: {width: 6, backgroundColor: '#FFFFFF33'},
  ockeanguudexplrrdotActive: {width: 26, backgroundColor: '#00D4FF'},

  ockeanguudexplrrctaPress: {borderRadius: 14, overflow: 'hidden'},
  ockeanguudexplrrcta: {
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
  ockeanguudexplrrctaText: {
    color: '#001018',
    fontSize: 13,
    fontWeight: '600',
  },
  ockeanguudexplrrctaArrow: {
    color: '#001018',
    fontSize: 18,
    marginTop: -1,
  },
});
