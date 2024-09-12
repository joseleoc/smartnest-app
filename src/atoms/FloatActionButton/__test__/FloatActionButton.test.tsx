import { render } from "@/__test__/testing-utils";
import FloatActionButton from "../FloatActionButton";

describe("FloatActionButton atom", () => {
  test("renders correctly", () => {
    const { toJSON } = render(<FloatActionButton />);
    expect(toJSON()).toMatchSnapshot();
  });
});
