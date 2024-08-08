import React, { useState } from 'react';

// Formulario Básico
export const FormularioBasico = () => {
  const [correo, setCorreo] = useState('');

  const manejarCambioDeEntrada = (e) => {
    setCorreo(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(`Correo ingresado: ${correo}`);
  };

  return (
    <div className="w-full">
      <form onSubmit={manejarEnvio} className="flex w-full flex-wrap items-center gap-8">
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Introduce tu correo electrónico"
          className="px-3 lg:w-1/2 w-full py-3 border border-[#ffffff36] bg-white bg-opacity-30 backdrop-blur-md rounded-md bg-transparent text-white placeholder-gray-100"
          value={correo}
          onChange={manejarCambioDeEntrada}
          required
        />
        <button
          type="submit"
          className="px-4 w-[150px] py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Subscríbete
        </button>
      </form>
    </div>
  );
};

// Formulario Completo
export const FormularioCompleto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
    city: '',
    phone: '',
    referral: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md ">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Introduce tu nombre"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Introduce tu correo electrónico"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        id="message"
        name="message"
        placeholder="Escribe tu mensaje"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        id="country"
        name="country"
        placeholder="Introduce tu país"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.country}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        id="city"
        name="city"
        placeholder="Introduce tu ciudad"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Introduce tu número de teléfono"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.phone}
        onChange={handleChange}
      />

      <select
        id="referral"
        name="referral"
        className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        value={formData.referral}
        onChange={handleChange}
        required
      >
        <option value="" disabled>¿Cómo te enteraste de nosotros?</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Youtube">Youtube</option>
        <option value="Amigo">Amigo</option>
        <option value="Otro">Otro</option>
      </select>

      <button
        type="submit"
        className="px-8 py-2 bg-black orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Enviar
      </button>
    </form>
  );
};

// Formulario de Oración
export const FormularioOracion = () => {
  const [formData, setFormData] = useState({
    name: '',
    requestType: '',
    email: '',
    prayerRequest: '',
    details: '',
    country: '',
    referral: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md grid grid-cols-1 lg:grid-cols-2 gap-4">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Introduce tu nombre"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Introduce tu correo electrónico"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <select
        id="requestType"
        name="requestType"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        value={formData.requestType}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Tipo de Petición</option>
        <option value="Petición Personal" className="text-black">Petición Personal</option>
        <option value="Petición por Otros" className="text-black">Petición por Otros</option>
        <option value="Agradecimiento" className="text-black">Agradecimiento</option>
        <option value="Intercesión" className="text-black">Intercesión</option>
        <option value="Oración por Sabiduría" className="text-black">Oración por Sabiduría</option>
        <option value="Oración por Paz" className="text-black">Oración por Paz</option>
        <option value="Oración por Fortaleza" className="text-black">Oración por Fortaleza</option>
        <option value="Oración de Consagración" className="text-black">Oración de Consagración</option>
        <option value="Petición por Provisión" className="text-black">Petición por Provisión</option>
        <option value="Petición de Sanidad" className="text-black">Petición de Sanidad</option>
        <option value="Oración por Relación" className="text-black">Oración por Relación</option>
        <option value="Oración por Guía Espiritual" className="text-black">Oración por Guía Espiritual</option>
      </select>

      <textarea
        id="prayerRequest"
        name="prayerRequest"
        placeholder="Petición de oración"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        rows="1"
        value={formData.prayerRequest}
        onChange={handleChange}
        required
      />
      
      <input
        type="text"
        id="country"
        name="country"
        placeholder="Introduce tu país"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        value={formData.country}
        onChange={handleChange}
        required
      />

      <select
        id="referral"
        name="referral"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md"
        value={formData.referral}
        onChange={handleChange}
        required
      >
        <option value="" disabled>¿Cómo se enteró de nuestro ministerio?</option>
        <option value="Instagram" className="text-black">Instagram</option>
        <option value="Facebook" className="text-black">Facebook</option>
        <option value="Youtube" className="text-black">Youtube</option>
        <option value="Amigo" className="text-black">Amigo</option>
        <option value="Otro" className="text-black">Otro</option>
      </select>

      <textarea
        id="details"
        name="details"
        placeholder="Acerca de su petición"
        className="w-full px-3 py-2 border text-white placeholder-gray-200 border-gray-300 rounded-md mb-2 bg-gray-600 border-opacity-20 bg-opacity-30 backdrop-blur-md col-span-1 lg:col-span-2"
        rows="4"
        value={formData.details}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="px-8 py-2 bg-black orange-500 text-white rounded-md hover:bg-orange-600 col-span-1 lg:col-span-2"
      >
        Enviar
      </button>
    </form>
  );
};