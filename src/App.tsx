import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import DeletarCategoria from './components/categoria/deletarCategoria/deletarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import CadastroCategoria from './components/categoria/cadastroCategoria/cadastroCategoria';
import CadastroProd from './components/produtos/cadastroProd/CadastroProd';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import ListaCategoria from './components/categoria/listaCategoria/listaCategoria';
import store from './store/Store';
import 'react-toastify/dist/ReactToastify.css';
import SobreNos from './paginas/sobreNos/SobreNos';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div style={{ minHeight: '100vh' }}>
          <Routes>

          <Route path="/sobrenos" element={<SobreNos/>} />

            <Route path="/Home" element={<Home />} />
        
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/Categoria" element={<ListaCategoria />} />

            <Route path="/produto" element={<ListaProduto />} />

            <Route path="/formularioProduto" element={<CadastroProd />} />

            <Route path="/formularioProduto/:id" element={<CadastroProd />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />


          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;