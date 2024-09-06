import { render, screen } from "@testing-library/react";
import Dashboard from ".";

describe("Teste do componente dashboard", () => {
  test("Deve haver um título escrito 'Dashboard'", () => {
    render(<Dashboard />);

    const title = screen.getByRole("heading", {
      name: "Dashboard",
    });
    expect(title).toBeInTheDocument();
  });
});
