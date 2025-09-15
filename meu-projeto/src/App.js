import './App.css';
import HelloWord from './components/HelloWorld';

function App() {
  const name = 'Thais';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://picsum.photos/150';

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <p>Meu Primeiro App</p>
      <p>Olá,{newName} </p>
      <p>Soma:{sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWord />
    </div>
  );
}

export default App;
