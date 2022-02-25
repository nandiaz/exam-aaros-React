import React from "react";
import Header from "../../NavBar/Header";
import "./ContentWho.css";

const ContentWho = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container-who">
          <p>
            Alatorre Avendaño Recursos Corporativos, S.C. nace en 1986 como una
            sociedad promotora de seguros.
          </p>
          <p>
            En la búsqueda de diferentes alternativas de comercialización y con
            el fin de ampliar sus servicios se crea AARCO Agente de Seguros y de
            Fianzas, S.A. de C.V. que le permite actuar como corredor de seguros
            y de finanzas con las principales Instituciones del ramo
            establecidas en México
          </p>
        </div>
        <div className="container-img">
          <div>
            <img src="/vida.jpeg" alt="vida" className="img-who" />
            <h1>MISION</h1>
            <p>Atracción y desarrollo de personas</p>
          </div>
          <div>
            <img src="/vida.jpeg" alt="vida" className="img-who" />
            <h1>MISION</h1>
            <p>Atracción y desarrollo de personas</p>
          </div>
          <div>
            <img src="/vida.jpeg" alt="vida" className="img-who" />
            <h1>MISION</h1>
            <p>Atracción y desarrollo de personas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentWho;
