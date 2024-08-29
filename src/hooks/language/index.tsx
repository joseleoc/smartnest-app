import i18next from "i18next";
import { useEffect } from "react";
import { useStore } from "@/stores/zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Language } from "@/types";

const defaultLanguage: Language = "en";

export default function useDefaultLanguage() {
  const { setSelectedLanguage, selectedLanguage } = useStore();

  useEffect(() => {
    const getLng = async () => {
      try {
        const language: Language | null = (await AsyncStorage.getItem(
          "lang"
        )) as any;
        if (language != null) {
          i18next.changeLanguage(language);
          setSelectedLanguage(language);
        } else {
          i18next.changeLanguage(defaultLanguage);
          setSelectedLanguage(defaultLanguage);
        }
      } catch (error) {
        console.error(
          "🚀 ~ hooks/language ~ file: index.tsx:12 ~ getLng ~ error:",
          error
        );
      }
    };
    getLng();
  }, []);

  useEffect(() => {
    const storeLanguage = async () => {
      try {
        await AsyncStorage.setItem("lang", selectedLanguage);
        i18next.changeLanguage(selectedLanguage);
      } catch (error) {
        console.error(
          "🚀 ~ hooks/language ~ file: index.tsx:12 ~ storeLanguage ~ error:",
          error
        );
      }
    };
    storeLanguage();
  }, [selectedLanguage]);
}
