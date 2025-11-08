export const getNonStaffUsers = async () => {
    const response = await fetch(`http://localhost:8088/users?isStaff=false`)
    return await response.json()
}

export const getStaffUsers = async () => {
    const response = await fetch(`http://localhost:8088/users?isStaff=true`)
    return await response.json()
}
export const getUserByEmail = async (email) => {
  const res = await fetch(`http://localhost:8088/users?email=${email}`)
  return await res.json()
}

export const createUser = async (customer) => {
  const res = await fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
  return await res.json()
}
