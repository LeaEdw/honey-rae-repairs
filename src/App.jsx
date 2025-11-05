import "./App.css";
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeesList } from "./components/employees/EmployeesList";
import { NavBar } from "./components/navigation/NavBar";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";
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
        <Route index path="home" element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<EmployeesList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
