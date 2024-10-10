import { render, screen } from "@/__test__/testing-utils";
import FloatActionButton from "../FloatActionButton";

describe("FloatActionButton atom", () => {
  test("renders correctly", () => {
    render(<FloatActionButton />);
    expect(screen.queryByTestId("floatActionButton")).toBeTruthy();
  });
});
