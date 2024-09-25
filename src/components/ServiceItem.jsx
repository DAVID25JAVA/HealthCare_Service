import  { useState } from 'react';

const ServiceItem = ({ service, updateService, deleteService }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState(service);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateService(updatedService);
    setIsEditing(false);
  };

  return (
    <div className="border  mb-2  ">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex flex-col">
          <input
            type="text"
            value={updatedService.name}
            onChange={(e) => setUpdatedService({ ...updatedService, name: e.target.value })}
            className="border p-2 mb-1"
          />
          <input
            type="text"
            value={updatedService.description}
            onChange={(e) => setUpdatedService({ ...updatedService, description: e.target.value })}
            className="border p-2 mb-1"
          />
          <input
            type="number"
            value={updatedService.price}
            onChange={(e) => setUpdatedService({ ...updatedService, price: parseFloat(e.target.value) })}
            className="border p-2 mb-1"
          />
          <button type="submit" className="bg-green-500 text-white px-2 py-1">Update</button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-red-500 text-white px-2 py-1 mt-1">Cancel</button>
        </form>
      ) : (
        <div className="flex-1">
          <h2 className="font-bold">{service.name}</h2>
          <p>{service.description}</p>
          <p>${service.price.toFixed(2)}</p>
        </div>
      )}
      <div className="ml-4 my-4 flex justify-center gap-5">
        <button onClick={() => setIsEditing(!isEditing)} className="bg-yellow-500 text-white px-2 py-1">Edit</button>
        <button onClick={() => deleteService(service.id)} className="bg-red-500 text-white px-2 py-1 ml-2">Delete</button>
      </div>
    </div>
  );
};

export default ServiceItem;
