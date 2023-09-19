import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

//Acá se almacena como tal el contenido
// El container se lo trae de @mui y es el contenedor principal
//traemos tambien el botón