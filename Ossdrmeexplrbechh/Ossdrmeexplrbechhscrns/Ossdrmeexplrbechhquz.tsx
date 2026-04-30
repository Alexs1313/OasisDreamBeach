import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ossdrmeexplrbechhlayt from '../Ossdrmeexplrbechhcpn/Ossdrmeexplrbechhlayt';
import {
  ossdrmeexplrbechhQuizQuestions,
  ossdrmeexplrbechhShuffle,
  type OssdrmeexplrbechhQuizOptionKey,
  type OssdrmeexplrbechhQuizQuestion,
} from '../Ossdrmeexplrbechhdata/ossdrmeexplrbechhquiz';

const Ossdrmeexplrbechhquz = () => {
  const [ossdrmeexplrbechPhase, setOssdrmeexplrbechPhase] = useState<
    'intro' | 'quiz' | 'result'
  >('intro');
  const [ossdrmeexplrbechSelected, setOssdrmeexplrbechSelected] =
    useState<OssdrmeexplrbechhQuizOptionKey | null>(null);

  const [ossdrmeexplrbechSeed, setOssdrmeexplrbechSeed] = useState(0);

  const ossdrmeexplrbechQuestions: OssdrmeexplrbechhQuizQuestion[] =
    useMemo(() => {
      const shuffled = ossdrmeexplrbechhShuffle(ossdrmeexplrbechhQuizQuestions);
      const shift = shuffled.length
        ? ossdrmeexplrbechSeed % shuffled.length
        : 0;
      const rotated = [...shuffled.slice(shift), ...shuffled.slice(0, shift)];
      return rotated.slice(0, 5);
    }, [ossdrmeexplrbechSeed]);

  const [ossdrmeexplrbechIndex, setOssdrmeexplrbechIndex] = useState(0);
  const [ossdrmeexplrbechAnswers, setOssdrmeexplrbechAnswers] = useState<
    Record<string, OssdrmeexplrbechhQuizOptionKey>
  >({});

  const ossdrmeexplrbechCurrent =
    ossdrmeexplrbechQuestions[ossdrmeexplrbechIndex];

  const ossdrmeexplrbechScore = useMemo(() => {
    let ok = 0;
    for (const q of ossdrmeexplrbechQuestions) {
      const a = ossdrmeexplrbechAnswers[q.id];
      if (a && a === q.answer) {
        ok += 1;
      }
    }
    return ok;
  }, [ossdrmeexplrbechAnswers, ossdrmeexplrbechQuestions]);

  const ossdrmeexplrbechAccuracy = useMemo(() => {
    return Math.round(
      (ossdrmeexplrbechScore / ossdrmeexplrbechQuestions.length) * 100,
    );
  }, [ossdrmeexplrbechScore, ossdrmeexplrbechQuestions.length]);

  const ossdrmeexplrbechStart = () => {
    setOssdrmeexplrbechPhase('quiz');
    setOssdrmeexplrbechIndex(0);
    setOssdrmeexplrbechSelected(null);
    setOssdrmeexplrbechAnswers({});
  };

  const ossdrmeexplrbechTryAgain = () => {
    setOssdrmeexplrbechSeed(v => v + 1);
    setOssdrmeexplrbechPhase('intro');
    setOssdrmeexplrbechIndex(0);
    setOssdrmeexplrbechSelected(null);
    setOssdrmeexplrbechAnswers({});
  };

  const ossdrmeexplrbechSelect = (key: OssdrmeexplrbechhQuizOptionKey) => {
    if (ossdrmeexplrbechSelected) {
      return;
    }
    setOssdrmeexplrbechSelected(key);
    setOssdrmeexplrbechAnswers(prev => ({
      ...prev,
      [ossdrmeexplrbechCurrent.id]: key,
    }));
  };

  const ossdrmeexplrbechNext = () => {
    if (!ossdrmeexplrbechSelected) {
      return;
    }
    if (ossdrmeexplrbechIndex >= ossdrmeexplrbechQuestions.length - 1) {
      setOssdrmeexplrbechPhase('result');
      return;
    }
    setOssdrmeexplrbechIndex(v => v + 1);
    setOssdrmeexplrbechSelected(null);
  };

  const ossdrmeexplrbechProgress = useMemo(() => {
    const done = Math.min(
      ossdrmeexplrbechIndex + 1,
      ossdrmeexplrbechQuestions.length,
    );
    return done / ossdrmeexplrbechQuestions.length;
  }, [ossdrmeexplrbechIndex, ossdrmeexplrbechQuestions.length]);

  const ossdrmeexplrbechLevel = useMemo(() => {
    if (ossdrmeexplrbechAccuracy >= 90) {
      return 'EXPERT';
    }
    if (ossdrmeexplrbechAccuracy >= 70) {
      return 'COASTAL EXPLORER';
    }
    if (ossdrmeexplrbechAccuracy >= 50) {
      return 'SEA SEEKER';
    }
    return 'NEW VOYAGER';
  }, [ossdrmeexplrbechAccuracy]);

  const ossdrmeexplrbechGetOptionStyle = (
    key: OssdrmeexplrbechhQuizOptionKey,
  ) => {
    if (!ossdrmeexplrbechSelected) {
      return styles.ossdrmeexplrbechoptIdle;
    }
    const correct = key === ossdrmeexplrbechCurrent.answer;
    const chosen = key === ossdrmeexplrbechSelected;
    if (correct) {
      return styles.ossdrmeexplrbechoptRight;
    }
    if (chosen && !correct) {
      return styles.ossdrmeexplrbechoptWrong;
    }
    return styles.ossdrmeexplrbechoptIdle;
  };

  return (
    <Ossdrmeexplrbechhlayt>
      <View style={styles.ossdrmeexplrbechwrap}>
        {ossdrmeexplrbechPhase === 'intro' ? (
          <View style={styles.ossdrmeexplrbechintro}>
            <View style={styles.ossdrmeexplrbechintroHeader}>
              <Text style={styles.ossdrmeexplrbechintroKicker}>
                TEST YOURSELF
              </Text>
              <Text style={styles.ossdrmeexplrbechintroTitle}>OCEAN QUIZ</Text>
            </View>

            <View style={styles.ossdrmeexplrbechrings}>
              <Image source={require('../../assets/i/ossdrmeexpsaqintr.png')} />
            </View>

            <View style={styles.ossdrmeexplrbechmetaRow}>
              <View style={styles.ossdrmeexplrbechmetaPill}>
                <Text style={styles.ossdrmeexplrbechmetaMain}>5</Text>
                <Text style={styles.ossdrmeexplrbechmetaSub}>Questions</Text>
              </View>
              <View style={styles.ossdrmeexplrbechmetaPill}>
                <Text style={styles.ossdrmeexplrbechmetaMain}>OCEAN</Text>
                <Text style={styles.ossdrmeexplrbechmetaSub}>Topic</Text>
              </View>
              <View style={styles.ossdrmeexplrbechmetaPill}>
                <Text style={styles.ossdrmeexplrbechmetaMain}>EXPERT</Text>
                <Text style={styles.ossdrmeexplrbechmetaSub}>Level</Text>
              </View>
            </View>

            <Text style={styles.ossdrmeexplrbechintroDesc}>
              Five questions on the world&apos;s most extraordinary beaches and
              ocean phenomena. Each answer reveals a secret of the sea.
            </Text>

            <View style={styles.ossdrmeexplrbechchips}>
              {[
                'BEACH SCIENCE',
                'MARINE LIFE',
                'OCEAN SAFETY',
                'WORLD GEOGRAPHY',
                'NATURAL PHENOMENA',
              ].map(c => (
                <View key={c} style={styles.ossdrmeexplrbechchip}>
                  <Text style={styles.ossdrmeexplrbechchipText}>{c}</Text>
                </View>
              ))}
            </View>

            <View style={styles.ossdrmeexplrbechintroBottom}>
              <Pressable
                onPress={ossdrmeexplrbechStart}
                style={styles.ossdrmeexplrbechctaPress}>
                <LinearGradient
                  colors={['#0099CC', '#00D4FF']}
                  style={styles.ossdrmeexplrbechcta}>
                  <Image
                    source={require('../../assets/i/ossdrmeexpsaqstr.png')}
                  />
                  <Text style={styles.ossdrmeexplrbechctaText}>
                    BEGIN QUEST
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        {ossdrmeexplrbechPhase === 'quiz' && ossdrmeexplrbechCurrent ? (
          <View style={styles.ossdrmeexplrbechquiz}>
            <View style={styles.ossdrmeexplrbechprogressTop}>
              <Text style={styles.ossdrmeexplrbechprogressLabel}>
                {`Question ${ossdrmeexplrbechIndex + 1} of ${
                  ossdrmeexplrbechQuestions.length
                }`}
              </Text>
              <View style={styles.ossdrmeexplrbechprogressBar}>
                <View
                  style={[
                    styles.ossdrmeexplrbechprogressFill,
                    {width: `${Math.round(ossdrmeexplrbechProgress * 100)}%`},
                  ]}
                />
              </View>
            </View>

            <View style={styles.ossdrmeexplrbechqCard}>
              <View style={styles.ossdrmeexplrbechqTag}>
                <Text style={styles.ossdrmeexplrbechqTagText}>
                  {ossdrmeexplrbechCurrent.category}
                </Text>
              </View>
              <Text style={styles.ossdrmeexplrbechqText}>
                {ossdrmeexplrbechCurrent.question}
              </Text>
            </View>

            {(['A', 'B', 'C'] as OssdrmeexplrbechhQuizOptionKey[]).map(k => (
              <Pressable
                key={k}
                onPress={() => ossdrmeexplrbechSelect(k)}
                style={[
                  styles.ossdrmeexplrbechopt,
                  ossdrmeexplrbechGetOptionStyle(k),
                ]}>
                <View style={styles.ossdrmeexplrbechoptKey}>
                  <Text style={styles.ossdrmeexplrbechoptKeyText}>{k}</Text>
                </View>
                <Text style={styles.ossdrmeexplrbechoptText}>
                  {ossdrmeexplrbechCurrent.options[k]}
                </Text>
              </Pressable>
            ))}

            <Pressable
              onPress={ossdrmeexplrbechNext}
              disabled={!ossdrmeexplrbechSelected}
              style={[
                styles.ossdrmeexplrbechctaTopSpace,
                styles.ossdrmeexplrbechctaPress,
                !ossdrmeexplrbechSelected
                  ? styles.ossdrmeexplrbechctaDisabled
                  : null,
              ]}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ossdrmeexplrbechcta}>
                <Text style={styles.ossdrmeexplrbechctaText}>
                  {ossdrmeexplrbechIndex >= ossdrmeexplrbechQuestions.length - 1
                    ? 'FINISH →'
                    : 'NEXT QUESTION →'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}

        {ossdrmeexplrbechPhase === 'result' ? (
          <View style={styles.ossdrmeexplrbechresult}>
            <View style={styles.ossdrmeexplrbechmedal}>
              <Image source={require('../../assets/i/ossdrmeexpsqzres.png')} />
            </View>
            <View style={styles.ossdrmeexplrbechlevelPill}>
              <Text style={styles.ossdrmeexplrbechlevel}>
                {ossdrmeexplrbechLevel}
              </Text>
            </View>

            <Text style={styles.ossdrmeexplrbechscore}>
              {ossdrmeexplrbechScore}
              <Text style={styles.ossdrmeexplrbechscoreSmall}>
                {`/ ${ossdrmeexplrbechQuestions.length}`}
              </Text>
            </Text>
            <Text
              style={
                styles.ossdrmeexplrbechaccuracy
              }>{`${ossdrmeexplrbechAccuracy}% accuracy`}</Text>

            <Text style={styles.ossdrmeexplrbechresultDesc}>
              Strong foundation. A few more voyages and the ocean will reveal
              everything.
            </Text>

            <View style={styles.ossdrmeexplrbechsummary}>
              <Text style={styles.ossdrmeexplrbechsummaryTitle}>
                ANSWER SUMMARY
              </Text>
              {ossdrmeexplrbechQuestions.map(q => {
                const a = ossdrmeexplrbechAnswers[q.id];
                const ok = a === q.answer;
                return (
                  <View key={q.id} style={styles.ossdrmeexplrbechsummaryRow}>
                    <View
                      style={[
                        styles.ossdrmeexplrbechsummaryDot,
                        ok
                          ? styles.ossdrmeexplrbechsummaryDotOk
                          : styles.ossdrmeexplrbechsummaryDotBad,
                      ]}>
                      <Text
                        style={[
                          styles.ossdrmeexplrbechsummaryIcon,
                          ok
                            ? styles.ossdrmeexplrbechsummaryOk
                            : styles.ossdrmeexplrbechsummaryBad,
                        ]}>
                        {ok ? '✓' : '✕'}
                      </Text>
                    </View>
                    <Text
                      style={styles.ossdrmeexplrbechsummaryText}
                      numberOfLines={1}>
                      {q.question}
                    </Text>
                  </View>
                );
              })}
            </View>

            <Pressable
              onPress={ossdrmeexplrbechTryAgain}
              style={styles.ossdrmeexplrbechctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ossdrmeexplrbechcta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpstryag.png')}
                />
                <Text style={styles.ossdrmeexplrbechctaText}>TRY AGAIN</Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Ossdrmeexplrbechhlayt>
  );
};

export default Ossdrmeexplrbechhquz;

const styles = StyleSheet.create({
  ossdrmeexplrbechsummaryTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 12,
  },
  ossdrmeexplrbechsummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  ossdrmeexplrbechwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ossdrmeexplrbechctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 18,
  },
  ossdrmeexplrbechcta: {
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  ossdrmeexplrbechctaText: {
    color: '#050D1A',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  ossdrmeexplrbechctaDisabled: {opacity: 0.6},

  ossdrmeexplrbechintro: {paddingBottom: 20, flex: 1},
  ossdrmeexplrbechintroHeader: {alignItems: 'flex-start'},
  ossdrmeexplrbechintroKicker: {
    color: '#00D4FF',
    letterSpacing: 3,
    fontSize: 10,
    textAlign: 'center',
  },
  ossdrmeexplrbechintroTitle: {
    color: '#E7F7FF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    marginTop: 4,
  },
  ossdrmeexplrbechintroDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
    paddingHorizontal: 16,
  },

  ossdrmeexplrbechrings: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 22,
  },
  ossdrmeexplrbechring3: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: '#00D4FF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechring2: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#00D4FF26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechring1: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#00D4FF55',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  ossdrmeexplrbechringQ: {color: '#00D4FF', fontSize: 18, fontWeight: '800'},

  ossdrmeexplrbechmetaRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  ossdrmeexplrbechmetaPill: {
    flex: 1,
    maxWidth: 110,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ossdrmeexplrbechmetaMain: {
    color: '#00D4FF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  ossdrmeexplrbechmetaSub: {color: '#7BAFC4', fontSize: 10, marginTop: 4},

  ossdrmeexplrbechchips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 18,
    width: '80%',
    alignSelf: 'center',
  },
  ossdrmeexplrbechchip: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  ossdrmeexplrbechchipText: {color: '#00D4FF', fontSize: 10},
  ossdrmeexplrbechintroBottom: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },

  ossdrmeexplrbechquiz: {flex: 1},
  ossdrmeexplrbechprogressTop: {marginTop: 4, marginBottom: 14},
  ossdrmeexplrbechprogressLabel: {
    color: '#7BAFC4',
    fontSize: 11,
    marginBottom: 10,
  },
  ossdrmeexplrbechprogressBar: {
    height: 4,
    backgroundColor: '#FFFFFF14',
    borderRadius: 999,
    overflow: 'hidden',
  },
  ossdrmeexplrbechprogressFill: {height: 4, backgroundColor: '#00D4FF'},

  ossdrmeexplrbechqCard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 24,
    minHeight: 125,
  },
  ossdrmeexplrbechqTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  ossdrmeexplrbechqTagText: {color: '#7DE8FF', fontSize: 10, letterSpacing: 2},
  ossdrmeexplrbechqText: {
    color: '#E7F7FF',
    fontSize: 18,
    fontFamily: 'Cinzel-Regular',
    lineHeight: 24,
  },

  ossdrmeexplrbechopt: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  ossdrmeexplrbechoptIdle: {
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
  },
  ossdrmeexplrbechoptRight: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  ossdrmeexplrbechoptWrong: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  ossdrmeexplrbechoptKey: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  ossdrmeexplrbechoptKeyText: {color: '#00D4FF', fontWeight: '800'},
  ossdrmeexplrbechoptText: {
    flex: 1,
    color: '#E8F4F8',
    fontSize: 14,
    lineHeight: 18,
  },
  ossdrmeexplrbechctaTopSpace: {marginTop: 12},

  ossdrmeexplrbechresult: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  ossdrmeexplrbechmedal: {
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ossdrmeexplrbechmedalIcon: {color: '#00D4FF', fontSize: 28},
  ossdrmeexplrbechlevel: {
    color: '#00D4FF',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 12,
  },
  ossdrmeexplrbechlevelPill: {
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 7,
  },
  ossdrmeexplrbechscore: {
    color: '#00D4FF',
    fontSize: 52,
    fontWeight: '700',
    textAlign: 'center',
  },
  ossdrmeexplrbechscoreSmall: {fontSize: 20, fontWeight: '600'},
  ossdrmeexplrbechaccuracy: {
    color: '#7BAFC4',
    textAlign: 'center',
    marginTop: 6,
  },
  ossdrmeexplrbechresultDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 18,
    paddingHorizontal: 46,
  },

  ossdrmeexplrbechsummary: {
    marginTop: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    padding: 14,
  },

  ossdrmeexplrbechsummaryDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechsummaryDotOk: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  ossdrmeexplrbechsummaryDotBad: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  ossdrmeexplrbechsummaryIcon: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 8,
  },
  ossdrmeexplrbechsummaryOk: {color: '#00C878'},
  ossdrmeexplrbechsummaryBad: {color: '#FF3B5C'},
  ossdrmeexplrbechsummaryText: {flex: 1, color: '#BEEBFFB3', fontSize: 12},
});
