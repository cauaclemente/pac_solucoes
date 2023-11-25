import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './pages/home';
import Fotos from './components/fotos/fotos'
import Header from './components/header/header';
import Empresa from './components/empresa/empresa';
import Formulario from './components/contato/formulario'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

