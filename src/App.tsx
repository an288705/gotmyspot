import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";
import RoutesProvider from "./configs/RoutesProvider";
import { CustomerModel } from "./models/CustomerModel";
import { CustomerContext } from "./controllers/contexts";

function App() {
  const customer = new CustomerModel();
  return (
    <CustomerContext.Provider value={customer}>
      <div className="App">
        <RoutesProvider />
      </div>
    </CustomerContext.Provider>
  );
}

export default App;
