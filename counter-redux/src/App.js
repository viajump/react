import "./App.css";
import Counter from "./components/Counter";
import Vote from "./components/Vote";

function App() {
  const votes = ["John", "Bill", "Alex", "James"];
  return (
    <div className="App">
      <Vote />
      <div style={{margin: "30px"}}>
        {votes.map((vote) => {
          return <Counter name={vote} />;
        })}
      </div>
    </div>
  );
}

export default App;
