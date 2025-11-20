import { useNavigate } from "react-router-dom";

export const FilterBar = ({ setShowEmergency, setSearchTerm, currentUser, setShowOpenOnly }) => {
const navigate = useNavigate()

  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
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
            <input
              onChange={(event) => setSearchTerm(event.target.value)}
              type="text"
              placeholder="Search Tickets ..."
              className="ticket-search"
            ></input>
          </div>
        </>
      ) : (
        <>
          <button 
            className="filter-btn btn-primary"
            onClick={() => {navigate("/tickets/create")}}>
              Create Ticket
            </button>
          <button 
            className="filter-btn btn-info"
            onClick={() =>{setShowOpenOnly(true)}}>Open Tickets</button>
          <button   
            className="filter-btn btn-secondary"
            onClick={() => {setShowOpenOnly(false)}}>All My Tickets</button>
        </>
      )}
    </div>
  );
};
