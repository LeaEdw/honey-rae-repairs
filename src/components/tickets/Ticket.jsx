import { useState, useEffect } from "react";
import { getAllEmployees } from "../../services/employeeService";

export const Ticket = ({ ticket }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Await the promise returned by getAllEmployees
        const employeesArray = await getAllEmployees();

        // Set the state with the awaited data...
        setEmployees(employeesArray);
      } catch (error) {
        console.error("Failed to fetch tickets...", error)
      }
    }
    fetchTickets()
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    )
    setAssignedEmployee(foundEmployee)
  }, [employees, ticket]);

  return (
    <section className="ticket" key={ticket.id}>
      <header className="ticket-info">#{ticket.id}</header>

      <div>{ticket.description}</div>

      <footer>
        <div>
            <div className="ticket-info">Assignee</div>
                <div>{assignedEmployee ? assignedEmployee.user?.fullName: "None"}</div>
            
          <div className="ticket-info">Emergency</div>

          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};
