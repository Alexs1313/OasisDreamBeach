// nav

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ockeanguudexplrrhquz from './Ockeanguudexplrrh/Ockeanguudexplrrhscrns/Ockeanguudexplrrhquz';
import Ockeanguudexplrrhmap from './Ockeanguudexplrrh/Ockeanguudexplrrhscrns/Ockeanguudexplrrhmap';
import Ockeanguudexplrrhstries from './Ockeanguudexplrrh/Ockeanguudexplrrhscrns/Ockeanguudexplrrhstries';
import Ockeanguudexplrrhome from './Ockeanguudexplrrh/Ockeanguudexplrrhscrns/Ockeanguudexplrrhome';
import Ockeanguudexplrrhsvd from './Ockeanguudexplrrh/Ockeanguudexplrrhscrns/Ockeanguudexplrrhsvd';

const Tab = createBottomTabNavigator();

const OckeanguudexplrrhAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const ockeanguudexplrrhScale = useRef(new Animated.Value(1)).current;

  const ockeanguudexplrrhHandlePressIn = () => {
    Animated.spring(ockeanguudexplrrhScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const ockeanguudexplrrhHandlePressOut = () => {
    Animated.spring(ockeanguudexplrrhScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={ockeanguudexplrrhHandlePressIn}
      onPressOut={ockeanguudexplrrhHandlePressOut}
      style={[style as ViewStyle, styles.ockeanguudexplrrhButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.ockeanguudexplrrhButtonInner,
          {transform: [{scale: ockeanguudexplrrhScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const OckeanguudexplrrhIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.ockeanguudexplrrhIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/i/ossdrmeexplrbecsel.png')}
          style={{position: 'absolute', top: -6, right: -4}}
        />
      ) : null}
      <View style={styles.ockeanguudexplrrhIconImageWrap}>
        <Image source={source} tintColor={focused ? '#00D4FF' : '#FFFFFF4D'} />
      </View>

      <Text
        style={[
          styles.ockeanguudexplrrhLabel,
          focused
            ? styles.ockeanguudexplrrhLabelFocused
            : styles.ockeanguudexplrrhLabelIdle,
        ]}>
        {label}
      </Text>

      <View
        style={[
          focused
            ? {
                borderColor: '#00D4FF',
                backgroundColor: '#00D4FF',
                width: 4,
                height: 4,
                borderRadius: 22,
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
              }
            : null,
        ]}
      />
    </View>
  );
};

const ockeanguudexplrrhBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#020810', '#020810']}
    style={StyleSheet.absoluteFill}
  />
);

const ockeanguudexplrrhIconPlaces = ({focused}: {focused: boolean}) => (
  <OckeanguudexplrrhIcon
    focused={focused}
    label="Home"
    source={require('./assets/i/ockeanguudexplrrtab1.png')}
  />
);

const ockeanguudexplrrhIconSaved = ({focused}: {focused: boolean}) => (
  <OckeanguudexplrrhIcon
    focused={focused}
    label="Map"
    source={require('./assets/i/ockeanguudexplrrtab2.png')}
  />
);

const ockeanguudexplrrhIconMap = ({focused}: {focused: boolean}) => (
  <OckeanguudexplrrhIcon
    focused={focused}
    label="Stories"
    source={require('./assets/i/ockeanguudexplrrtab3.png')}
  />
);

const ockeanguudexplrrhIconBlog = ({focused}: {focused: boolean}) => (
  <OckeanguudexplrrhIcon
    focused={focused}
    label="Quiz"
    source={require('./assets/i/ockeanguudexplrrtab4.png')}
  />
);

const ockeanguudexplrrhIconQuiz = ({focused}: {focused: boolean}) => (
  <OckeanguudexplrrhIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/ockeanguudexplrrtab5.png')}
  />
);

const ockeanguudexplrrhButton = (props: Record<string, unknown>) => (
  <OckeanguudexplrrhAnimatedButton {...props} />
);

const Ockeanguudexplrrtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.ockeanguudexplrrhBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: ockeanguudexplrrhButton,
        tabBarBackground: ockeanguudexplrrhBarBackground,
      }}>
      <Tab.Screen
        name="Ockeanguudexplrrhome"
        component={Ockeanguudexplrrhome}
        options={{
          tabBarIcon: ockeanguudexplrrhIconPlaces,
        }}
      />
      <Tab.Screen
        name="Ockeanguudexplrrhmap"
        component={Ockeanguudexplrrhmap}
        options={{
          tabBarIcon: ockeanguudexplrrhIconSaved,
        }}
      />
      <Tab.Screen
        name="Ockeanguudexplrrhstries"
        component={Ockeanguudexplrrhstries}
        options={{
          tabBarIcon: ockeanguudexplrrhIconMap,
        }}
      />
      <Tab.Screen
        name="Ockeanguudexplrrhquz"
        component={Ockeanguudexplrrhquz}
        options={{
          tabBarIcon: ockeanguudexplrrhIconBlog,
        }}
      />
      <Tab.Screen
        name="Ockeanguudexplrrhsvd"
        component={Ockeanguudexplrrhsvd}
        options={{
          tabBarIcon: ockeanguudexplrrhIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  ockeanguudexplrrhLabelFocused: {
    color: '#00D4FF',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  ockeanguudexplrrhBar: {
    elevation: 0,
    paddingTop: 10,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 6,
    borderColor: '#FFFFFF14',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF14',
    backgroundColor: 'transparent',
    height: 80,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  ockeanguudexplrrhButton: {
    flex: 1,
  },
  ockeanguudexplrrhButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ockeanguudexplrrhIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  ockeanguudexplrrhIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  ockeanguudexplrrhIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ockeanguudexplrrhIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  ockeanguudexplrrhLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },

  ockeanguudexplrrhLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Ockeanguudexplrrtab;
