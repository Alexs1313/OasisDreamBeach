// tab navigation

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

import Ossdrmeexplrbechhquz from './Ossdrmeexplrbechh/Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhquz';
import Ossdrmeexplrbechhmap from './Ossdrmeexplrbechh/Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhmap';
import Ossdrmeexplrbechhstries from './Ossdrmeexplrbechh/Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhstries';
import Ossdrmeexplrbechhome from './Ossdrmeexplrbechh/Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhome';
import Ossdrmeexplrbechhsvd from './Ossdrmeexplrbechh/Ossdrmeexplrbechhscrns/Ossdrmeexplrbechhsvd';

const Tab = createBottomTabNavigator();

const OssdrmeexplrbechhAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const ossdrmeexplrbechhScale = useRef(new Animated.Value(1)).current;

  const ossdrmeexplrbechhHandlePressIn = () => {
    Animated.spring(ossdrmeexplrbechhScale, {
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

  const ossdrmeexplrbechhHandlePressOut = () => {
    Animated.spring(ossdrmeexplrbechhScale, {
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
      onPressIn={ossdrmeexplrbechhHandlePressIn}
      onPressOut={ossdrmeexplrbechhHandlePressOut}
      style={[style as ViewStyle, styles.ossdrmeexplrbechhButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.ossdrmeexplrbechhButtonInner,
          {transform: [{scale: ossdrmeexplrbechhScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const OssdrmeexplrbechhIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.ossdrmeexplrbechhIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/i/ossdrmeexplrbecsel.png')}
          style={{position: 'absolute', top: -6, right: -4}}
        />
      ) : null}
      <View style={styles.ossdrmeexplrbechhIconImageWrap}>
        <Image source={source} tintColor={focused ? '#00D4FF' : '#FFFFFF4D'} />
      </View>

      <Text
        style={[
          styles.ossdrmeexplrbechhLabel,
          focused
            ? styles.ossdrmeexplrbechhLabelFocused
            : styles.ossdrmeexplrbechhLabelIdle,
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

const ossdrmeexplrbechhBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#020810', '#020810']}
    style={StyleSheet.absoluteFill}
  />
);

const ossdrmeexplrbechhIconPlaces = ({focused}: {focused: boolean}) => (
  <OssdrmeexplrbechhIcon
    focused={focused}
    label="Home"
    source={require('./assets/i/ossdrmeexplrbechtab1.png')}
  />
);

const ossdrmeexplrbechhIconSaved = ({focused}: {focused: boolean}) => (
  <OssdrmeexplrbechhIcon
    focused={focused}
    label="Map"
    source={require('./assets/i/ossdrmeexplrbechtab2.png')}
  />
);

const ossdrmeexplrbechhIconMap = ({focused}: {focused: boolean}) => (
  <OssdrmeexplrbechhIcon
    focused={focused}
    label="Stories"
    source={require('./assets/i/ossdrmeexplrbechtab3.png')}
  />
);

const ossdrmeexplrbechhIconBlog = ({focused}: {focused: boolean}) => (
  <OssdrmeexplrbechhIcon
    focused={focused}
    label="Quiz"
    source={require('./assets/i/ossdrmeexplrbechtab4.png')}
  />
);

const ossdrmeexplrbechhIconQuiz = ({focused}: {focused: boolean}) => (
  <OssdrmeexplrbechhIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/ossdrmeexplrbechtab5.png')}
  />
);

const ossdrmeexplrbechhButton = (props: Record<string, unknown>) => (
  <OssdrmeexplrbechhAnimatedButton {...props} />
);

const Ossdrmeexplrbechtab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.ossdrmeexplrbechhBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: ossdrmeexplrbechhButton,
        tabBarBackground: ossdrmeexplrbechhBarBackground,
      }}>
      <Tab.Screen
        name="Ossdrmeexplrbechhome"
        component={Ossdrmeexplrbechhome}
        options={{
          tabBarIcon: ossdrmeexplrbechhIconPlaces,
        }}
      />
      <Tab.Screen
        name="Ossdrmeexplrbechhmap"
        component={Ossdrmeexplrbechhmap}
        options={{
          tabBarIcon: ossdrmeexplrbechhIconSaved,
        }}
      />
      <Tab.Screen
        name="Ossdrmeexplrbechhstries"
        component={Ossdrmeexplrbechhstries}
        options={{
          tabBarIcon: ossdrmeexplrbechhIconMap,
        }}
      />
      <Tab.Screen
        name="Ossdrmeexplrbechhquz"
        component={Ossdrmeexplrbechhquz}
        options={{
          tabBarIcon: ossdrmeexplrbechhIconBlog,
        }}
      />
      <Tab.Screen
        name="Ossdrmeexplrbechhsvd"
        component={Ossdrmeexplrbechhsvd}
        options={{
          tabBarIcon: ossdrmeexplrbechhIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  ossdrmeexplrbechhLabelFocused: {
    color: '#00D4FF',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  ossdrmeexplrbechhBar: {
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

  ossdrmeexplrbechhButton: {
    flex: 1,
  },
  ossdrmeexplrbechhButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ossdrmeexplrbechhIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  ossdrmeexplrbechhIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  ossdrmeexplrbechhIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ossdrmeexplrbechhIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },
  ossdrmeexplrbechhLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  ossdrmeexplrbechhLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Ossdrmeexplrbechtab;
