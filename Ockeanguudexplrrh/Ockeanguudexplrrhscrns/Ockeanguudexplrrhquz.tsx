import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ockeanguudexplrrhlayt from '../Ockeanguudexplrrhcpn/Ockeanguudexplrrhlayt';

import {
  ockeanguudexplrrhQuizQuestions,
  ockeanguudexplrrhShuffle,
  type OckeanguudexplrrhQuizOptionKey,
  type OckeanguudexplrrhQuizQuestion,
} from '../Ockeanguudexplrrhdata/ockeanguudexplrrhquiz';

const Ockeanguudexplrrhquz = () => {
  const [ockeanguudexplrrPhase, setOckeanguudexplrrPhase] = useState<
    'intro' | 'quiz' | 'result'
  >('intro');
  const [ockeanguudexplrrSelected, setOckeanguudexplrrSelected] =
    useState<OckeanguudexplrrhQuizOptionKey | null>(null);

  const [ockeanguudexplrrSeed, setOckeanguudexplrrSeed] = useState(0);

  const ockeanguudexplrrQuestions: OckeanguudexplrrhQuizQuestion[] =
    useMemo(() => {
      const shuffled = ockeanguudexplrrhShuffle(ockeanguudexplrrhQuizQuestions);
      const shift = shuffled.length
        ? ockeanguudexplrrSeed % shuffled.length
        : 0;
      const rotated = [...shuffled.slice(shift), ...shuffled.slice(0, shift)];
      return rotated.slice(0, 5);
    }, [ockeanguudexplrrSeed]);

  const [ockeanguudexplrrIndex, setOckeanguudexplrrIndex] = useState(0);
  const [ockeanguudexplrrAnswers, setOckeanguudexplrrAnswers] = useState<
    Record<string, OckeanguudexplrrhQuizOptionKey>
  >({});

  const ockeanguudexplrrCurrent =
    ockeanguudexplrrQuestions[ockeanguudexplrrIndex];

  const ockeanguudexplrrScore = useMemo(() => {
    let ok = 0;
    for (const q of ockeanguudexplrrQuestions) {
      const a = ockeanguudexplrrAnswers[q.id];
      if (a && a === q.answer) {
        ok += 1;
      }
    }
    return ok;
  }, [ockeanguudexplrrAnswers, ockeanguudexplrrQuestions]);

  const ockeanguudexplrrAccuracy = useMemo(() => {
    return Math.round(
      (ockeanguudexplrrScore / ockeanguudexplrrQuestions.length) * 100,
    );
  }, [ockeanguudexplrrScore, ockeanguudexplrrQuestions.length]);

  const ockeanguudexplrrStart = () => {
    setOckeanguudexplrrPhase('quiz');
    setOckeanguudexplrrIndex(0);
    setOckeanguudexplrrSelected(null);
    setOckeanguudexplrrAnswers({});
  };

  const ockeanguudexplrrTryAgain = () => {
    setOckeanguudexplrrSeed(v => v + 1);
    setOckeanguudexplrrPhase('intro');
    setOckeanguudexplrrIndex(0);
    setOckeanguudexplrrSelected(null);
    setOckeanguudexplrrAnswers({});
  };

  const ockeanguudexplrrSelect = (key: OckeanguudexplrrhQuizOptionKey) => {
    if (ockeanguudexplrrSelected) {
      return;
    }
    setOckeanguudexplrrSelected(key);
    setOckeanguudexplrrAnswers(prev => ({
      ...prev,
      [ockeanguudexplrrCurrent.id]: key,
    }));
  };

  const ockeanguudexplrrNext = () => {
    if (!ockeanguudexplrrSelected) {
      return;
    }
    if (ockeanguudexplrrIndex >= ockeanguudexplrrQuestions.length - 1) {
      setOckeanguudexplrrPhase('result');
      return;
    }
    setOckeanguudexplrrIndex(v => v + 1);
    setOckeanguudexplrrSelected(null);
  };

  const ockeanguudexplrrProgress = useMemo(() => {
    const done = Math.min(
      ockeanguudexplrrIndex + 1,
      ockeanguudexplrrQuestions.length,
    );
    return done / ockeanguudexplrrQuestions.length;
  }, [ockeanguudexplrrIndex, ockeanguudexplrrQuestions.length]);

  const ockeanguudexplrrLevel = useMemo(() => {
    if (ockeanguudexplrrAccuracy >= 90) {
      return 'EXPERT';
    }
    if (ockeanguudexplrrAccuracy >= 70) {
      return 'COASTAL EXPLORER';
    }
    if (ockeanguudexplrrAccuracy >= 50) {
      return 'SEA SEEKER';
    }
    return 'NEW VOYAGER';
  }, [ockeanguudexplrrAccuracy]);

  const ockeanguudexplrrGetOptionStyle = (
    key: OckeanguudexplrrhQuizOptionKey,
  ) => {
    if (!ockeanguudexplrrSelected) {
      return styles.ockeanguudexplrroptIdle;
    }
    const correct = key === ockeanguudexplrrCurrent.answer;
    const chosen = key === ockeanguudexplrrSelected;
    if (correct) {
      return styles.ockeanguudexplrroptRight;
    }
    if (chosen && !correct) {
      return styles.ockeanguudexplrroptWrong;
    }
    return styles.ockeanguudexplrroptIdle;
  };

  return (
    <Ockeanguudexplrrhlayt>
      <View style={styles.ockeanguudexplrrwrap}>
        {ockeanguudexplrrPhase === 'intro' ? (
          <View style={styles.ockeanguudexplrrintro}>
            <View style={styles.ockeanguudexplrrintroHeader}>
              <Text style={styles.ockeanguudexplrrintroKicker}>
                TEST YOURSELF
              </Text>
              <Text style={styles.ockeanguudexplrrintroTitle}>OCEAN QUIZ</Text>
            </View>

            <View style={styles.ockeanguudexplrrrings}>
              <Image source={require('../../assets/i/ossdrmeexpsaqintr.png')} />
            </View>

            <View style={styles.ockeanguudexplrrmetaRow}>
              <View style={styles.ockeanguudexplrrmetaPill}>
                <Text style={styles.ockeanguudexplrrmetaMain}>5</Text>
                <Text style={styles.ockeanguudexplrrmetaSub}>Questions</Text>
              </View>
              <View style={styles.ockeanguudexplrrmetaPill}>
                <Text style={styles.ockeanguudexplrrmetaMain}>OCEAN</Text>
                <Text style={styles.ockeanguudexplrrmetaSub}>Topic</Text>
              </View>
              <View style={styles.ockeanguudexplrrmetaPill}>
                <Text style={styles.ockeanguudexplrrmetaMain}>EXPERT</Text>
                <Text style={styles.ockeanguudexplrrmetaSub}>Level</Text>
              </View>
            </View>

            <Text style={styles.ockeanguudexplrrintroDesc}>
              Five questions on the world&apos;s most extraordinary beaches and
              ocean phenomena. Each answer reveals a secret of the sea.
            </Text>

            <View style={styles.ockeanguudexplrrchips}>
              {[
                'BEACH SCIENCE',
                'MARINE LIFE',
                'OCEAN SAFETY',
                'WORLD GEOGRAPHY',
                'NATURAL PHENOMENA',
              ].map(c => (
                <View key={c} style={styles.ockeanguudexplrrchip}>
                  <Text style={styles.ockeanguudexplrrchipText}>{c}</Text>
                </View>
              ))}
            </View>

            <View style={styles.ockeanguudexplrrintroBottom}>
              <Pressable
                onPress={ockeanguudexplrrStart}
                style={styles.ockeanguudexplrrctaPress}>
                <LinearGradient
                  colors={['#0099CC', '#00D4FF']}
                  style={styles.ockeanguudexplrrcta}>
                  <Image
                    source={require('../../assets/i/ossdrmeexpsaqstr.png')}
                  />
                  <Text style={styles.ockeanguudexplrrctaText}>
                    BEGIN QUEST
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        {ockeanguudexplrrPhase === 'quiz' && ockeanguudexplrrCurrent ? (
          <View style={styles.ockeanguudexplrrquiz}>
            <View style={styles.ockeanguudexplrrprogressTop}>
              <Text style={styles.ockeanguudexplrrprogressLabel}>
                {`Question ${ockeanguudexplrrIndex + 1} of ${
                  ockeanguudexplrrQuestions.length
                }`}
              </Text>
              <View style={styles.ockeanguudexplrrprogressBar}>
                <View
                  style={[
                    styles.ockeanguudexplrrprogressFill,
                    {width: `${Math.round(ockeanguudexplrrProgress * 100)}%`},
                  ]}
                />
              </View>
            </View>

            <View style={styles.ockeanguudexplrrqCard}>
              <View style={styles.ockeanguudexplrrqTag}>
                <Text style={styles.ockeanguudexplrrqTagText}>
                  {ockeanguudexplrrCurrent.category}
                </Text>
              </View>
              <Text style={styles.ockeanguudexplrrqText}>
                {ockeanguudexplrrCurrent.question}
              </Text>
            </View>

            {(['A', 'B', 'C'] as OckeanguudexplrrhQuizOptionKey[]).map(k => (
              <Pressable
                key={k}
                onPress={() => ockeanguudexplrrSelect(k)}
                style={[
                  styles.ockeanguudexplrropt,
                  ockeanguudexplrrGetOptionStyle(k),
                ]}>
                <View style={styles.ockeanguudexplrroptKey}>
                  <Text style={styles.ockeanguudexplrroptKeyText}>{k}</Text>
                </View>
                <Text style={styles.ockeanguudexplrroptText}>
                  {ockeanguudexplrrCurrent.options[k]}
                </Text>
              </Pressable>
            ))}

            <Pressable
              onPress={ockeanguudexplrrNext}
              disabled={!ockeanguudexplrrSelected}
              style={[
                styles.ockeanguudexplrrctaTopSpace,
                styles.ockeanguudexplrrctaPress,
                !ockeanguudexplrrSelected
                  ? styles.ockeanguudexplrrctaDisabled
                  : null,
              ]}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ockeanguudexplrrcta}>
                <Text style={styles.ockeanguudexplrrctaText}>
                  {ockeanguudexplrrIndex >= ockeanguudexplrrQuestions.length - 1
                    ? 'FINISH →'
                    : 'NEXT QUESTION →'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}

        {ockeanguudexplrrPhase === 'result' ? (
          <View style={styles.ockeanguudexplrrresult}>
            <View style={styles.ockeanguudexplrrmedal}>
              <Image source={require('../../assets/i/ossdrmeexpsqzres.png')} />
            </View>
            <View style={styles.ockeanguudexplrrlevelPill}>
              <Text style={styles.ockeanguudexplrrlevel}>
                {ockeanguudexplrrLevel}
              </Text>
            </View>

            <Text style={styles.ockeanguudexplrrscore}>
              {ockeanguudexplrrScore}
              <Text style={styles.ockeanguudexplrrscoreSmall}>
                {`/ ${ockeanguudexplrrQuestions.length}`}
              </Text>
            </Text>
            <Text
              style={
                styles.ockeanguudexplrraccuracy
              }>{`${ockeanguudexplrrAccuracy}% accuracy`}</Text>

            <Text style={styles.ockeanguudexplrrresultDesc}>
              Strong foundation. A few more voyages and the ocean will reveal
              everything.
            </Text>

            <View style={styles.ockeanguudexplrrsummary}>
              <Text style={styles.ockeanguudexplrrsummaryTitle}>
                ANSWER SUMMARY
              </Text>
              {ockeanguudexplrrQuestions.map(q => {
                const a = ockeanguudexplrrAnswers[q.id];
                const ok = a === q.answer;
                return (
                  <View key={q.id} style={styles.ockeanguudexplrrsummaryRow}>
                    <View
                      style={[
                        styles.ockeanguudexplrrsummaryDot,
                        ok
                          ? styles.ockeanguudexplrrsummaryDotOk
                          : styles.ockeanguudexplrrsummaryDotBad,
                      ]}>
                      <Text
                        style={[
                          styles.ockeanguudexplrrsummaryIcon,
                          ok
                            ? styles.ockeanguudexplrrsummaryOk
                            : styles.ockeanguudexplrrsummaryBad,
                        ]}>
                        {ok ? '✓' : '✕'}
                      </Text>
                    </View>
                    <Text
                      style={styles.ockeanguudexplrrsummaryText}
                      numberOfLines={1}>
                      {q.question}
                    </Text>
                  </View>
                );
              })}
            </View>

            <Pressable
              onPress={ockeanguudexplrrTryAgain}
              style={styles.ockeanguudexplrrctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.ockeanguudexplrrcta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpstryag.png')}
                />
                <Text style={styles.ockeanguudexplrrctaText}>TRY AGAIN</Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Ockeanguudexplrrhlayt>
  );
};

export default Ockeanguudexplrrhquz;

const styles = StyleSheet.create({
  ockeanguudexplrrsummaryTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 12,
  },
  ockeanguudexplrrsummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  ockeanguudexplrrwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  ockeanguudexplrrctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 18,
  },

  ockeanguudexplrrcta: {
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  ockeanguudexplrrctaText: {
    color: '#050D1A',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  ockeanguudexplrrctaDisabled: {opacity: 0.6},

  ockeanguudexplrrintro: {paddingBottom: 20, flex: 1},
  ockeanguudexplrrintroHeader: {alignItems: 'flex-start'},
  ockeanguudexplrrintroKicker: {
    color: '#00D4FF',
    letterSpacing: 3,
    fontSize: 10,
    textAlign: 'center',
  },
  ockeanguudexplrrintroTitle: {
    color: '#E7F7FF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    marginTop: 4,
  },
  ockeanguudexplrrintroDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
    paddingHorizontal: 16,
  },

  ockeanguudexplrrrings: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 22,
  },
  ockeanguudexplrrring3: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: '#00D4FF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrring2: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#00D4FF26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrring1: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#00D4FF55',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  ockeanguudexplrrringQ: {color: '#00D4FF', fontSize: 18, fontWeight: '800'},

  ockeanguudexplrrmetaRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  ockeanguudexplrrmetaPill: {
    flex: 1,
    maxWidth: 110,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ockeanguudexplrrmetaMain: {
    color: '#00D4FF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  ockeanguudexplrrmetaSub: {color: '#7BAFC4', fontSize: 10, marginTop: 4},

  ockeanguudexplrrchips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 18,
    width: '80%',
    alignSelf: 'center',
  },
  ockeanguudexplrrchip: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  ockeanguudexplrrchipText: {color: '#00D4FF', fontSize: 10},
  ockeanguudexplrrintroBottom: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },

  ockeanguudexplrrquiz: {flex: 1},
  ockeanguudexplrrprogressTop: {marginTop: 4, marginBottom: 14},
  ockeanguudexplrrprogressLabel: {
    color: '#7BAFC4',
    fontSize: 11,
    marginBottom: 10,
  },
  ockeanguudexplrrprogressBar: {
    height: 4,
    backgroundColor: '#FFFFFF14',
    borderRadius: 999,
    overflow: 'hidden',
  },
  ockeanguudexplrrprogressFill: {height: 4, backgroundColor: '#00D4FF'},

  ockeanguudexplrrqCard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 24,
    minHeight: 125,
  },
  ockeanguudexplrrqTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  ockeanguudexplrrqTagText: {color: '#7DE8FF', fontSize: 10, letterSpacing: 2},
  ockeanguudexplrrqText: {
    color: '#E7F7FF',
    fontSize: 18,
    fontFamily: 'Cinzel-Regular',
    lineHeight: 24,
  },

  ockeanguudexplrropt: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  ockeanguudexplrroptIdle: {
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
  },
  ockeanguudexplrroptRight: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  ockeanguudexplrroptWrong: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  ockeanguudexplrroptKey: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  ockeanguudexplrroptKeyText: {color: '#00D4FF', fontWeight: '800'},
  ockeanguudexplrroptText: {
    flex: 1,
    color: '#E8F4F8',
    fontSize: 14,
    lineHeight: 18,
  },
  ockeanguudexplrrctaTopSpace: {marginTop: 12},

  ockeanguudexplrrresult: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  ockeanguudexplrrmedal: {
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ockeanguudexplrrmedalIcon: {color: '#00D4FF', fontSize: 28},
  ockeanguudexplrrlevel: {
    color: '#00D4FF',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 12,
  },
  ockeanguudexplrrlevelPill: {
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
  ockeanguudexplrrscore: {
    color: '#00D4FF',
    fontSize: 52,
    fontWeight: '700',
    textAlign: 'center',
  },
  ockeanguudexplrrscoreSmall: {fontSize: 20, fontWeight: '600'},
  ockeanguudexplrraccuracy: {
    color: '#7BAFC4',
    textAlign: 'center',
    marginTop: 6,
  },
  ockeanguudexplrrresultDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 18,
    paddingHorizontal: 46,
  },

  ockeanguudexplrrsummary: {
    marginTop: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    padding: 14,
  },

  ockeanguudexplrrsummaryDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrsummaryDotOk: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  ockeanguudexplrrsummaryDotBad: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  ockeanguudexplrrsummaryIcon: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 8,
  },
  ockeanguudexplrrsummaryOk: {color: '#00C878'},
  ockeanguudexplrrsummaryBad: {color: '#FF3B5C'},
  ockeanguudexplrrsummaryText: {flex: 1, color: '#BEEBFFB3', fontSize: 12},
});
