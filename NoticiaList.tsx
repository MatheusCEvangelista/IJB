/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getCampanhas, deleteCampanha } from '../services/NoticiaService';
import { getEventos, deleteEvento } from '../services/NoticiaService';
import { getNovidades, deleteNovidade } from '../services/NoticiaService';
import { useNavigate } from 'react-router-dom';

const NoticiaList = () => {
  const [campanhas, setCampanhas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [novidades, setNovidades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCampanhas().then(response => {
      setCampanhas(response.data);
    });
    getEventos().then(response => {
      setEventos(response.data);
    });
    getNovidades().then(response => {
      setNovidades(response.data);
    });
  }, []);

  const handleDeleteC = async (id: string) => {
    try {
      await deleteCampanha(id);
      setCampanhas(campanhas.filter((noticia: any) => noticia.id !== id));
      alert('Notícia removido com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar notícia:', error);
    }
  };
  const handleUpdateC = (id: string) => {
    navigate(`/campanhas/update/${id}`);
  };

  const handleDeleteE = async (id: string) => {
    try {
      await deleteEvento(id);
      setEventos(eventos.filter((evento: any) => evento.id !== id));
      alert('Evento removido com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar evento:', error);
    }
  };
  const handleUpdateE = (id: string) => {
    navigate(`/eventos/update/${id}`);
  };

  const handleDeleteN = async (id: string) => {
    try {
      await deleteNovidade(id);
      setNovidades(novidades.filter((novidades: any) => novidades.id !== id));
      alert('Novidade removido com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar novidade:', error);
    }
  };
  const handleUpdateN = (id: string) => {
    navigate(`/novidades/update/${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Lista de Notícias</h1>
      <h1 className="text-2xl mb-4">Campanha</h1>
      <ul>
        {campanhas.map((campanha: any) => (
          <li key={campanha.id} className="mb-2 flex justify-between border-b border-gray-300 pb-2">
            <div>
              <p className="mb-2 flex justify-between pb-2">
                Nome: {campanha.nome} | Objetivo: {campanha.objetivo} | Data da publicação: {campanha.dt_publi}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleUpdateC(campanha.id)}
                className="bg-blue-500 text-white px-1 py-1 ml-4 mr-2 text-xs"
              >
                Atualizar
              </button>
              <button
                onClick={() => handleDeleteC(campanha.id)}
                className="bg-red-500 text-white px-1 py-1 text-xs"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-2xl mb-4">Evento</h1>
      <ul>
        {eventos.map((evento: any) => (
          <li key={evento.id} className="mb-2 flex justify-between border-b border-gray-300 pb-2">
            <div>
              <p className="mb-2 flex justify-between pb-2">
                Nome: {evento.nome} | Local do evento: {evento.local} | Data da publicação: {evento.dt_publi}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleUpdateE(evento.id)}
                className="bg-blue-500 text-white px-1 py-1 ml-4 mr-2 text-xs"
              >
                Atualizar
              </button>
              <button
                onClick={() => handleDeleteE(evento.id)}
                className="bg-red-500 text-white px-1 py-1 text-xs"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-2xl mb-4">Novidade</h1>
      <ul>
        {novidades.map((novidade: any) => (
          <li key={novidade.id} className="mb-2 flex justify-between border-b border-gray-300 pb-2">
            <div>
              <p className="mb-2 flex justify-between pb-2">
                Nome: {novidade.nome} | Categotia: {novidade.categoria} | Data da publicação: {novidade.dt_publi}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleUpdateN(novidade.id)}
                className="bg-blue-500 text-white px-1 py-1 ml-4 mr-2 text-xs"
              >
                Atualizar
              </button>
              <button
                onClick={() => handleDeleteN(novidade.id)}
                className="bg-red-500 text-white px-1 py-1 text-xs"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticiaList;