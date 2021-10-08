import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const Hola = () => {
    alert("Hola Mundo");
  };
  return (
    <div className="container">
      <h1 className="list1">Práctica 1 - Unidad 2</h1>
      <ol className="list2">
        {props.List.map((e, index) => (
          <li className="list3" key={index}>
            {e}
          </li>
        ))}
      </ol>
      <button className="boton" onClick={Hola}>
        Click
      </button>
    </div>
  );
};
List.propTypes = {
  List: PropTypes.array.isRequired,
};
export default List;
