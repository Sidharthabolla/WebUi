import logo from './logo.svg';
import HomePage from './components/HomePage';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/form1" exact element={<Form1/>} />
      <Route path="/form2" exact element={<Form2/>} />
    </Routes>
  );
}

export default App;
