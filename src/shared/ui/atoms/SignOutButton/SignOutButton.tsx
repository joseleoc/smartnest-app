import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import { useTranslation } from "react-i18next";
import useTheme from "@/hooks/useTheme";

const userSelector = (context: any) => [context.user];

export default function SignOutButton() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <Button style={[{ backgroundColor: colors.secondary }]}>
      {/* <Text>Hello, {user.username}! Click here to sign out!</Text> */}
      <Text style={{ color: colors.secondaryContrast }}>
        {t("COMMON.SIGN_OUT")}
      </Text>
    </Button>
  );
}
