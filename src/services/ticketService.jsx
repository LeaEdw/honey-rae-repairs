export const getAllTickets = async () => {
    const res = await fetch('http://localhost:8088/serviceTIckets')
    return await res.json()
}
