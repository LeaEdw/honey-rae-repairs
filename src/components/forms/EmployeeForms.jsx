import { useEffect, useState } from "react";
import { getEmployeesByUserId, updateEmployee } from "../../services/employeeService";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate();

  useEffect(() => {
    getEmployeesByUserId(currentUser.id).then((data) => {
        const employeeObject = data[0]
        setEmployee(employeeObject)
    })
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault()
    console.log("clicked")

    const editedEmployee = {
        id: employee.id,
        specialty: employee.specialty,
        rate: employee.rate,
        userId: employee.userId
    }

    updateEmployee(editedEmployee).then(() => {
        navigate(`/employees/${currentUser.id}`)
    })
  }

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty</label>
          <input 
          type="text" 
          required 
          className="form-control" 
          value={employee.specialty}
          onChange={(event) => {
            const copy = { ...employee }
            copy.specialty = event.target.value
            setEmployee(copy)
          }}
          />
        </div>
        <div className="form-group">
          <label>Hourly Rate</label>
          <input 
          type="number" 
          required 
          className="form-control" 
          value={employee.rate}
          onChange={(event) => {
            const copy = {...employee}
            copy.rate = event.target.value
            setEmployee(copy)
          }}
          step={5}
          />
        </div>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
        </div>
      </fieldset>
    </form>
  );
};

// Uncaught TypeError: can't access property "specialty", employee is undefined
// Fix this issue in the next session.