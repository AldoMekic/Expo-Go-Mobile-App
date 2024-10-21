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

// Container height (half the screen height)
const containerHeight = screenHeight / 2;

const Headline: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 0 for the first set, 1 for the second set
  const translateX = useRef(new Animated.Value(0)).current; // Animated value for horizontal sliding

  // PanResponder for handling swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        Math.abs(gestureState.dx) > 20, // Start pan if horizontal gesture detected
      onPanResponderMove: (evt, gestureState) => {
        if (
          (gestureState.dx < 0 && currentSlide === 0) || // Swiping left on first slide
          (gestureState.dx > 0 && currentSlide === 1) // Swiping right on second slide
        ) {
          translateX.setValue(gestureState.dx); // Move the slide based on gesture
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -50 && currentSlide === 0) {
          // Swiped left on the first slide
          slideToNext();
        } else if (gestureState.dx > 50 && currentSlide === 1) {
          // Swiped right on the second slide
          slideToPrev();
        } else {
          // Return to original position if no significant swipe
          resetSlide();
        }
      },
    })
  ).current;

  const slideToNext = () => {
    Animated.timing(translateX, {
      toValue: -screenWidth, // Slide left
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(1); // Set the current slide to the second one
    });
  };

  const slideToPrev = () => {
    Animated.timing(translateX, {
      toValue: 0, // Slide right (back to the original)
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSlide(0); // Set the current slide to the first one
    });
  };

  const resetSlide = () => {
    Animated.spring(translateX, {
      toValue: currentSlide === 0 ? 0 : -screenWidth, // Snap back to current slide
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View
        style={[
          styles.slideContainer,
          { transform: [{ translateX }] }, // Apply animation for sliding
        ]}
      >
        {/* First Slide */}
        <View style={styles.container}>
          <View style={styles.upperDiv}>
            <Text style={styles.upperText}>Video placed here</Text>
          </View>
          <View style={styles.lowerDiv}>
            <Text style={styles.lowerText}>Title placed here</Text>
          </View>
        </View>

        {/* Second Slide */}
        <View style={styles.container}>
          <View style={[styles.upperDiv, { backgroundColor: "green" }]}>
            <Text style={styles.upperText}>Alternate video here</Text>
          </View>
          <View style={[styles.lowerDiv, { backgroundColor: "red" }]}>
            <Text style={styles.lowerText}>Alternate title here</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: containerHeight,
    overflow: "hidden", // Hide overflow for sliding effect
  },
  slideContainer: {
    flexDirection: "row", // Align slides side by side
    width: screenWidth * 2, // Two slides width (each slide is full width)
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
