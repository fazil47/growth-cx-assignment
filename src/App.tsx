import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Customers from "./pages/Customers";
import Placeholder from "./pages/Placeholder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customers />} />
          <Route path="placeholder" element={<Placeholder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
