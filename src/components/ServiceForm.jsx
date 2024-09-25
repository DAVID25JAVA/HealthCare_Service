import  { useState } from 'react';

const ServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;  

    const newService = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
    };

    addService(newService);
    setName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Service Name"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Add Service</button>
    </form>
  );
};

export default ServiceForm;
