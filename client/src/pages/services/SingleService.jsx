import axios from "axios"
import { customer } from "../../customer/customer"

const SingleService = ({ service, deleteService }) => {
  const handleRenting = (name) => {
    const rented = {
      customer_name: customer.name,
      customer_phone: customer.phone,
      customer_address: customer.address,
      name: service.name
    }
    try {
      axios
        .post("http://localhost:9000/booked_services", rented)
        .then(() => console.log("created"))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      Name: {service.name}
      <button onClick={() => handleRenting()}>Book Service</button>
      <button onClick={() => deleteService(service.id)}>Delete Service</button>
    </div>
  )
}

export default SingleService
