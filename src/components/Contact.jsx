import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const apiKey = import.meta.env.VITE_APIKEY;

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
          <h2>Formulario de contacto</h2>
          <p>Por favor complete el formulario</p>
        </div>

        <fieldset>
          <label htmlFor="">Nombre</label>
          <input name="username" type="text" placeholder="Sebastian" required />
        </fieldset>

        <fieldset>
          <label htmlFor="" name="email">
            Email
          </label>
          <input
            placeholder="seba.ceras@gmail.com"
            type="email"
            name="email"
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="">Mensaje</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            maxLength="500"
            placeholder="Escribi tu mensaje aqui"
          ></textarea>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
