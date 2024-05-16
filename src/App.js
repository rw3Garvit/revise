import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="col-md-12 row">
        <div className="col-md-4">
          <Card title="this is card 1" desc="this is card 1 desc" />
        </div>
        <div className="col-md-4">
          <Card title="this is card 2" desc="this is card 2 desc" />
        </div>
        <div className="col-md-4">
          <Card title="this is carsd 3" desc="this is card 3desc" />
        </div>
      </div>
    </>
  );
}

export default App;
