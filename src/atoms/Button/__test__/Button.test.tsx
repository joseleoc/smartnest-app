import { render } from "@testing-library/react-native";
import Button from "../Button";

describe("Button atom", () => {
  test("renders correctly", () => {
    const { toJSON } = render(<Button />);
    expect(toJSON()).toMatchSnapshot();
  });
});
