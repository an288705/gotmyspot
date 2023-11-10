import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHome from "../views/customer/CustomerHome";
import ReservationsPage from "../views/customer/ReservationsPage";
import ProfilePage from "../views/customer/ProfilePage";
import HostHome from "../views/host/HostHome";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/host" element={<HostHome />} />
      </Routes>
    </BrowserRouter>
  );
}
