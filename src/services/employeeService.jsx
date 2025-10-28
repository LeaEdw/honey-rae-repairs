export const getAllEmployees = async () => {
    const response = await fetch(`http://localhost:8088/employees?_expand=user`)
    return await response.json();
}