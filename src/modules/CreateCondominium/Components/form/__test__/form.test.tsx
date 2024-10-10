import { render, screen, fireEvent } from "@/__test__/testing-utils";
import CreateCondominiumForm from "../form";
import { Inputs } from "../form.types";

const mockOnSubmit = jest.fn(({ name, address, description, avatar }: Inputs) =>
  Promise.resolve()
);

describe("CreateCondominiumForm component", () => {
  test("renders correctly", () => {
    render(
      <CreateCondominiumForm createCondominium={mockOnSubmit} loading={false} />
    );
    console.log(screen.queryByPlaceholderText("Condominium name"));
    expect(screen.queryByPlaceholderText("Condominium name")).toBeTruthy();
    expect(screen.queryByPlaceholderText("Address")).toBeTruthy();
    expect(screen.queryByPlaceholderText("Description")).toBeTruthy();
  });
});
