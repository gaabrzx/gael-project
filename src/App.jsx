import Card from "./Card.jsx";
import Header from "./Header.jsx";
import "./App.scss";

function App() {
  return (
    <main>
      <Header />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default App;
