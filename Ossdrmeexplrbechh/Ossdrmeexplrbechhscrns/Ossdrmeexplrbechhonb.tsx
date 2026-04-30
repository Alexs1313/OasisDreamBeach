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

type OssdrmeexplrbechhOnbStep = {
  id: string;
  bg: ImageSourcePropType;
  pill: string;
  title: string;
  subtitle: string;
  cta: string;
};

const Ossdrmeexplrbechhonb = () => {
  const ossdrmeexplrbechNavigation = useNavigation<any>();
  const [ossdrmeexplrbechStep, setOssdrmeexplrbechStep] = useState(0);

  const ossdrmeexplrbechSteps: OssdrmeexplrbechhOnbStep[] = useMemo(
    () => [
      {
        id: 'welcome',
        bg: require('../../assets/i/ossdrmeexplrbecloadbg.png'),
        pill: 'WELCOME TO',
        title: Platform.OS === 'ios' ? 'OASIS DREAM' : 'OASIS DREAM BEACH',
        subtitle:
          'Exclusive shores. Hidden worlds. Discover the ocean’s finest secrets.',
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

  const ossdrmeexplrbechCurrent = ossdrmeexplrbechSteps[ossdrmeexplrbechStep];

  const ossdrmeexplrbechNext = async () => {
    ossdrmeexplrbechStep === 3
      ? ossdrmeexplrbechNavigation.replace('Ossdrmeexplrbechtab' as never)
      : setOssdrmeexplrbechStep(v => v + 1);
  };

  const ossdrmeexplrbechSkip = async () => {
    ossdrmeexplrbechNavigation.replace('Ossdrmeexplrbechtab' as never);
  };

  return (
    <ImageBackground
      source={ossdrmeexplrbechCurrent.bg}
      style={styles.ossdrmeexplrbechbg}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ossdrmeexplrbechscrollContent}>
        <View style={styles.ossdrmeexplrbechsafe}>
          <View style={styles.ossdrmeexplrbechtopRow}>
            <Pressable onPress={ossdrmeexplrbechSkip} hitSlop={12}>
              <Text style={styles.ossdrmeexplrbechskip}>SKIP</Text>
            </Pressable>
          </View>

          <View style={styles.ossdrmeexplrbechlogo}>
            <Image source={require('../../assets/i/ossdrmeexplrbecllg.png')} />
          </View>

          <View style={styles.ossdrmeexplrbechcontent}>
            <View style={styles.ossdrmeexplrbechpill}>
              <Text style={styles.ossdrmeexplrbechpillText}>
                {ossdrmeexplrbechCurrent.pill}
              </Text>
            </View>

            <Text style={styles.ossdrmeexplrbechtitle}>
              {ossdrmeexplrbechCurrent.title}
            </Text>
            <Text style={styles.ossdrmeexplrbechsubtitle}>
              {ossdrmeexplrbechCurrent.subtitle}
            </Text>
          </View>

          <View style={styles.ossdrmeexplrbechbottom}>
            <View style={styles.ossdrmeexplrbechdots}>
              {ossdrmeexplrbechSteps.map((s, idx) => {
                const active = idx === ossdrmeexplrbechStep;
                return (
                  <View
                    key={s.id}
                    style={[
                      styles.ossdrmeexplrbechdot,
                      active
                        ? styles.ossdrmeexplrbechdotActive
                        : styles.ossdrmeexplrbechdotIdle,
                    ]}
                  />
                );
              })}
            </View>

            <Pressable
              onPress={ossdrmeexplrbechNext}
              style={styles.ossdrmeexplrbechctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ossdrmeexplrbechcta}>
                <Text style={styles.ossdrmeexplrbechctaText}>
                  {ossdrmeexplrbechCurrent.cta}
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

export default Ossdrmeexplrbechhonb;

const styles = StyleSheet.create({
  ossdrmeexplrbechbg: {flex: 1},
  ossdrmeexplrbechsafe: {flex: 1, paddingBottom: 50},
  ossdrmeexplrbechlogo: {alignSelf: 'center', marginBottom: 5},
  ossdrmeexplrbechscrollContent: {flexGrow: 1},

  ossdrmeexplrbechtopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
    paddingTop: 50,
    marginBottom: 10,
  },
  ossdrmeexplrbechskip: {
    color: '#7BAFC4',
    fontSize: 14,
    fontWeight: '500',
  },

  ossdrmeexplrbechcontent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingTop: 10,
  },
  ossdrmeexplrbechpill: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#00D4FF1F',
    marginBottom: 18,
  },
  ossdrmeexplrbechpillText: {
    color: '#7DE8FF',
    letterSpacing: 2,
    fontSize: 10,
  },
  ossdrmeexplrbechtitle: {
    color: '#00D1FF',
    fontSize: 34,

    textAlign: 'center',
    fontFamily: 'Cinzel-Bold',
    marginBottom: 44,
  },
  ossdrmeexplrbechsubtitle: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    width: '80%',
    alignSelf: 'center',
    fontWeight: '400',
    marginBottom: 20,
  },

  ossdrmeexplrbechbottom: {
    paddingHorizontal: 22,
  },
  ossdrmeexplrbechdots: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6,
    marginBottom: 16,
  },
  ossdrmeexplrbechdot: {
    height: 6,
    borderRadius: 999,
  },
  ossdrmeexplrbechdotIdle: {width: 6, backgroundColor: '#FFFFFF33'},
  ossdrmeexplrbechdotActive: {width: 26, backgroundColor: '#00D4FF'},

  ossdrmeexplrbechctaPress: {borderRadius: 14, overflow: 'hidden'},
  ossdrmeexplrbechcta: {
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
  ossdrmeexplrbechctaText: {
    color: '#001018',
    fontSize: 13,
    fontWeight: '600',
  },
  ossdrmeexplrbechctaArrow: {
    color: '#001018',
    fontSize: 18,
    marginTop: -1,
  },
});
