import "./App.css";
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeesList } from "./components/employees/EmployeesList";
import { NavBar } from "./components/Nav/NavBar";
import { Welcome } from "./components/welcome/welcome";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index path="home"element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeesList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
