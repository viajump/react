import "./App.css";
import Counter from "./components/Counter";
import Votes from "./components/Vote";

function App() {
  const staff = ["John Bond", "Roy John", "Albert Henry", "Anthony Ray"];
  return (
    <div className="App">
      <Votes />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {staff.map((staffdata) => {
          return <Counter name={staffdata} />;
        })}
      </div>
    </div>
  );
}

export default App;
