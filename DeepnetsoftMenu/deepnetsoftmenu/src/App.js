import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavOptions from './NavOptions/NavOptions';
import Food from './Food/Food';
import Addnewfood from './Addnewfood/Addnewfood';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import FooterInfo from './FooterInfo/FooterInfo';
import ItemManagement from './ItemManagement/ItemManagement';
import AdminLogIn from './AdminLogIn/AdminLogIn';
import Drink from './Drinks/Drinks'
import Brunch from './Brunch/Brunch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLogIn />} />
        <Route path="/" element={<NavOptions />} />
        <Route path="Food" element={<Food />} />
        <Route path="Drink" element={<Drink />} />
        <Route path="Brunch" element={<Brunch />} />
        <Route path="FooterInfo" element={<FooterInfo />} />
        <Route path="CompanyInfo" element={<CompanyInfo />} />
         <Route path="AdminLogIn" element={<AdminLogIn />} />
        <Route path="Addnewfood" element={<Addnewfood />} />
        <Route path="ItemManagement" element={<ItemManagement />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
