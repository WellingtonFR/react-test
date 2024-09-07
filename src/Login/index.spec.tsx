import { fireEvent, render, RenderResult, screen } from "@testing-library/react";
import Login from ".";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const renderWithRouter = (ui: React.ReactElement): RenderResult => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("Teste do componente de login", () => {
  test("1+1 deve ser 2", () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });

  test("Deve haver um título escrito 'SIGN IN'", () => {
    renderWithRouter(<Login />);

    const title = screen.getByRole("heading", {
      name: "LOGIN",
    });
    expect(title).toBeInTheDocument();
  });

  test("Deve conter um input para inserir o e-mail", () => {
    renderWithRouter(<Login />);

    const inputEmail = screen.getByPlaceholderText("Insira seu e-mail");
    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve conter um input para inserir a senha", () => {
    renderWithRouter(<Login />);

    const inputPassword = screen.getByPlaceholderText("Insira sua senha");

    expect(inputPassword).toBeInTheDocument();
  });

  test("Deve conter um botao com o texto 'ENTRAR'", () => {
    renderWithRouter(<Login />);

    const button = screen.getByRole("button", { name: "ENTRAR" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("ENTRAR");
  });

  test("Deve conter um botao com o texto 'Não possui cadastro?'", () => {
    renderWithRouter(<Login />);

    const link = screen.getByRole("link", { name: "Não possui cadastro?" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/signup");
  });

  test("O botão ENTRAR deve redirecionar para a página dashboard ", () => {
    renderWithRouter(<Login />);

    const button = screen.getByRole("button", { name: "ENTRAR" });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/dashboard");
  });

  test("Deve chamar handleSubmit ao submeter o formulário", () => {
    renderWithRouter(<Login />);

    const form = screen.getByTestId("login-form");
    fireEvent.submit(form);

    expect(navigateMock).toHaveBeenCalledWith("/dashboard");
  });
});
