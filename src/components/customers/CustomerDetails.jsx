import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";
import "./Customers.css"

export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({});
  const { customerId } = useParams();

  useEffect(() => {
    //getCustomerByUserId(customerId): calls the function (from the services module) to make an API call
    getCustomerByUserId(customerId).then((data) => {
        // .then((data) => {...}) handles the promise returned by getCustomerByUserId(customerId)
        const customerObject = data[0]
        // customerObject is set to the only object in the array which is at index '0'
        // since we only match one object from the userId/customerId
        setCustomer(customerObject)
        // the customer info that we are referring to is the one that gets explored below
    })
  }, []);

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email: </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Address:</span>
        {customer.address}
      </div>
      <div className="customer-info">Phone Number: </div>
      {customer.phoneNumber}
    </section>
  );
};
