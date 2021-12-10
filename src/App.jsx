import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Menu from './Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Livro from './componentes/Livro'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/livros" element={<Livro />} />
      </Routes>
    </Router>
  );
}

export default App;
