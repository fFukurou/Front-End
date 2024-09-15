import { useState } from "react";

export default function CadastroUser(){


  // Define os dados iniciais do formulario
  const [formData, setFormData] = useState({
    cpf: "",
    user: '',
    email: '',
    senha: '',
    idade: 0 
  });

  // Aqui não entendi muito bem ainda, mas meio q lida com as mudanças dos dados
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
  };

  //! Aqui lida com o formulario e tals quando envio ele
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();//* Evita q a página reinicie
    //? Aqui pode colocar mais coisas tipo API ou abrir um modal(Vai ser o que vou fazer)
  };

  return (
    <main>
      <h2>Cadastro</h2>
      <p>Preencha seus dados para cadastrar</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF - Digite apenas números</label>
          <input type="number" //Tira as setinhas do tipo number Luiz
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="Digite Aqui.."
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Nome de Usuário</label>
          <input type="text" 
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Digite Aqui..."
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite Aqui..."
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Senha</label>
          <input type="password" 
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite Aqui..."
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}