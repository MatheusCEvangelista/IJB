/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCampanhas, updateCampanha } from '../services/NoticiaService';

const UpdateCampanha = () => {
    const { id } = useParams(); // Pega o ID da URL
    const [formData, setFormData] = useState({
    nome: '',
    dt_publi: '',
    objetivo: '',
    dt_inicio: '',
    dt_final: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCampanha = async () => {
            try {
                const response = await getCampanhas(); 
                const campanha = response.data.find((campanha: any) => campanha.id === id);
                if (campanha) {
                    setFormData(campanha);
                }
            } catch (error) {
                console.error('Erro ao carregar campanha:', error);
            }
        };
        fetchCampanha();
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
            await updateCampanha(id!, formData);
            alert('Campanha atualizado com sucesso!');
            navigate('/noticias');
        } catch (error) {
            console.error('Erro ao atualizar campanha:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl mb-4">Atualizar Campanha</h1>
            <input
                name="nome"
                placeholder="Digite o nome da campanha"
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
                name="objetivo"
                placeholder="Objetivo da Campanha"
                value={formData.objetivo}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <input
                name="dt_inicio"
                placeholder="Data de Início"
                value={formData.dt_inicio}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <input
                name="dt_final"
                placeholder="Data Final"
                value={formData.dt_final}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Atualizar
            </button>
        </form>
    );
};

export default UpdateCampanha;