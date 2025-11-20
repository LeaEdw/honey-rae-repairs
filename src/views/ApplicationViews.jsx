import { Routes, Route, Outlet } from "react-router-dom";
import { EmployeeNavBar } from "../components/navigation/EmployeeNavbar";
import { Welcome } from "../components/welcome/welcome";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { EmployeesList } from "../components/employees/EmployeesList";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomersList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForms";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser}/>
  );
};
