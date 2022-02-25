import React from "react";
import Header from "../../NavBar/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="formContact">
        <p>
          Llena el siguiente formulario y uno de nuestros asesores se pondrá en
          contacto contigo
        </p>
        <form class="was-validated">
          <div class="col-md-10">
            <label for="validationDefault01" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              required
            />
          </div>
          <div class="col-md-10">
            <label for="validationDefault01" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="validationDefault01"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="validationTextArea" class="form-label">
              Mensaje
            </label>
            <textarea
              type="text"
              class="form-control is-invalid"
              id="validationTextArea"
              required
            />
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
