/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventos, updateEvento } from '../services/NoticiaService';

const UpdateEvento = () => {
    const { id } = useParams(); // Pega o ID da URL
    const [formData, setFormData] = useState({
    nome:'',
    dt_publi: '',
    local: '',
    dt_evento: '',
    hr_evento: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await getEventos(); 
                const evento = response.data.find((evento: any) => evento.id === id);
                if (evento) {
                    setFormData(evento);
                }
            } catch (error) {
                console.error('Erro ao carregar evento:', error);
            }
        };
        fetchEvento();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        try {
            await updateEvento(id!, formData);
            alert('Evento atualizado com sucesso!');
            navigate('/noticias');
        } catch (error) {
            console.error('Erro ao atualizar evento:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl mb-4">Atualizar Evento</h1>
            <input
                name="nome"
                placeholder="Digite o nome do evento"
                value={formData.nome}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <input
                name="dt_publi"
                placeholder="Data da publicação"
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
                placeholder="Horário do evento"
                value={formData.hr_evento}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Atualizar
            </button>
        </form>
    );
};

export default UpdateEvento;