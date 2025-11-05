import { getEmployeesByUserId } from "../../services/employeeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Employees.css";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    //getEmployeeByUserId(employeeId): calls the function (from the services module) to make an API call
    getEmployeesByUserId(employeeId).then((data) => {
      // .then((data) => {...}) handles the promise returned by getCustomerByUserId(customerId)
      const employeeObject = data[0];
      // customerObject is set to the only object in the array which is at index '0'
      // since we only match one object from the userId/customerId
      setEmployee(employeeObject);
      // the customer info that we are referring to is the one that gets explored below
    });
  });

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty:</span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate: </span>
        {employee.rate}
      </div>
    </section>
  );
};
