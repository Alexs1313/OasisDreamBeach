import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Oassicrmmenjoiirhlayt = ({
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
      style={styles.oassicrmmenjoiircontainer}>
      <ScrollView
        bounces={bounces}
        contentContainerStyle={styles.oassicrmmenjoiirscrollContent}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

export default Oassicrmmenjoiirhlayt;

const styles = StyleSheet.create({
  oassicrmmenjoiirscrollContent: {
    flexGrow: 1,
  },
  oassicrmmenjoiirflexFill: {
    flex: 1,
  },

  oassicrmmenjoiircontainer: {
    flex: 1,
    backgroundColor: '#020810',
  },
});
