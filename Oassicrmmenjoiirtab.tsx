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

import Oassicrmmenjoiirhquz from './Oassicrmmenjoiirh/Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhquz';
import Oassicrmmenjoiirhmap from './Oassicrmmenjoiirh/Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhmap';
import Oassicrmmenjoiirhstries from './Oassicrmmenjoiirh/Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhstries';
import Oassicrmmenjoiirhome from './Oassicrmmenjoiirh/Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhome';
import Oassicrmmenjoiirhsvd from './Oassicrmmenjoiirh/Oassicrmmenjoiirhscrns/Oassicrmmenjoiirhsvd';

const Tab = createBottomTabNavigator();

const OassicrmmenjoiirhAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const oassicrmmenjoiirhScale = useRef(new Animated.Value(1)).current;

  const oassicrmmenjoiirhHandlePressIn = () => {
    Animated.spring(oassicrmmenjoiirhScale, {
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

  const oassicrmmenjoiirhHandlePressOut = () => {
    Animated.spring(oassicrmmenjoiirhScale, {
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
      onPressIn={oassicrmmenjoiirhHandlePressIn}
      onPressOut={oassicrmmenjoiirhHandlePressOut}
      style={[style as ViewStyle, styles.oassicrmmenjoiirhButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.oassicrmmenjoiirhButtonInner,
          {transform: [{scale: oassicrmmenjoiirhScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const OassicrmmenjoiirhIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.oassicrmmenjoiirhIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/i/ossdrmeexplrbecsel.png')}
          style={{position: 'absolute', top: -6, right: -4}}
        />
      ) : null}
      <View style={styles.oassicrmmenjoiirhIconImageWrap}>
        <Image source={source} tintColor={focused ? '#00D4FF' : '#FFFFFF4D'} />
      </View>

      <Text
        style={[
          styles.oassicrmmenjoiirhLabel,
          focused
            ? styles.oassicrmmenjoiirhLabelFocused
            : styles.oassicrmmenjoiirhLabelIdle,
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

const oassicrmmenjoiirhBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#020810', '#020810']}
    style={StyleSheet.absoluteFill}
  />
);

const oassicrmmenjoiirhIconPlaces = ({focused}: {focused: boolean}) => (
  <OassicrmmenjoiirhIcon
    focused={focused}
    label="Home"
    source={require('./assets/i/oassicrmmenjoiirtab1.png')}
  />
);

const oassicrmmenjoiirhIconSaved = ({focused}: {focused: boolean}) => (
  <OassicrmmenjoiirhIcon
    focused={focused}
    label="Map"
    source={require('./assets/i/oassicrmmenjoiirtab2.png')}
  />
);

const oassicrmmenjoiirhIconMap = ({focused}: {focused: boolean}) => (
  <OassicrmmenjoiirhIcon
    focused={focused}
    label="Stories"
    source={require('./assets/i/oassicrmmenjoiirtab3.png')}
  />
);

const oassicrmmenjoiirhIconBlog = ({focused}: {focused: boolean}) => (
  <OassicrmmenjoiirhIcon
    focused={focused}
    label="Quiz"
    source={require('./assets/i/oassicrmmenjoiirtab4.png')}
  />
);

const oassicrmmenjoiirhIconQuiz = ({focused}: {focused: boolean}) => (
  <OassicrmmenjoiirhIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/oassicrmmenjoiirtab5.png')}
  />
);

const oassicrmmenjoiirhButton = (props: Record<string, unknown>) => (
  <OassicrmmenjoiirhAnimatedButton {...props} />
);

const Oassicrmmenjoiirtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.oassicrmmenjoiirhBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: oassicrmmenjoiirhButton,
        tabBarBackground: oassicrmmenjoiirhBarBackground,
      }}>
      <Tab.Screen
        name="Oassicrmmenjoiirhome"
        component={Oassicrmmenjoiirhome}
        options={{
          tabBarIcon: oassicrmmenjoiirhIconPlaces,
        }}
      />
      <Tab.Screen
        name="Oassicrmmenjoiirhmap"
        component={Oassicrmmenjoiirhmap}
        options={{
          tabBarIcon: oassicrmmenjoiirhIconSaved,
        }}
      />
      <Tab.Screen
        name="Oassicrmmenjoiirhstries"
        component={Oassicrmmenjoiirhstries}
        options={{
          tabBarIcon: oassicrmmenjoiirhIconMap,
        }}
      />
      <Tab.Screen
        name="Oassicrmmenjoiirhquz"
        component={Oassicrmmenjoiirhquz}
        options={{
          tabBarIcon: oassicrmmenjoiirhIconBlog,
        }}
      />
      <Tab.Screen
        name="Oassicrmmenjoiirhsvd"
        component={Oassicrmmenjoiirhsvd}
        options={{
          tabBarIcon: oassicrmmenjoiirhIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  oassicrmmenjoiirhLabelFocused: {
    color: '#00D4FF',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  oassicrmmenjoiirhBar: {
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

  oassicrmmenjoiirhButton: {
    flex: 1,
  },
  oassicrmmenjoiirhButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  oassicrmmenjoiirhIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  oassicrmmenjoiirhIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  oassicrmmenjoiirhIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oassicrmmenjoiirhIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  oassicrmmenjoiirhLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },

  oassicrmmenjoiirhLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Oassicrmmenjoiirtab;
