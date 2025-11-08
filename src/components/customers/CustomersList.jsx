import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../users/User";
import { Link } from "react-router-dom";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // Await the promise returned by getNonStaffUsers
        const customerArray = await getNonStaffUsers();

        // Set the state with the awaited data...
        setCustomers(customerArray);
      } catch (error) {
        console.error("Failed to fetch customers...", error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObject) => {
        return (
          <Link to={`/customers/${customerObject.id}`} key={customerObject.id}>
            <User user={customerObject} />
          </Link>
        );
      })}
    </div>
  );
};
