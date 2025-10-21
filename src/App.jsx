import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./App.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);

  const [showEmergency, setShowEmergency] = useState(false);

  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    // Call the service function to the the data...

    getAllTickets().then((ticketArray) => {
      setAllTickets(ticketArray); //1. Set the overall list of tickets

      setFilteredTickets(ticketArray); // Set the list to be displayed initially.
    });
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

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>

      <div>
        <div className="btn-container">
          <button
            className="filter-btn btn-warning"
            onClick={() => setShowEmergency(true)}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-info"
            onClick={() => setShowEmergency(false)} // This resets the filter
          >
            Show All
          </button>
        </div>
      </div>

      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header className="ticket-info">Ticket #{ticket.id}</header>

              <div>{ticket.description}</div>

              <footer>
                <div>
                  <div className="ticket-info">Emergency</div>

                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          );
        })}
      </article>
    </div>
  );
};

