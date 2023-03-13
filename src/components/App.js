/* SECCIÓN DE IMPORT */
// import '...styles/App.scss';
import { useState } from 'react';
import data from '../data/friends.json';

//import useState

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() { 
  /* VARIABLES ESTADO (DATOS) */
 const [quotes, setQuotes] = useState (data);
 console.log(data);
const [filterQuote, setFilterQuote] = useState('');
  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */
const handleQuoteFilter = (ev) => {
  setFilterQuote(ev.target.value)
}
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App"> 
    
    <header className="header">
        <h1>Frases de Friends</h1>
      </header>
      <main className="main">
        <section className="search">
          <form action="">
            <label htmlFor="phrases">Filtrar por frase</label>
            <input type="text" name="phrases" id="phrases" placeholder='Ej:Introduce una palabra'  onChange={handleQuoteFilter} />
            <label htmlFor="character">Filtrar por personaje:</label>
            <select name="character" id="character" >
              <option value="">Todos</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </form>
        </section>
        </main>
        </div>
        
    }
    
    
    


/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
