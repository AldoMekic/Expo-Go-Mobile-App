import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const containerHeight = screenHeight / 2;

const TopPicksCategory: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        Math.abs(gestureState.dx) > 20,
      onPanResponderMove: (evt, gestureState) => {
        if (
          (gestureState.dx < 0 && currentSlide === 0) ||
          (gestureState.dx > 0 && currentSlide === 1)
        ) {
          translateX.setValue(gestureState.dx);
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
    Animated.timing(translateX, {
      toValue: -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(1);
    });
  };

  const slideToPrev = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(0);
    });
  };

  const resetSlide = () => {
    Animated.spring(translateX, {
      toValue: currentSlide === 0 ? 0 : -screenWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View
        style={[styles.slideContainer, { transform: [{ translateX }] }]}
      >
        <View style={styles.container}>
          <View
            style={[styles.topPicksItem, { backgroundColor: "lightblue" }]}
          />
          <View style={[styles.topPicksItem, { backgroundColor: "pink" }]} />
        </View>

        <View style={styles.container}>
          <View style={[styles.topPicksItem, { backgroundColor: "orange" }]} />
          <View
            style={[styles.topPicksItem, { backgroundColor: "lightgreen" }]}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: containerHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  slideContainer: {
    flexDirection: "row",
    width: screenWidth * 2,
  },
  topPicksItem: {
    flex: 1,
    height: "80%",
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default TopPicksCategory;
