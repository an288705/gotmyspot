import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ReservationsPage from "../views/ReservationsPage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations/" element={<ReservationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
