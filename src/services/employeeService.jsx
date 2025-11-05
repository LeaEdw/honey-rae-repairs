export const getAllEmployees = async () => {
    const response = await fetch(`http://localhost:8088/employees?_expand=user`)
    return await response.json();
}

export const getEmployeesByUserId = async (userId) => {
    const response = await fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user`)
    return await response.json()
}