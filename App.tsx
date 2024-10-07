import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NoticiaList from './pages/NoticiaList';
import CreateCampanha from './pages/CreateCampanha';
import UpdateCampanha from './pages/UpdateCampanha';
import CreateEvento from './pages/CreateEvento';
import UpdateEvento from './pages/UpdateEvento';
import CreateNovidade from './pages/CreateNovidade';
import UpdateNovidade from './pages/UpdateNovidade';
import Login from './pages/Login';


const App = () => {
  const [user, setUser] = useState<string | null>(null); // Estado para armazenar o usuário logado

  // Função de logout
  const handleLogout = () => {
    setUser(null); // Limpa o estado do usuário
  };

  return (
    <Router>
      <div className="flex">
        {user ? <Sidebar username={user} handleLogout={handleLogout} /> : null} {/* Exibe a Sidebar se o usuário estiver logado */}
        <div className="flex-grow p-5">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/noticias" /> : <Login setUser={setUser} />} />
            <Route path="/noticias" element={user ? <NoticiaList /> : <Navigate to="/" />} />
            <Route path="/campanhas/create" element={user ? <CreateCampanha /> : <Navigate to="/" />} />
            <Route path="/campanhas/update/:id" element={user ? <UpdateCampanha /> : <Navigate to="/" />} />
            <Route path="/eventos/create" element={user ? <CreateEvento /> : <Navigate to="/" />} />
            <Route path="/eventos/update/:id" element={user ? <UpdateEvento /> : <Navigate to="/" />} />
            <Route path="/novidades/create" element={user ? <CreateNovidade /> : <Navigate to="/" />} />
            <Route path="/novidades/update/:id" element={user ? <UpdateNovidade /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;