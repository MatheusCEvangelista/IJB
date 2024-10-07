/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNovidades, updateNovidade } from '../services/NoticiaService';

const UpdateNovidade = () => {
    const { id } = useParams(); // Pega o ID da URL
    const [formData, setFormData] = useState({
        nome:'',
    dt_publi: '',
    categoria: '',
    origem: '',
    destaque: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNovidade = async () => {
            try {
                const response = await getNovidades(); 
                const novidade = response.data.find((novidade: any) => novidade.id === id);
                if (novidade) {
                    setFormData(novidade);
                }
            } catch (error) {
                console.error('Erro ao carregar novidade:', error);
            }
        };
        fetchNovidade();
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
            await updateNovidade(id!, formData);
            alert('Novidade atualizado com sucesso!');
            navigate('/noticias');
        } catch (error) {
            console.error('Erro ao atualizar novidade:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl mb-4">Atualizar Novidade</h1>
            <input
                name="nome"
                placeholder="Digite o nome da novidade"
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
                placeholder="Destaque"
                value={formData.destaque}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Atualizar
            </button>
        </form>
    );
};

export default UpdateNovidade;