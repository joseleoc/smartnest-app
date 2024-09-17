import { useStore } from "@/stores/zustand";
import { useEffect, useMemo, useState } from "react";
import { Modal, Animated, LayoutChangeEvent } from "react-native";
import { Platform, Pressable, TouchableWithoutFeedback } from "react-native";

import useTheme from "@/hooks/useTheme";

import View from "@/atoms/View";
import SafeAreaView from "@/atoms/SafeAreaView";
import ActionsBottomSheetList from "@/shared/ui/molecules/ActionsBottomSheetList";

import { styles } from "./ActionsBottomSheet.styles";

export default function ActionsButtonSheet() {
  // --- Hooks ----------------------------------------------------------------
  const { isActionBottomSheetOpen, setActionBottomSheetOpen } = useStore();
  const { styling } = useTheme();
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
                maxWidth: styling.spacing.maxWidth,
              },
            ]}
          >
            <View onLayout={handleLayoutChange}>
              <Pressable onPress={() => {}}>
                <View
                  style={[
                    {
                      padding: styling.spacing.medium,
                      gap: styling.spacing.small,
                    },
                  ]}
                >
                  <ActionsBottomSheetList />
                </View>
              </Pressable>
            </View>
          </Animated.View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  ) : null;
}
