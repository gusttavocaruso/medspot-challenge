import React from 'react';

export const CadastroPaciente = () => {
  return (
    <form action="submit" className="formulario-cadastro">

      <h2>Cadastro Paciente</h2>

      <label htmlFor="nome-paciente">
        NOME:
        <input type="text" id="nome-paciente" />
      </label>

      <label htmlFor="fone-paciente">
        CELULAR:
        <input type="text" id="fone-paciente" />
      </label>

      <label htmlFor="email-paciente">
        EMAIL:
        <input type="text" id="email-paciente" />
      </label>

      <label htmlFor="fone-paciente">
        DATA NASCIMENTO:
        <input type="date" id="fone-paciente" />
      </label>

    </form>
  )
}
