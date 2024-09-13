import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import SafeAreaView from "@/atoms/SafeAreaView";
import FloatActionButton from "@/atoms/FloatActionButton";
import ActionsBottomSheet from "@/templates/ActionsBottomSheet";
import { createCondominium } from "@/db/model/condominium";

export default function Home() {
  // --- Hooks -----------------------------------------------------------------
  const create = async () => {
    try {
      const newCondominium = await createCondominium({
        condominiumId: "123912'39",
        name: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        description:
          "Smartnest is a mobile app designed for condominium administrators. It streamlines financial management by allowing users to track expenses and income, generate detailed reports, and send automated emails. The app's offline-first architecture ensures seamless functionality, even in areas with limited internet connectivity.",
      });
      console.log("created");
    } catch (error) {
      console.error("🚀 ~ file: Home.tsx:20 ~ create ~ error:", error);
    }
  };
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  // --- END: Data and handlers ------------------------------------------------

  return (
    <SafeAreaView>
      <Button onPress={create}>
        <Text colorName="primaryContrast">Home</Text>
      </Button>
      <FloatActionButton />
      <ActionsBottomSheet />
    </SafeAreaView>
  );
}
