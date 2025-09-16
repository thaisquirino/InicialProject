import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria';
  return (
    <div className="App">
      <SayMyName nome="Matheus" />
      <SayMyName nome="joão" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Thaís"
        idade="31"
        profissao="Programador"
        foto="https://via.placeholder"
      />
    </div>
  );
}

export default App;
