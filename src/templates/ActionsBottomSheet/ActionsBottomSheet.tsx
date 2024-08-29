import { Platform, Pressable, TouchableWithoutFeedback } from "react-native";
import { useStore } from "@/stores/zustand";
import { useEffect, useMemo, useState } from "react";
import { Modal, Animated, LayoutChangeEvent } from "react-native";

import useTheme from "@/hooks/useTheme";

import View from "@/atoms/View";
import Text from "@/atoms/Text/Text";
import IconItem from "@/atoms/IconItem";
import SafeAreaView from "@/atoms/SafeAreaView";

import { styles } from "./ActionsBottomSheet.styles";
import { Actions } from "./ActionsBottomSheet.constants";

export default function ActionsButtonSheet() {
  // --- Hooks ----------------------------------------------------------------
  const { isActionBottomSheetOpen, setActionBottomSheetOpen } = useStore();
  const { spacing } = useTheme();
  const [height, setHeight] = useState(0);
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const duration = 300;
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  const animated = useMemo(() => new Animated.Value(0), []);
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    if (height) {
      Animated.timing(animated, {
        toValue: isActionBottomSheetOpen ? -height : 0,
        duration,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    }
  }, [isActionBottomSheetOpen, duration, height, animated]);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const handleRequestClose = () => {
    setActionBottomSheetOpen(false);
  };
  const handleLayoutChange = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    setHeight(height);
  };
  // --- END: Data and handlers ------------------------------------------------

  return isActionBottomSheetOpen ? (
    <Modal
      animationType="fade"
      visible={isActionBottomSheetOpen}
      transparent={true}
      onRequestClose={handleRequestClose}
      presentationStyle="overFullScreen"
    >
      <TouchableWithoutFeedback onPress={() => setActionBottomSheetOpen(false)}>
        <SafeAreaView style={[styles.container]}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                bottom: -height,
                transform: [{ translateY: animated }],
                maxWidth: spacing.maxWidth,
              },
            ]}
          >
            <View onLayout={handleLayoutChange}>
              <Pressable onPress={() => {}}>
                <View
                  style={[
                    {
                      padding: spacing.spacingMedium,
                      gap: spacing.spacingSmall,
                    },
                  ]}
                >
                  {Actions.map((action, index) => (
                    <IconItem
                      key={index}
                      icon={action.icon}
                      onPress={() => console.log(action.label)}
                    >
                      <Text>{action.label}</Text>
                    </IconItem>
                  ))}
                </View>
              </Pressable>
            </View>
          </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  ) : null;
}
