import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const Headline: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const translateXUpper = useRef(new Animated.Value(0)).current;
  const translateXLower = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderMove: (evt, gestureState) => {
        if (
          (gestureState.dx < 0 && currentSlide === 0) ||
          (gestureState.dx > 0 && currentSlide === 1)
        ) {
          translateXUpper.setValue(gestureState.dx);
          translateXLower.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50 && currentSlide === 0) {
          slideToNext();
        } else if (gestureState.dx > 50 && currentSlide === 1) {
          slideToPrev();
        } else {
          resetSlide();
        }
      },
    })
  ).current;

  const slideToNext = () => {
    Animated.timing(translateXUpper, {
      toValue: -screenWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXLower, {
      toValue: -screenWidth,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(1);
    });
  };

  const slideToPrev = () => {
    Animated.timing(translateXUpper, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateXLower, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(0);
    });
  };

  const resetSlide = () => {
    Animated.spring(translateXUpper, {
      toValue: currentSlide === 0 ? 0 : -screenWidth,
      useNativeDriver: true,
    }).start();
    Animated.spring(translateXLower, {
      toValue: currentSlide === 0 ? 0 : -screenWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View
        style={[
          styles.slideContainer,
          { transform: [{ translateX: translateXUpper }] },
        ]}
      >
        <View style={styles.upperDiv}>
          <Text style={styles.upperText}>Video placed here</Text>
        </View>
        <View style={[styles.upperDiv, { backgroundColor: "green" }]}>
          <Text style={styles.upperText}>Alternate video here</Text>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.slideContainer,
          { transform: [{ translateX: translateXLower }] },
        ]}
      >
        <View style={styles.lowerDiv}>
          <Text style={styles.lowerText}>Title placed here</Text>
        </View>
        <View style={[styles.lowerDiv, { backgroundColor: "red" }]}>
          <Text style={styles.lowerText}>Alternate title here</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: containerHeight,
    overflow: "hidden",
  },
  slideContainer: {
    flexDirection: "row",
    width: screenWidth * 2,
  },
  upperDiv: {
    backgroundColor: "blue",
    width: screenWidth,
    height: (2 / 3) * containerHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerDiv: {
    backgroundColor: "orange",
    width: screenWidth,
    height: (1 / 3) * containerHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  upperText: {
    color: "white",
    fontSize: 20,
  },
  lowerText: {
    color: "white",
    fontSize: 18,
  },
});

export default Headline;
