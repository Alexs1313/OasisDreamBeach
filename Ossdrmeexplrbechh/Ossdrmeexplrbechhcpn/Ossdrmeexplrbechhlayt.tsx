import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ossdrmeexplrbechhlayt = ({
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
      style={styles.ossdrmeexplrbechcontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.ossdrmeexplrbechscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default Ossdrmeexplrbechhlayt;

const styles = StyleSheet.create({
  ossdrmeexplrbechscrollContent: {
    flexGrow: 1,
  },
  ossdrmeexplrbechflexFill: {
    flex: 1,
  },

  ossdrmeexplrbechcontainer: {
    flex: 1,
    backgroundColor: '#020810',
  },
});
