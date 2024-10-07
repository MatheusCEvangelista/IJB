/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL_NOTICIA = 'http://localhost:3001/noticias';
const API_URL_CAMPANHA = 'http://localhost:3001/campanhas';
const API_URL_EVENTO = 'http://localhost:3001/eventos';
const API_URL_NOVIDADE = 'http://localhost:3001/novidades'; 

export const getNoticias = () => axios.get(API_URL_NOTICIA);
export const createNoticia = (noticia: any) => axios.post(API_URL_NOTICIA, noticia);
export const updateNoticia = (id: string, noticia: any) => axios.put(`${API_URL_NOTICIA}/${id}`, noticia);
export const deleteNoticia = (id: string) => axios.delete(`${API_URL_NOTICIA}/${id}`);

export const getCampanhas = () => axios.get(API_URL_CAMPANHA);
export const createCampanha = (campanha: any) => axios.post(API_URL_CAMPANHA, campanha);
export const updateCampanha = (id: string, campanha: any) => axios.put(`${API_URL_CAMPANHA}/${id}`, campanha);
export const deleteCampanha = (id: string) => axios.delete(`${API_URL_CAMPANHA}/${id}`);

export const getEventos = () => axios.get(API_URL_EVENTO);
export const createEvento = (evento: any) => axios.post(API_URL_EVENTO, evento);
export const updateEvento = (id: string, evento: any) => axios.put(`${API_URL_EVENTO}/${id}`, evento);
export const deleteEvento = (id: string) => axios.delete(`${API_URL_EVENTO}/${id}`);

export const getNovidades = () => axios.get(API_URL_NOVIDADE);
export const createNovidade = (novidade: any) => axios.post(API_URL_NOVIDADE, novidade);
export const updateNovidade = (id: string, novidade: any) => axios.put(`${API_URL_NOVIDADE}/${id}`, novidade);
export const deleteNovidade = (id: string) => axios.delete(`${API_URL_NOVIDADE}/${id}`);

// Função para autenticação de usuário
export const authenticateUser = async (username: string, password: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/users`);
      const users = response.data;
  
      // Verifica se o usuário e senha correspondem a algum usuário na API
      const user = users.find(
        (u: any) => u.username === username && u.password === password
      );
  
      if (user) {
        return user; // Retorna o usuário autenticado
      } else {
        return null; // Retorna null se o usuário não for encontrado
      }
    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      throw new Error('Erro ao conectar à API');
    }
  };