import React, { useState } from 'react';
import { createNovidade } from '../services/NoticiaService';


const CreateNovidade = () => {
  const [formData, setFormData] = useState({
    nome:'',
    dt_publi: '',
    categoria: '',
    origem: '',
    destaque: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await createNovidade(formData);
      alert('Novidade criado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  const limparFormulario = () => {
    setFormData({
      nome:'',
      dt_publi: '',
      categoria: '',
      origem: '',
      destaque: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl mb-4">Criar Novidade</h1>
      <input
        name="nome"
        placeholder="Digite o nome da novidade"
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
        name="categoria"
        placeholder="Categoria da novidade"
        value={formData.categoria}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="origem"
        placeholder="Origem"
        value={formData.origem}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full"
      />
      <input
        name="destaque"
        placeholder="Destaque da Novidade"
        value={formData.destaque}
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

export default CreateNovidade;