import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";
import { User } from "../users/User";
import { Link } from "react-router-dom";
import "./Employees.css";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // Await the promise returned by getStaffUsers...
        const employeesArray = await getStaffUsers();

        // Set the state with the awaited data...
        setEmployees(employeesArray);
      } catch (error) {
        console.error("Failed to fetch customers...", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObject) => {
        return (
          <Link to={`/employees/${employeeObject.id}`} key={employeeObject.id}>
            <User  user={employeeObject} />
          </Link>
        );
      })}
    </div>
  );
};
