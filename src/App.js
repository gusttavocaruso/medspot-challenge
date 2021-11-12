import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Agendamento } from "./pages/Agendamento";
import { Provider } from './context/Provider';
import './App.css';
import { Consultas } from "./pages/Consultas";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Agendamento/>} />
          <Route path="/consultas" element={<Consultas/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
