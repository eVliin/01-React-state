import "./styles.css";
import morango from "../public/assets/morango.png";

export default function App() {
  return (
    <div className="App">
      <h1>Evelyn</h1>
      <h2>{2021 - 2004}</h2>
      <h3>massas</h3>
      <ul>
        <li>Mixed messages</li>
        <li>5/4</li>
        <li>online oversight</li>
      </ul>
      <img src={morango} />
    </div>
  );
}
