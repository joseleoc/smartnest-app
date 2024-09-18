import { useForm, Controller } from "react-hook-form";
import TextInput from "@/atoms/TextInput";
import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import View from "@/atoms/View";
import { styles } from "../CreateCondominium.styles";
import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { createCondominium } from "@/db/model/condominium";

type Inputs = {
  name: string;
  address: string;
  description: string;
  avatar: string;
};

export default function CreateCondominiumForm() {
  // --- Hooks -----------------------------------------------------------------
  const { t } = useTranslation();
  const {
    styling: { spacing, button },
    colors,
  } = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      address: "",
      description: "",
      avatar: "",
    },
  });
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const [loading, setLoading] = useState(false);
  // --- END: Local state ------------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const onSubmit = async (data: Inputs) => {
    if (isValid) {
      try {
        // const newCondominium = await createCondominium({
        //   name: data.name,
        //   description: data.description,
        //   address: data.address,
        //   avatar: data.avatar,
        // });
        // console.log(
        //   "🚀 ~ file: form.tsx:54 ~ onSubmit ~ newCondominium:",
        //   newCondominium
        // );
        Toast.show({
          type: "success",
          text1: t("CONDOMINIUM.CREATE_FORM.CREATE_SUCCESS"),
        });
        setLoading(false);
      } catch (error) {
        console.error("🚀 ~ file: form.tsx:61 ~ onSubmit ~ error:", error);
        setLoading(false);
        Toast.show({
          type: "error",
          text1: t("CONDOMINIUM.CREATE_FORM.CREATE_ERROR"),
        });
      }
    }
    console.log({ isValid });
    console.log(data);
    setLoading(true);
  };

  // --- END: Data and handlers ------------------------------------------------
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={spacing.extraLarge * 2 + 10}
      style={[styles.formContainer, { gap: spacing.medium }]}
    >
      <View
        style={[
          styles.form,
          {
            gap: spacing.medium,
            marginTop: spacing.large,
            marginHorizontal: spacing.large,
          },
        ]}
      >
        {/* AVATAR */}
        <View style={{ width: 80, height: 80, backgroundColor: "gray" }}></View>
        {/* NAME FIELD */}
        <View style={[styles.inputWrapper, { gap: spacing.small }]}>
          <Controller
            control={control}
            name={"name"}
            render={({ field: { value, onChange, onBlur } }) => (
              <View style={[styles.inputContainer, { gap: spacing.small }]}>
                <FontAwesome6
                  name="building"
                  size={button.small}
                  color={colors.secondary}
                  style={{
                    color: colors.secondary,
                  }}
                />
                <TextInput
                  inputMode="text"
                  placeholder={t("CONDOMINIUM.CREATE_FORM.NAME")}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              </View>
            )}
            rules={{
              required: {
                value: true,
                message: t("VALIDATION.REQUIRED"),
              },
              maxLength: {
                value: 64,
                message: t("VALIDATION.MAX_LENGTH", { max: 64 }),
              },
            }}
          />
          {errors.name && (
            <Text
              style={[
                { color: colors.danger, marginLeft: spacing.large },
                styles.inputError,
              ]}
            >
              {errors.name.message}
            </Text>
          )}
        </View>

        {/* ADDRESS FIELD */}
        <View style={[styles.inputWrapper, { gap: spacing.small }]}>
          <Controller
            control={control}
            name={"address"}
            render={({ field: { value, onChange, onBlur } }) => (
              <View style={[styles.inputContainer, { gap: spacing.small }]}>
                <Ionicons
                  name="location-outline"
                  size={button.small}
                  color={colors.secondary}
                  style={{
                    color: colors.secondary,
                  }}
                />
                <TextInput
                  numberOfLines={3}
                  multiline={true}
                  inputMode="text"
                  placeholder={t("CONDOMINIUM.CREATE_FORM.ADDRESS")}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              </View>
            )}
            rules={{
              maxLength: {
                value: 260,
                message: t("VALIDATION.MAX_LENGTH", { max: 260 }),
              },
            }}
          />
          {errors.address && (
            <Text
              style={[
                { color: colors.danger, marginLeft: spacing.large },
                styles.inputError,
              ]}
            >
              {errors.address.message}
            </Text>
          )}
        </View>

        {/* DESCRIPTION FIELD */}
        <View style={[styles.inputWrapper, { gap: spacing.small }]}>
          <Controller
            control={control}
            name={"description"}
            render={({ field: { value, onChange, onBlur } }) => (
              <View style={[styles.inputContainer, { gap: spacing.small }]}>
                <SimpleLineIcons
                  name="notebook"
                  size={button.small}
                  color={colors.secondary}
                  style={{
                    color: colors.secondary,
                  }}
                />
                <TextInput
                  numberOfLines={3}
                  multiline={true}
                  inputMode="text"
                  placeholder={t("CONDOMINIUM.CREATE_FORM.DESCRIPTION")}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                />
              </View>
            )}
            rules={{
              maxLength: {
                value: 260,
                message: t("VALIDATION.MAX_LENGTH", { max: 260 }),
              },
            }}
          />
          {errors.description && (
            <Text
              style={[
                { color: colors.danger, marginLeft: spacing.large },
                styles.inputError,
              ]}
            >
              {errors.description.message}
            </Text>
          )}
        </View>
      </View>

      {/* SUBMIT BUTTON */}
      <Button
        aria-label="Submit"
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        <Text style={{ color: colors.primaryContrast }}>
          {t("COMMON.SAVE")}
        </Text>
      </Button>
    </KeyboardAvoidingView>
  );
}
