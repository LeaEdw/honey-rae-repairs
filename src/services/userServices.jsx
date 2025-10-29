export const getNonStaffUsers = async () => {
    const response = await fetch(`http://localhost:8088/users?isStaff=false`)
    return await response.json()
}