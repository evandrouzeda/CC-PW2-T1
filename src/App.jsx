import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Menu from './Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ativo from './componentes/Ativo/Ativo'
import Login from './componentes/Login/Login'
import Carteira from './componentes/Carteira/Carteira'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ativos" element={<Ativo />} />
        <Route exact path="/carteira" element={<Carteira />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
