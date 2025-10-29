import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import { Ticket } from "./Ticket";
import { FilterBar } from "./TicketFilterBar";
import "./Tickets.css";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergency, setShowEmergency] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Await the promise returned by getAllTickets
        const ticketArray = await getAllTickets();
        // Set both states with the awaited data...
        setAllTickets(ticketArray);
        setFilteredTickets(ticketArray);
      } catch (error) {
        console.error("Failed to fetch tickets:", error)
      }
    }
        // Call the async function immediately ->
        fetchTickets();
  }, []);

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );

      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergency, allTickets]);

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setShowEmergency={setShowEmergency}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObject) => {
          return <Ticket key={ticketObject.id} ticket={ticketObject} />;
        })}
      </article>
    </div>
  );
};
