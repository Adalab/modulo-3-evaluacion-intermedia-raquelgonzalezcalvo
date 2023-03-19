/* SECCIÓN DE IMPORT */
// import '...styles/App.scss';
import { useState, useEffect } from "react";
// import data from "../data/friends.json";
import "../styles/App.scss";

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [quotes, setQuotes] = useState([]);
  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("todos");
  const [newPhrase, setNewPhrase] = useState({
    quote: "",
    character: "",
  });

  /* EFECTOS (día 5) */
  useEffect(() => {
    fetch(
      "https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  /* FUNCIONES HANDLER */
  const handleQuoteFilter = (ev) => {
    setFilterQuote(ev.target.value);
  };
  const handleCharacterFilter = (ev) => {
    setFilterCharacter(ev.target.value);
  };
  const handleNewPhrase = (ev) => {
    setNewPhrase({ ...newPhrase, [ev.target.id]: ev.target.value });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, newPhrase]);
    setNewPhrase({ quotes: "", character: "" });
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const renderData = () => {
    return quotes
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
        <section className="newPhrase">
          <h2>Añadir una nueva frase</h2>
          <form action="">
            <label htmlFor="phrases">Frase</label>
            <input
              type="text"
              name="phrases"
              id="phrases"
              onChange={handleNewPhrase}
              value={newPhrase.quote}
            />
            <label htmlFor="character">Personaje</label>
            <input
              type="text"
              name="character"
              id="character"
              onChange={handleNewPhrase}
              value={newPhrase.character}
            />
            <input
              type="submit"
              value="Añadir nueva frase"
              onClick={handleClick}
            />
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
