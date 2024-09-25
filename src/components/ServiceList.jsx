import ServiceItem from "./ServiceItem";

const ServiceList = ({ services, updateService, deleteService }) => {
  return (
    <div>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        services.map(service => (
          <ServiceItem
            key={service.id}
            service={service}
            updateService={updateService}
            deleteService={deleteService}
          />
        ))
      )}
    </div>
  );
};

export default ServiceList;
