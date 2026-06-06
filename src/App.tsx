import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Reservations from "./components/reservation";
import Contact from "./components/contact";
import ReservationConfirm from "./components/confirm";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-yellow-100">
        
        <Header />

        <main className="flex-grow">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/reservations" element={<Reservations />} />

            <Route path="/confirm" element={<ReservationConfirm />} />
            
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;