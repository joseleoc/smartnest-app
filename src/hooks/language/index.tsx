import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { useEffect } from "react";

export default function useDefaultLanguage() {
  useEffect(() => {
    const getLng = async () => {
      try {
        const language = await AsyncStorage.getItem("lang");
        if (language != null) i18next.changeLanguage(language);
      } catch (error) {
        console.error(
          "🚀 ~ hooks/language ~ file: index.tsx:12 ~ getLng ~ error:",
          error,
        );
      }
    };
    getLng();
  }, []);
}
