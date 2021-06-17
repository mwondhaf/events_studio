import axios from "axios"
import { useEffect, useState } from "react"
import SingleService from "./SingleService"

const RentingList = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const fetchServices = async () => {
      await axios
        .get("http://localhost:9000/services")
        .then((res) => setServices(res.data))
    }
    fetchServices()
  }, [])

  const deleteService = async (id) => {
    try {
      const result = await services.filter((service) => service.id !== id)
      console.log(result)
      setServices(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      Renting List
      {services.map((service) => (
        <div key={service.id}>
          <SingleService service={service} deleteService={deleteService} />
        </div>
      ))}
    </div>
  )
}

export default RentingList
