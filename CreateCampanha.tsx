import React from 'react';

interface SidebarProps {
  username: string;
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ username, handleLogout }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-xl">Olá, {username}!</h2>
        <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <a href="/noticias">Notícias</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="/campanhas/create">Criar Campanha</a>
          </li>
          {/* Adicione mais itens de navegação aqui */}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
