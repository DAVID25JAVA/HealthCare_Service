import { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";

const App = () => {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-1/2 bg-blue-100 mx-auto  p-4">
        <h1 className="text-2xl font-bold mb-4">Healthcare Services</h1>
        <ServiceForm addService={addService} />
        <ServiceList
          services={services}
          updateService={updateService}
          deleteService={deleteService}
        />
      </div>
    </div>
  );
};

export default App;
