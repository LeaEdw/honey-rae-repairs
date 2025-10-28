 export const FilterBar = ({ setShowEmergency, setSearchTerm }) => {
    return (
         <div className="filter-bar">
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
      </div>
    )
 }
 
