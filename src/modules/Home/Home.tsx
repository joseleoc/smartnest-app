import Text from "@/atoms/Text";
import Button from "@/atoms/Button";
import SafeAreaView from "@/atoms/SafeAreaView";
import FloatActionButton from "@/atoms/FloatActionButton";
import ActionsBottomSheet from "@/templates/ActionsBottomSheet";
import { createCommunity } from "@/db/model/community";

export default function Home() {
  // --- Hooks -----------------------------------------------------------------
  const create = async () => {
    try {
      const newCommunity = await createCommunity({
        communityId: "1",
        name: "Test",
        description: "Test",
        isActive: true,
      });
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
      <Button>
        <Text colorName="primaryContrast">Home</Text>
      </Button>
      <FloatActionButton />
      <ActionsBottomSheet />
    </SafeAreaView>
  );
}
