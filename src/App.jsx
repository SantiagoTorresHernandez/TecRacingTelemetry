import Navbar from "./components/navbar";
import Graph1 from "./components/graphs_container";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen bg-gradient-to-b from-black to-purple-800">
        <Navbar />
        <div className="grid min-h-screen grid-cols-2">
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
          <Graph1 />
        </div>
      </div>
    </>
  );
}

export default App;
