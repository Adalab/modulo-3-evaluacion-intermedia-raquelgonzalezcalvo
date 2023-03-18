/* SECCIÓN DE IMPORT */
// import '...styles/App.scss';
import { useState } from "react";
import data from "../data/friends.json";
import "../styles/App.scss";

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  // const [quotes, setQuotes] = useState(data);

  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("todos");
  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */
  const handleQuoteFilter = (ev) => {
    setFilterQuote(ev.target.value);
  };
  const handleCharacterFilter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderData = () => {
    return data
      .filter((eachData) => {
        return eachData.quote
          .toLocaleLowerCase()
          .includes(filterQuote.toLocaleLowerCase());
      })
      .filter((eachData) => {
        if (filterCharacter !== "todos") {
          return (
            eachData.character.toLocaleLowerCase() ===
            filterCharacter.toLocaleLowerCase()
          );
        } else {
          return eachData;
        }
      })
      .map((eachData, i) => (
        <li className="li" key={i}>
          <p className="li-quote">{eachData.quote}</p>
          <p className="li-quote">{eachData.character}</p>
        </li>
      ));
  };

  /* HTML */
  return (
    <div className="App">
      <header className="header">
        <h1>Frases de Friends</h1>
      </header>
      <main className="main">
        <section className="search">
          <form action="">
            <label htmlFor="phrases">Filtrar por frase</label>
            <input
              type="text"
              name="phrases"
              id="phrases"
              placeholder="Ej:Introduce una palabra"
              value={filterQuote}
              onChange={handleQuoteFilter}
            />
            <label htmlFor="character">Filtrar por personaje:</label>
            <select
              name="character"
              id="character"
              value={filterCharacter}
              onChange={handleCharacterFilter}
            >
              <option value="todos">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
          </form>
        </section>
      </main>
      <ul>{renderData()}</ul>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
