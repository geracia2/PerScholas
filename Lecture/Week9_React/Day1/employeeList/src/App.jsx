import "./App.css";
import HomePage from './pages/HomePage/components/HomePage'
import EmployeeShowcase from './pages/EmployyeShowcase/components/EmployeeShowcase'
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EmployeeShowcase/:id" element={<EmployeeShowcase />} />
      </Routes>
    </>
  );
}
