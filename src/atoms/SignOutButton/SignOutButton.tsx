import { useAuthenticator } from "@aws-amplify/ui-react-native";
import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import { useTranslation } from "react-i18next";

const userSelector = (context: any) => [context.user];

export default function SignOutButton() {
  const { user, signOut } = useAuthenticator(userSelector);
  const { t } = useTranslation();

  return (
    <Button onPress={signOut}>
      {/* <Text>Hello, {user.username}! Click here to sign out!</Text> */}
      <Text>{t("COMMON.SIGN_OUT")}</Text>
    </Button>
  );
}
