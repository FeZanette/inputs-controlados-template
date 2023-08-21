import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  // PASSO 1: declarar um estado para armazenar o valor do input
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // PASSO 3: criar uma função de onChange
  const alterarNome = (event) => {
    setNome(event.target.value);
  };

  function alterarIdade(event) {
    setIdade(event.target.value);
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

  // const imprimirValoresDosInputs = (event) => {
  //   event.preventDefault();
  //   console.log(nome, idade, estadoCivil);
  // };

  const limparInputs = (event) => {
    event.preventDefault();
    setNome("");
    setIdade("");
    setEmail("");
    setSenha("");
    setEstadoCivil("Nenhum");
    console.log(nome, idade, estadoCivil, email, senha);
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          {/* PASSO 2: adicionar a variável de estado no value do input */}
          <Input value={nome} onChange={alterarNome} placeholder="Nome" />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={alterarIdade} placeholder="Idade" />
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={alterarEmail} placeholder="E-mail" />
        </label>
        <label>
          Senha:
          <Input
            type="password"
            value={senha}
            onChange={alterarSenha}
            placeholder="Senha"
          />
        </label>
        <label>
          Estado civil:
          <br />
          {/* Outra forma de escrever a função no próprio onChange */}
          <select
            value={estadoCivil}
            onChange={(e) => {
              setEstadoCivil(e.target.value);
            }}
          >
            <option>Nenhum</option>
            <option>Solteira(o)</option>
            <option>Casada(o)</option>
            <option>Viúva(o)</option>
            <option>Divorciada(o)</option>
          </select>
        </label>
        {/* <button onClick={imprimirValoresDosInputs}>Enviar dados</button> */}
        <button onClick={limparInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
