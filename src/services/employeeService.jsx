export const getAllEmployees = async () => {
    const response = await fetch(`http://localhost:8088/employees?_expand=user`)
    return await response.json();
}

export const getEmployeesByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${userId}`)
    return await response.json()
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/JSON"
        }, 
        body: JSON.stringify(employee)
    })
}