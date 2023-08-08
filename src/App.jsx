import Navbar from "./components/navbar";
import LineGraph from "./components/LineGraph";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen bg-gradient-to-b from-black to-purple-800">
        <Navbar />
        <div className="grid min-h-screen grid-cols-2">
          <LineGraph />
          <LineGraph />
          <LineGraph />
          <LineGraph />
        </div>
      </div>
    </>
  );
}

export default App;
