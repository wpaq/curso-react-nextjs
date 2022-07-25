import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("<Button />", () => {
  it("Should render the button with the text", () => {
    render(<Button text="Load More" />);
    expect.assertions(1);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("Should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("Should be disabled when disabled is true", () => {
    render(<Button text="Load More" disabled={true} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it("Should be enabled when disabled is false", () => {
    render(<Button text="Load More" disabled={false} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeEnabled();
  });
});
