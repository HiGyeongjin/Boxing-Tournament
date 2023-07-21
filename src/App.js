import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Who is the winner?</h1>
      <hr />
      <h2 className="main">
        <span>Boxer 1</span>
        <span>vs</span>
        <span>Boxer 2</span>
      </h2>
      <div>
        <span>Age : </span>
        <input type="number"></input>
        <input type="number"></input>
        <div>
          <span>How Many times win</span>
          <input type="number"></input>
          <input type="number"></input>
        </div>
        <div>
          <span>Arm Reach</span>
          <input type="number"></input>
          <input type="number"></input>
          <button>Check Who's Winning</button>
          <hr />
          <div>winner's name here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
