import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import MovieCard from "./MovieCard";

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
        if (gestureState.dx < -50 && currentSlide === 0) slideToNext();
        else if (gestureState.dx > 50 && currentSlide === 1) slideToPrev();
        else resetSlide();
      },
    })
  ).current;

  const slideToNext = () => {
    Animated.timing(translateX, {
      toValue: -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCurrentSlide(1));
  };

  const slideToPrev = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setCurrentSlide(0));
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
          <MovieCard color="lightblue" />
          <MovieCard color="pink" />
        </View>
        <View style={styles.container}>
          <MovieCard color="orange" />
          <MovieCard color="lightgreen" />
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
});

export default TopPicksCategory;
