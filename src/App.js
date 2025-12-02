import { useState } from "react";
import "./App.css";

function App() {
  
  const [books, setBooks] = useState([
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski", genre: 1, rating: 3 },
    { id: 2, title: "Zaginiona", author: "Gillian Flynn", genre: 2, rating: 4 },
    { id: 3, title: "Kosmos", author: "Carl Sagan", genre: 3, rating: 5 },
    { id: 4, title: "Hobbit", author: "J.R.R. Tolkien", genre: 1, rating: 2 }
  ]);

  
  const [showGenres, setShowGenres] = useState({
    1: true,
    2: true,
    3: true
  });

  const toggleGenre = (genre) => {
    setShowGenres({ ...showGenres, [genre]: !showGenres[genre] });
  };

  const addStar = (id) => {
    setBooks(
      books.map(b =>
        b.id === id ? { ...b, rating: Math.min(5, b.rating + 1) } : b
      )
    );
  };

  const stars = (num) => "★★★★★☆☆☆☆☆".slice(5 - num, 10 - num);

  return (
    <div style={{ padding: 20 }}>
      <h1>Biblioteka cyfrowa</h1>

      {/* SWITCHES */}
      <label>
        <input type="checkbox"
          checked={showGenres[1]}
          onChange={() => toggleGenre(1)}
        /> Fantastyka
      </label>

      <label style={{ marginLeft: 20 }}>
        <input type="checkbox"
          checked={showGenres[2]}
          onChange={() => toggleGenre(2)}
        /> Kryminał
      </label>

      <label style={{ marginLeft: 20 }}>
        <input type="checkbox"
          checked={showGenres[3]}
          onChange={() => toggleGenre(3)}
        /> Popularnonaukowa
      </label>

      {/* GRID */}
      <div style={{
        marginTop: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 20
      }}>
        {books
          .filter(book => showGenres[book.genre])
          .map(book => (
            <div key={book.id}
              style={{
                padding: 15,
                border: "1px solid #ccc",
                borderRadius: 8
              }}
            >
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              <div style={{ fontSize: 20 }}>{stars(book.rating)}</div>
              <button onClick={() => addStar(book.id)}>Dodaj gwiazdkę</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
