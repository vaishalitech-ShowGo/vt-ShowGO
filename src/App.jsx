import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";  
import AccountDelete from "./pages/AccountDelete"
import JoinCommunity from "./pages/JoinCommunity"
import MembersAdded from "./pages/MembersAdded"
import EventDetails from "./pages/EventDetails"
import BookingConfirmation from "./pages/BookingConfirmation"
import LoginPage from "./pages/LoginSignup"
import AdminPanel from "./pages/AdminPanel";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div style={{ paddingTop: "99px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account-delete" element={<AccountDelete />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/join-community" element={<JoinCommunity />} />
          <Route path="/members-added" element={<MembersAdded />} />
          <Route path="/login-signup" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPanel/>} />
          <Route
            path="/event-details/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
