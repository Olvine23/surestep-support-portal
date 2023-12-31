 import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import Nav from "./components/Nav";
 

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element= {<DashBoard/>} />

        <Route path="/ticket" element={<TicketPage/>} />

        <Route path="/ticket/:id" element={<TicketPage editMode={true}/>} />



      </Routes>
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
