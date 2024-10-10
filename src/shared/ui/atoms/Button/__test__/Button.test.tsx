import { render, screen, fireEvent } from "@/__test__/testing-utils";
import Button from "../Button";
import Text from "@/atoms/Text";

describe("Button atom", () => {
  test("renders correctly", () => {
    render(
      <Button>
        <Text>Test</Text>
      </Button>
    );
    expect(screen.queryByText("Test")).toBeTruthy();
  });

  test("fires onPress callback", () => {
    const onPress = jest.fn();
    render(
      <Button onPress={onPress}>
        <Text>Test</Text>
      </Button>
    );

    fireEvent.press(screen.queryByText("Test"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
