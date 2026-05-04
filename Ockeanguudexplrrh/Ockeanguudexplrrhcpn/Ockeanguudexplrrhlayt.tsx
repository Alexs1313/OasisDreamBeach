import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ockeanguudexplrrhlayt = ({
  children,
  bounces = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  bounces?: boolean;
}) => {
  return (
    <LinearGradient
      colors={['#050D1A', '#071221', '#0A1628']}
      style={styles.ockeanguudexplrrcontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.ockeanguudexplrrscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default Ockeanguudexplrrhlayt;

const styles = StyleSheet.create({
  ockeanguudexplrrscrollContent: {
    flexGrow: 1,
  },
  ockeanguudexplrrflexFill: {
    flex: 1,
  },

  ockeanguudexplrrcontainer: {
    flex: 1,
    backgroundColor: '#020810',
  },
});
