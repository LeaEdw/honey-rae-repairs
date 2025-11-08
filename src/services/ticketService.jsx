export const getAllTickets = async () => {
    const response = await fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`)
    return await response.json()
}

export const assignTicket = async (employeeTicket) => {
    return fetch("http://localhost:8088/employeeTickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeTicket),
    })
}

export const updateTicket = async (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}
