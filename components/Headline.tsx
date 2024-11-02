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
          (gestureState.dx < 0 && currentSlide < 2) ||
          (gestureState.dx > 0 && currentSlide > 0)
        ) {
          translateXUpper.setValue(
            gestureState.dx - currentSlide * screenWidth
          );
          translateXLower.setValue(
            gestureState.dx - currentSlide * screenWidth
          );
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -100 && currentSlide < 2) {
          slideToNext();
        } else if (gestureState.dx > 50 && currentSlide > 0) {
          slideToPrev();
        } else {
          resetSlide();
        }
      },
    })
  ).current;

  const slideToNext = () => {
    if (currentSlide < 2) {
      Animated.timing(translateXUpper, {
        toValue: -(currentSlide + 1) * screenWidth,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(translateXLower, {
        toValue: -(currentSlide + 1) * screenWidth,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCurrentSlide(currentSlide + 1);
      });
    }
  };

  const slideToPrev = () => {
    if (currentSlide > 0) {
      Animated.timing(translateXUpper, {
        toValue: -(currentSlide - 1) * screenWidth,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(translateXLower, {
        toValue: -(currentSlide - 1) * screenWidth,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCurrentSlide(currentSlide - 1);
      });
    }
  };

  const resetSlide = () => {
    Animated.spring(translateXUpper, {
      toValue: -currentSlide * screenWidth,
      useNativeDriver: true,
    }).start();
    Animated.spring(translateXLower, {
      toValue: -currentSlide * screenWidth,
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
        <View style={[styles.upperDiv, { backgroundColor: "purple" }]}>
          <Text style={styles.upperText}>Another video here</Text>
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
        <View style={[styles.lowerDiv, { backgroundColor: "darkblue" }]}>
          <Text style={styles.lowerText}>Another title here</Text>
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
    width: screenWidth * 3,
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
