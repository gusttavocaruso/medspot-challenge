import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Schedule } from "./pages/Schedule";
import { Provider } from './context/Provider';
import './App.css';
import { Appointments } from "./pages/Appointments";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/consultas" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
