import { useEffect, useState } from "react"
import { getStaffUsers } from "../../services/userServices"
import { User } from "../users/User"
import "./Employees.css"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Await the promise returned by getStaffUsers...
                const employeesArray = await getStaffUsers();

                // Set the state with the awaited data... 
                setEmployees(employeesArray);
            } catch (error) {
                console.error("Failed to fetch customers...", error)
            }
        } 
        fetchEmployees()
    }, []);

    return (
        <div className="employees">
            {employees.map(employeeObject => {
                return <User key={employeeObject.id} user={employeeObject} />
            })}
        </div>
    )
}