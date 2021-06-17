import axios from "axios"
import React, { useState } from "react"

const Admin = () => {
  const [serviceName, setServiceName] = useState("")
  console.log(serviceName)

  const service = {
    name: serviceName
  }

  const handleAddService = async () => {
    await axios
      .post("http://localhost:9000/services", service)
      .then((res) => console.log(res.data))
  }

  return (
    <div>
      <h3>Admin</h3>
      <hr />
      <h6>Add Service</h6>
      <h6>Service Name: </h6>
      <input type="text" onChange={(e) => setServiceName(e.target.value)} />
      <button onClick={() => handleAddService()}>Add Service</button>
    </div>
  )
}

export default Admin
