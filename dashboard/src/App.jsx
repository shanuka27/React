import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Sales from "./components/Sales";
import Stokes from "./components/Stokes";
import AddQuotation from "./components/AddQuotation";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="addquotation" element={<AddQuotation />} />
            <Route path="sales" element={<Sales/>}/>
            <Route path="stokes" element={<Stokes/>}/>
          </Route>
          <Route>
          <Route path="login" element={<div>this is login page</div>}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
