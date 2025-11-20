import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/welcome";
import { CustomerNavBar } from "../components/navigation/CustomerNavbar";
import { TicketList } from "../components/tickets/TicketList";

export const CustomerViews = ( {currentUser} ) => {
    return (
        <Routes>
            <Route 
                path="/"
                element={
                    <>
                        <CustomerNavBar />
                        <Outlet/>
                    </>
                }>
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList currentUser={currentUser} />}/>
            </Route>
        </Routes>
    );
}