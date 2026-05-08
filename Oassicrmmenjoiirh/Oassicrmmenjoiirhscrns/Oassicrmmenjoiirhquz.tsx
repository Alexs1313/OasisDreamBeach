import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Oassicrmmenjoiirhlayt from '../Oassicrmmenjoiirhcpn/Oassicrmmenjoiirhlayt';

import {
  oassicrmmenjoiirhQuizQuestions,
  oassicrmmenjoiirhShuffle,
  type OassicrmmenjoiirhQuizOptionKey,
  type OassicrmmenjoiirhQuizQuestion,
} from '../Oassicrmmenjoiirhdata/oassicrmmenjoiirhquiz';

const Oassicrmmenjoiirhquz = () => {
  const [oassicrmmenjoiirPhase, setOassicrmmenjoiirPhase] = useState<
    'intro' | 'quiz' | 'result'
  >('intro');
  const [oassicrmmenjoiirSelected, setOassicrmmenjoiirSelected] =
    useState<OassicrmmenjoiirhQuizOptionKey | null>(null);

  const [oassicrmmenjoiirSeed, setOassicrmmenjoiirSeed] = useState(0);

  const oassicrmmenjoiirQuestions: OassicrmmenjoiirhQuizQuestion[] =
    useMemo(() => {
      const shuffled = oassicrmmenjoiirhShuffle(oassicrmmenjoiirhQuizQuestions);
      const shift = shuffled.length
        ? oassicrmmenjoiirSeed % shuffled.length
        : 0;
      const rotated = [...shuffled.slice(shift), ...shuffled.slice(0, shift)];
      return rotated.slice(0, 5);
    }, [oassicrmmenjoiirSeed]);

  const [oassicrmmenjoiirIndex, setOassicrmmenjoiirIndex] = useState(0);
  const [oassicrmmenjoiirAnswers, setOassicrmmenjoiirAnswers] = useState<
    Record<string, OassicrmmenjoiirhQuizOptionKey>
  >({});

  const oassicrmmenjoiirCurrent =
    oassicrmmenjoiirQuestions[oassicrmmenjoiirIndex];

  const oassicrmmenjoiirScore = useMemo(() => {
    let ok = 0;
    for (const q of oassicrmmenjoiirQuestions) {
      const a = oassicrmmenjoiirAnswers[q.id];
      if (a && a === q.answer) {
        ok += 1;
      }
    }
    return ok;
  }, [oassicrmmenjoiirAnswers, oassicrmmenjoiirQuestions]);

  const oassicrmmenjoiirAccuracy = useMemo(() => {
    return Math.round(
      (oassicrmmenjoiirScore / oassicrmmenjoiirQuestions.length) * 100,
    );
  }, [oassicrmmenjoiirScore, oassicrmmenjoiirQuestions.length]);

  const oassicrmmenjoiirStart = () => {
    setOassicrmmenjoiirPhase('quiz');
    setOassicrmmenjoiirIndex(0);
    setOassicrmmenjoiirSelected(null);
    setOassicrmmenjoiirAnswers({});
  };

  const oassicrmmenjoiirTryAgain = () => {
    setOassicrmmenjoiirSeed(v => v + 1);
    setOassicrmmenjoiirPhase('intro');
    setOassicrmmenjoiirIndex(0);
    setOassicrmmenjoiirSelected(null);
    setOassicrmmenjoiirAnswers({});
  };

  const oassicrmmenjoiirSelect = (key: OassicrmmenjoiirhQuizOptionKey) => {
    if (oassicrmmenjoiirSelected) {
      return;
    }
    setOassicrmmenjoiirSelected(key);
    setOassicrmmenjoiirAnswers(prev => ({
      ...prev,
      [oassicrmmenjoiirCurrent.id]: key,
    }));
  };

  const oassicrmmenjoiirNext = () => {
    if (!oassicrmmenjoiirSelected) {
      return;
    }
    if (oassicrmmenjoiirIndex >= oassicrmmenjoiirQuestions.length - 1) {
      setOassicrmmenjoiirPhase('result');
      return;
    }
    setOassicrmmenjoiirIndex(v => v + 1);
    setOassicrmmenjoiirSelected(null);
  };

  const oassicrmmenjoiirProgress = useMemo(() => {
    const done = Math.min(
      oassicrmmenjoiirIndex + 1,
      oassicrmmenjoiirQuestions.length,
    );
    return done / oassicrmmenjoiirQuestions.length;
  }, [oassicrmmenjoiirIndex, oassicrmmenjoiirQuestions.length]);

  const oassicrmmenjoiirLevel = useMemo(() => {
    if (oassicrmmenjoiirAccuracy >= 90) {
      return 'EXPERT';
    }
    if (oassicrmmenjoiirAccuracy >= 70) {
      return 'COASTAL EXPLORER';
    }
    if (oassicrmmenjoiirAccuracy >= 50) {
      return 'SEA SEEKER';
    }
    return 'NEW VOYAGER';
  }, [oassicrmmenjoiirAccuracy]);

  const oassicrmmenjoiirGetOptionStyle = (
    key: OassicrmmenjoiirhQuizOptionKey,
  ) => {
    if (!oassicrmmenjoiirSelected) {
      return styles.oassicrmmenjoiiroptIdle;
    }
    const correct = key === oassicrmmenjoiirCurrent.answer;
    const chosen = key === oassicrmmenjoiirSelected;
    if (correct) {
      return styles.oassicrmmenjoiiroptRight;
    }
    if (chosen && !correct) {
      return styles.oassicrmmenjoiiroptWrong;
    }
    return styles.oassicrmmenjoiiroptIdle;
  };

  return (
    <Oassicrmmenjoiirhlayt>
      <View style={styles.oassicrmmenjoiirwrap}>
        {oassicrmmenjoiirPhase === 'intro' ? (
          <View style={styles.oassicrmmenjoiirintro}>
            <View style={styles.oassicrmmenjoiirintroHeader}>
              <Text style={styles.oassicrmmenjoiirintroKicker}>
                TEST YOURSELF
              </Text>
              <Text style={styles.oassicrmmenjoiirintroTitle}>OCEAN QUIZ</Text>
            </View>

            <View style={styles.oassicrmmenjoiirrings}>
              <Image source={require('../../assets/i/ossdrmeexpsaqintr.png')} />
            </View>

            <View style={styles.oassicrmmenjoiirmetaRow}>
              <View style={styles.oassicrmmenjoiirmetaPill}>
                <Text style={styles.oassicrmmenjoiirmetaMain}>5</Text>
                <Text style={styles.oassicrmmenjoiirmetaSub}>Questions</Text>
              </View>
              <View style={styles.oassicrmmenjoiirmetaPill}>
                <Text style={styles.oassicrmmenjoiirmetaMain}>OCEAN</Text>
                <Text style={styles.oassicrmmenjoiirmetaSub}>Topic</Text>
              </View>
              <View style={styles.oassicrmmenjoiirmetaPill}>
                <Text style={styles.oassicrmmenjoiirmetaMain}>EXPERT</Text>
                <Text style={styles.oassicrmmenjoiirmetaSub}>Level</Text>
              </View>
            </View>

            <Text style={styles.oassicrmmenjoiirintroDesc}>
              Five questions on the world&apos;s most extraordinary beaches and
              ocean phenomena. Each answer reveals a secret of the sea.
            </Text>

            <View style={styles.oassicrmmenjoiirchips}>
              {[
                'BEACH SCIENCE',
                'MARINE LIFE',
                'OCEAN SAFETY',
                'WORLD GEOGRAPHY',
                'NATURAL PHENOMENA',
              ].map(c => (
                <View key={c} style={styles.oassicrmmenjoiirchip}>
                  <Text style={styles.oassicrmmenjoiirchipText}>{c}</Text>
                </View>
              ))}
            </View>

            <View style={styles.oassicrmmenjoiirintroBottom}>
              <Pressable
                onPress={oassicrmmenjoiirStart}
                style={styles.oassicrmmenjoiirctaPress}>
                <LinearGradient
                  colors={['#0099CC', '#00D4FF']}
                  style={styles.oassicrmmenjoiircta}>
                  <Image
                    source={require('../../assets/i/ossdrmeexpsaqstr.png')}
                  />
                  <Text style={styles.oassicrmmenjoiirctaText}>
                    BEGIN QUEST
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        {oassicrmmenjoiirPhase === 'quiz' && oassicrmmenjoiirCurrent ? (
          <View style={styles.oassicrmmenjoiirquiz}>
            <View style={styles.oassicrmmenjoiirprogressTop}>
              <Text style={styles.oassicrmmenjoiirprogressLabel}>
                {`Question ${oassicrmmenjoiirIndex + 1} of ${
                  oassicrmmenjoiirQuestions.length
                }`}
              </Text>
              <View style={styles.oassicrmmenjoiirprogressBar}>
                <View
                  style={[
                    styles.oassicrmmenjoiirprogressFill,
                    {width: `${Math.round(oassicrmmenjoiirProgress * 100)}%`},
                  ]}
                />
              </View>
            </View>

            <View style={styles.oassicrmmenjoiirqCard}>
              <View style={styles.oassicrmmenjoiirqTag}>
                <Text style={styles.oassicrmmenjoiirqTagText}>
                  {oassicrmmenjoiirCurrent.category}
                </Text>
              </View>
              <Text style={styles.oassicrmmenjoiirqText}>
                {oassicrmmenjoiirCurrent.question}
              </Text>
            </View>

            {(['A', 'B', 'C'] as OassicrmmenjoiirhQuizOptionKey[]).map(k => (
              <Pressable
                key={k}
                onPress={() => oassicrmmenjoiirSelect(k)}
                style={[
                  styles.oassicrmmenjoiiropt,
                  oassicrmmenjoiirGetOptionStyle(k),
                ]}>
                <View style={styles.oassicrmmenjoiiroptKey}>
                  <Text style={styles.oassicrmmenjoiiroptKeyText}>{k}</Text>
                </View>
                <Text style={styles.oassicrmmenjoiiroptText}>
                  {oassicrmmenjoiirCurrent.options[k]}
                </Text>
              </Pressable>
            ))}

            <Pressable
              onPress={oassicrmmenjoiirNext}
              disabled={!oassicrmmenjoiirSelected}
              style={[
                styles.oassicrmmenjoiirctaTopSpace,
                styles.oassicrmmenjoiirctaPress,
                !oassicrmmenjoiirSelected
                  ? styles.oassicrmmenjoiirctaDisabled
                  : null,
              ]}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.oassicrmmenjoiircta}>
                <Text style={styles.oassicrmmenjoiirctaText}>
                  {oassicrmmenjoiirIndex >= oassicrmmenjoiirQuestions.length - 1
                    ? 'FINISH →'
                    : 'NEXT QUESTION →'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}

        {oassicrmmenjoiirPhase === 'result' ? (
          <View style={styles.oassicrmmenjoiirresult}>
            <View style={styles.oassicrmmenjoiirmedal}>
              <Image source={require('../../assets/i/ossdrmeexpsqzres.png')} />
            </View>
            <View style={styles.oassicrmmenjoiirlevelPill}>
              <Text style={styles.oassicrmmenjoiirlevel}>
                {oassicrmmenjoiirLevel}
              </Text>
            </View>

            <Text style={styles.oassicrmmenjoiirscore}>
              {oassicrmmenjoiirScore}
              <Text style={styles.oassicrmmenjoiirscoreSmall}>
                {`/ ${oassicrmmenjoiirQuestions.length}`}
              </Text>
            </Text>
            <Text
              style={
                styles.oassicrmmenjoiiraccuracy
              }>{`${oassicrmmenjoiirAccuracy}% accuracy`}</Text>

            <Text style={styles.oassicrmmenjoiirresultDesc}>
              Strong foundation. A few more voyages and the ocean will reveal
              everything.
            </Text>

            <View style={styles.oassicrmmenjoiirsummary}>
              <Text style={styles.oassicrmmenjoiirsummaryTitle}>
                ANSWER SUMMARY
              </Text>
              {oassicrmmenjoiirQuestions.map(q => {
                const a = oassicrmmenjoiirAnswers[q.id];
                const ok = a === q.answer;
                return (
                  <View key={q.id} style={styles.oassicrmmenjoiirsummaryRow}>
                    <View
                      style={[
                        styles.oassicrmmenjoiirsummaryDot,
                        ok
                          ? styles.oassicrmmenjoiirsummaryDotOk
                          : styles.oassicrmmenjoiirsummaryDotBad,
                      ]}>
                      <Text
                        style={[
                          styles.oassicrmmenjoiirsummaryIcon,
                          ok
                            ? styles.oassicrmmenjoiirsummaryOk
                            : styles.oassicrmmenjoiirsummaryBad,
                        ]}>
                        {ok ? '✓' : '✕'}
                      </Text>
                    </View>
                    <Text
                      style={styles.oassicrmmenjoiirsummaryText}
                      numberOfLines={1}>
                      {q.question}
                    </Text>
                  </View>
                );
              })}
            </View>

            <Pressable
              onPress={oassicrmmenjoiirTryAgain}
              style={styles.oassicrmmenjoiirctaPress}>
              <LinearGradient
                colors={['#0099CC', '#00D4FF']}
                style={styles.oassicrmmenjoiircta}>
                <Image
                  source={require('../../assets/i/ossdrmeexpstryag.png')}
                />
                <Text style={styles.oassicrmmenjoiirctaText}>TRY AGAIN</Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Oassicrmmenjoiirhlayt>
  );
};

export default Oassicrmmenjoiirhquz;

const styles = StyleSheet.create({
  oassicrmmenjoiirsummaryTitle: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 1,
    marginBottom: 12,
  },
  oassicrmmenjoiirsummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },

  oassicrmmenjoiirwrap: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 58,
    paddingBottom: 100,
  },

  oassicrmmenjoiirctaPress: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 18,
  },

  oassicrmmenjoiircta: {
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  oassicrmmenjoiirctaText: {
    color: '#050D1A',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  oassicrmmenjoiirctaDisabled: {opacity: 0.6},

  oassicrmmenjoiirintro: {paddingBottom: 20, flex: 1},
  oassicrmmenjoiirintroHeader: {alignItems: 'flex-start'},
  oassicrmmenjoiirintroKicker: {
    color: '#00D4FF',
    letterSpacing: 3,
    fontSize: 10,
    textAlign: 'center',
  },
  oassicrmmenjoiirintroTitle: {
    color: '#E7F7FF',
    fontSize: 20,
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
    marginTop: 4,
  },
  oassicrmmenjoiirintroDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 16,
    paddingHorizontal: 16,
  },

  oassicrmmenjoiirrings: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginBottom: 22,
  },
  oassicrmmenjoiirring3: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: '#00D4FF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirring2: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#00D4FF26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirring1: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#00D4FF55',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  oassicrmmenjoiirringQ: {color: '#00D4FF', fontSize: 18, fontWeight: '800'},

  oassicrmmenjoiirmetaRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  oassicrmmenjoiirmetaPill: {
    flex: 1,
    maxWidth: 110,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  oassicrmmenjoiirmetaMain: {
    color: '#00D4FF',
    fontSize: 16,
    fontFamily: 'Cinzel-Bold',
    marginBottom: 4,
  },
  oassicrmmenjoiirmetaSub: {color: '#7BAFC4', fontSize: 10, marginTop: 4},

  oassicrmmenjoiirchips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 18,
    width: '80%',
    alignSelf: 'center',
  },
  oassicrmmenjoiirchip: {
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  oassicrmmenjoiirchipText: {color: '#00D4FF', fontSize: 10},
  oassicrmmenjoiirintroBottom: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },

  oassicrmmenjoiirquiz: {flex: 1},
  oassicrmmenjoiirprogressTop: {marginTop: 4, marginBottom: 14},
  oassicrmmenjoiirprogressLabel: {
    color: '#7BAFC4',
    fontSize: 11,
    marginBottom: 10,
  },
  oassicrmmenjoiirprogressBar: {
    height: 4,
    backgroundColor: '#FFFFFF14',
    borderRadius: 999,
    overflow: 'hidden',
  },
  oassicrmmenjoiirprogressFill: {height: 4, backgroundColor: '#00D4FF'},

  oassicrmmenjoiirqCard: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
    padding: 16,
    marginBottom: 24,
    minHeight: 125,
  },
  oassicrmmenjoiirqTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#00D4FF40',
    backgroundColor: '#00D4FF1F',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  oassicrmmenjoiirqTagText: {color: '#7DE8FF', fontSize: 10, letterSpacing: 2},
  oassicrmmenjoiirqText: {
    color: '#E7F7FF',
    fontSize: 18,
    fontFamily: 'Cinzel-Regular',
    lineHeight: 24,
  },

  oassicrmmenjoiiropt: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  oassicrmmenjoiiroptIdle: {
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0F',
  },
  oassicrmmenjoiiroptRight: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  oassicrmmenjoiiroptWrong: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  oassicrmmenjoiiroptKey: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00D4FF40',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00101866',
  },
  oassicrmmenjoiiroptKeyText: {color: '#00D4FF', fontWeight: '800'},
  oassicrmmenjoiiroptText: {
    flex: 1,
    color: '#E8F4F8',
    fontSize: 14,
    lineHeight: 18,
  },
  oassicrmmenjoiirctaTopSpace: {marginTop: 12},

  oassicrmmenjoiirresult: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  oassicrmmenjoiirmedal: {
    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  oassicrmmenjoiirmedalIcon: {color: '#00D4FF', fontSize: 28},
  oassicrmmenjoiirlevel: {
    color: '#00D4FF',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: 12,
  },
  oassicrmmenjoiirlevelPill: {
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
  oassicrmmenjoiirscore: {
    color: '#00D4FF',
    fontSize: 52,
    fontWeight: '700',
    textAlign: 'center',
  },
  oassicrmmenjoiirscoreSmall: {fontSize: 20, fontWeight: '600'},
  oassicrmmenjoiiraccuracy: {
    color: '#7BAFC4',
    textAlign: 'center',
    marginTop: 6,
  },
  oassicrmmenjoiirresultDesc: {
    color: '#7BAFC4',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 18,
    paddingHorizontal: 46,
  },

  oassicrmmenjoiirsummary: {
    marginTop: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#00D4FF26',
    backgroundColor: '#FFFFFF0A',
    padding: 14,
  },

  oassicrmmenjoiirsummaryDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirsummaryDotOk: {
    borderColor: '#00C878',
    backgroundColor: '#00C8781F',
  },
  oassicrmmenjoiirsummaryDotBad: {
    borderColor: '#FF5050',
    backgroundColor: '#FF50501F',
  },
  oassicrmmenjoiirsummaryIcon: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 8,
  },
  oassicrmmenjoiirsummaryOk: {color: '#00C878'},
  oassicrmmenjoiirsummaryBad: {color: '#FF3B5C'},
  oassicrmmenjoiirsummaryText: {flex: 1, color: '#BEEBFFB3', fontSize: 12},
});
