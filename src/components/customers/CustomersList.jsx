import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userServices"
import { User } from "../../users/User"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                // Await the promise returned by getNonStaffUsers
                const customerArray = await getNonStaffUsers();

                // Set the state with the awaited data... 
                setCustomers(customerArray);
            } catch (error) {
                console.error("Failed to fetch customers...", error)
            }
        }
        fetchCustomers();
    }, []);

    return (
        <div className="customers">
            {customers.map(customerObject => {
                return <User key={customerObject.id} user={customerObject} />
            })}
        </div>
    )
}