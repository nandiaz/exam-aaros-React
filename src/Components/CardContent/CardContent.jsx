import { React, useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import "./CardContent.css";

const CardContent = () => {
  const ref = useRef();
  return (
    <>
      <div className="container-flip">
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref}
          className="flippy-container"
        >
          <FrontSide className="flip-front">
            <img src="/auto.jpg" className="img-flip" alt="imgflip"></img>
            <div className="title-img">
              <h1>AUTOS</h1>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#178d8f" }}>
            <img src="/auto.jpg" className="img-flip-back" alt="imgflip"></img>
            <div className="text-img">
              <h1>Protege: </h1>
              <p>
                Los daños o pérdida del automóvil y los daños o perjuicios
                causados a la propiedad ajena o a terceras personas con motivo
                del uso del automovil
              </p>
            </div>
          </BackSide>
        </Flippy>

        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref}
          className="flippy-container"
        >
          <FrontSide className="flip-front">
            <img
              src="/gastosmedicos.jpg"
              className="img-flip"
              alt="imgflip"
            ></img>
            <div className="title-img-sgm">
              <h1>SEGURO DE GASTOS MEDICOS</h1>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#178d8f" }}>
            <img
              src="/gastosmedicos.jpg"
              className="img-flip-back"
              alt="imgflip"
            ></img>
            <div className="text-img">
              <h1>Protege: </h1>
              <p>
                Los honorarios médicos, hospitalarios y demás que sean
                necesarios para la recuperación de la salud o vigor vital del
                asegurado, cuando se hayan afectado por causa de un accidente o
                enfermedad.
              </p>
            </div>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref}
          className="flippy-container"
        >
          <FrontSide className="flip-front">
            <img src="/hogar.jpg" className="img-flip" alt="imgflip"></img>
            <div className="title-img">
              <h1>HOGAR</h1>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#178d8f" }}>
            <img src="/hogar.jpg" className="img-flip-back" alt="imgflip"></img>
            <div className="text-img">
              <h1>Protege: </h1>
              <p>
                A la vivienda y a sus habitantes contra daños que pudieran
                sufrir a causa de fenómens naturales o robo, daños que pueda
                ocasionar una mascota, entre otras.
              </p>
            </div>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={true} // default false
          flipOnClick={false} // default false
          flipDirection="horizontal" // horizontal or vertical
          ref={ref}
          className="flippy-container"
        >
          <FrontSide className="flip-front">
            <img src="/vida.jpeg" className="img-flip" alt="imgflip"></img>
            <div className="title-img">
              <h1> VIDA </h1>
            </div>
          </FrontSide>
          <BackSide style={{ backgroundColor: "#178d8f" }}>
            <img src="/vida.jpeg" className="img-flip-back" alt="imgflip"></img>
            <div className="text-img">
              <h1>Protege: </h1>
              <p>
                Es un respaldo económico el cúal su función princupal es
                indemnizar a los beneficiarios designados con una suma de dinero
                en caso del fallecimiento de la persona asegurada.
              </p>
            </div>
          </BackSide>
        </Flippy>
      </div>
    </>
  );
};

export default CardContent;
