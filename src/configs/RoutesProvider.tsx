import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellParkingPage from "../views/SellParkingPage";
import CustomerHome from "../views/customer/CustomerHome";
import HomePage from "../views/customer/HomePage";
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import HostSignIn from "../views/auth/HostSignIn";
import HostSignUp from "../views/auth/HostSignUp";
import ReservationsPage from "../views/customer/ReservationsPage";
import ProfilePage from "../views/customer/ProfilePage";
import HostHome from "../views/host/HostHome";
import HostProfilePage from "../views/host/HostProfilePage";

export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerHome page={<HomePage />} />} />
        <Route path="/sell-parking" element={<SellParkingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/host-sign-in" element={<HostSignIn />} />
        <Route path="/host-sign-up" element={<HostSignUp />} />
        <Route
          path="/reservations"
          element={<CustomerHome page={<ReservationsPage />} />}
        />
        <Route
          path="/profile"
          element={<CustomerHome page={<ProfilePage />} />}
        />
        <Route path="/host" element={<HostHome />} />
        <Route path="/host/profile" element={<HostProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
