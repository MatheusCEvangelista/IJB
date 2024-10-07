import React, { useState } from 'react';
import { createEvento } from '../services/NoticiaService';

const CreateEvento = () => {
  const [formData, setFormData] = useState({
    nome:'',
    dt_publi: '',
    local: '',
    dt_evento: '',
    hr_evento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvento(formData);
      alert('Evento criado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  const limparFormulario = () => {
    setFormData({
      nome:'',
      dt_publi: '',
      local: '',
      dt_evento: '',
      hr_evento: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl mb-4">Criar Evento</h1>
      <input
        name="nome"
        placeholder="Digite o nome do evento"
        value={formData.nome}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="dt_publi"
        placeholder="Data da Publicação"
        value={formData.dt_publi}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="local"
        placeholder="Local do Evento"
        value={formData.local}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="dt_evento"
        placeholder="Data do Evento"
        value={formData.dt_evento}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="hr_evento"
        placeholder="Horário do Evento"
        value={formData.hr_evento}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Criar
      </button>
      <button type="button" onClick={limparFormulario} className="bg-gray-300 text-black px-4 py-2 ml-2">
        Limpar
      </button>
    </form>
  );
};

export default CreateEvento;