import { fireEvent, render, screen } from "@testing-library/react";
import Signup from ".";

const navigateMock = vi.fn();

describe("Testa o componente Signup", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
  }));

  test("Deve haver um título escrito CADASTRE-SE", async () => {
    render(<Signup />);

    const titulo = await screen.findByRole("heading", { level: 3 });

    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveTextContent("CADASTRE-SE");
  });

  test("Deve haver inputs para nome, e-mail, senha e confirmarção de senha", async () => {
    render(<Signup />);

    const inputNome = await screen.findByPlaceholderText("Insira seu nome completo");
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    const inputPassword = await screen.findByPlaceholderText("Insira a senha");
    const inputPasswordConfirm = await screen.findByPlaceholderText("Insira a senha novamente");

    expect(inputNome).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputPasswordConfirm).toBeInTheDocument();
  });

  test("Deve haver um botão de cadastrar na tela", async () => {
    render(<Signup />);

    const botaoCadastrar = await screen.findByRole("button", { name: "Cadastrar" });

    expect(botaoCadastrar).toBeInTheDocument();
    expect(botaoCadastrar).toBeEnabled();
  });

  test("O botão CADASTRE-SE deve redirecionar para a página dashboard ", async () => {
    render(<Signup />);

    const button = await screen.findByRole("button", { name: "Cadastrar" });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
