import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHome from "../views/customer/CustomerHome";
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import HostSignUp from "../views/auth/HostSignUp";
import ReservationsPage from "../views/customer/ReservationsPage";
import ProfilePage from "../views/customer/ProfilePage";
import HostHome from "../views/host/HostHome";
import HostProfilePage from "../views/host/HostProfilePage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/host-sign-up" element={<HostSignUp />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/host" element={<HostHome />} />
        <Route path="/host/profile" element={<HostProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
