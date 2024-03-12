import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OwnerManagement from "./pages/OwnerManagement";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import LanguagePreference from "./pages/LanguagePreference";
import AddOwner from "./pages/AddOwner";
import EditOwnerChain from "./pages/EditOwnerChain";
import EditOwnerGarage from "./pages/EditOwnerGarage";
import ChainManagement from "./pages/ChainManagement";
import ChainManagementEditScreen from "./pages/ChainManagementEditScreen";
import GarageManagement from "./pages/GarageManagement";
import GarageManagementEditScreen from "./pages/GarageManagementEditScreen";
import Vehicles from "./pages/Vehicles";
import VehiclesList from "./pages/VehiclesList";
import AddGarage from "./pages/AddGarage";
import AddChain from "./pages/AddChain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/language-preference":
        title = "";
        metaDescription = "";
        break;
      case "/add-owner":
        title = "";
        metaDescription = "";
        break;
      case "/edit-owner-chain":
        title = "";
        metaDescription = "";
        break;
      case "/edit-owner-garage":
        title = "";
        metaDescription = "";
        break;
      case "/chain-management":
        title = "";
        metaDescription = "";
        break;
      case "/chain-management-edit-screen":
        title = "";
        metaDescription = "";
        break;
      case "/garage-management":
        title = "";
        metaDescription = "";
        break;
      case "/garage-management-edit-screen":
        title = "";
        metaDescription = "";
        break;
      case "/vehicles":
        title = "";
        metaDescription = "";
        break;
      case "/vehicles-list":
        title = "";
        metaDescription = "";
        break;
      case "/add-garage":
        title = "";
        metaDescription = "";
        break;
      case "/add-chain":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OwnerManagement />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/language-preference" element={<LanguagePreference />} />
      <Route path="/add-owner" element={<AddOwner />} />
      <Route path="/edit-owner-chain" element={<EditOwnerChain />} />
      <Route path="/edit-owner-garage" element={<EditOwnerGarage />} />
      <Route path="/chain-management" element={<ChainManagement />} />
      <Route
        path="/chain-management-edit-screen"
        element={<ChainManagementEditScreen />}
      />
      <Route path="/garage-management" element={<GarageManagement />} />
      <Route
        path="/garage-management-edit-screen"
        element={<GarageManagementEditScreen />}
      />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles-list" element={<VehiclesList />} />
      <Route path="/add-garage" element={<AddGarage />} />
      <Route path="/add-chain" element={<AddChain />} />
    </Routes>
  );
}
export default App;
