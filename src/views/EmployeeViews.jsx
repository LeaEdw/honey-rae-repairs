import { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNavBar } from "../components/navigation/EmployeeNavbar";
import { Welcome } from "../components/welcome/welcome";
import { TicketList } from "../components/tickets/TicketList";
import { EmployeesList } from "../components/employees/EmployeesList";
import { CustomerList } from "../components/customers/CustomersList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeeForm } from "../components/forms/EmployeeForms";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";

export const EmployeeViews = ( {currentUser} ) => {
    return (

        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <EmployeeNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
                <Route path="employees">
                    <Route index element={<EmployeesList />} />
                    <Route path=":employeeId" element={<EmployeeDetails />} />
                </Route>
                <Route path="customers">
                    <Route index element={<CustomerList />} />
                    <Route path=":customerId" element={<CustomerDetails />} />
                </Route>
                <Route path="profile" element={<EmployeeForm currentUser={currentUser} />} />
            </Route>
        </Routes>

    );
    
}