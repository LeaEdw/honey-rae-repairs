export const getAllTickets = async () => {
  const response = await fetch(
    `http://localhost:8088/serviceTickets?_embed=employeeTickets`
  );
  return await response.json();
};

export const assignTicket = async (employeeTicket) => {
  return fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  });
};

export const updateTicket = async (ticket) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

export const deleteTicket = async (ticketId) => {
  const response = await fetch(
    `http://localhost:8088/serviceTickets/${ticketId}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to delete post. Status: ${response.status}`);
  }

  return response;
};

export const createTicket = async (ticket) => {
    const response = await fetch (`http://localhost:8088/serviceTickets/`,{ 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })

    return response.json
}
