export const getNonStaffUsers = async () => {
    const response = await fetch(`http://localhost:8088/users?isStaff=false`)
    return await response.json()
}

export const getStaffUsers = async () => {
    const response = await fetch(`http://localhost:8088/users?isStaff=true`)
    return await response.json()
}