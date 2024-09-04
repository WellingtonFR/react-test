import { render, screen } from "@testing-library/react";
import Login from ".";

describe("Teste do componente de login", () => {
  test("1+1 deve ser 2"),
    () => {
      const sum = 1 + 1;
      expect(sum).toBe(2);
    };

  test("Deve haver um título escrito 'SIGN IN'", () => {
    render(<Login />);

    const title = screen.getByRole("heading", {
      name: "LOGIN",
    });
    expect(title).toBeInTheDocument();
  });

  test("Deve conter dois inputs na tela", () => {
    render(<Login />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);
  });

  test("Deve conter um botao com o texto 'ENTRAR'", () => {
    render(<Login />);

    const button = screen.getByRole("button");
    const buttonText = screen.getByRole("button", {
      name: "ENTRAR",
    });

    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
