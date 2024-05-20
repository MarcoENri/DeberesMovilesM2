//Errores 
//1error
// Incorrecto
//import { useState } from 'react';
//
//function Componente() {
//  const [contador, setContador] = useState(0);
//  return <div>{contador}</div>;
//}
//
//// Correcto
//import React, { useState } from 'react';
//
//function Componente() {
//  const [contador, setContador] = useState(0);
//  return <div>{contador}</div>;
//}
////2error
////// Incorrecto
//function Componente() {
//  if (condicion) {
//    const [valor, setValor] = useState(0);
//  }
//}
//
//// Correcto
//function Componente() {
//  const [valor, setValor] = useState(0);
//  if (condicion) {
//  }
//}
////3error
//// Incorrecto
//function Lista() {
//  return (
//    <ul>
//      {elementos.map((elemento) => (
//        <li>{elemento}</li>
//      ))}
//    </ul>
//  );
//}
//
//// Correcto
//function Lista() {
//  return (
//    <ul>
//      {elementos.map((elemento, index) => (
//        <li key={index}>{elemento}</li>
//      ))}
//    </ul>
//  );
//}
////4error
//// Incorrecto
//function Componente() {
//  const [contador, setContador] = useState(0);
//
//  const aumentarContador = () => {
//    contador++;
//    setContador(contador);
//  };
//}
//
//// Correcto
//function Componente() {
//  const [contador, setContador] = useState(0);
//
//  const aumentarContador = () => {
//    setContador(contador + 1);
//  };
//}
////5error
//// Incorrecto
//function Componente() {
//  const [contador, setContador] = useState(0);
//
//  const duplicarContador = () => {
//    setContador(contador * 2);
//  };
//}
//
//// Correcto
//function Componente() {
//  const [contador, setContador] = useState(0);
//
//  const duplicarContador = () => {
//    setContador(prevContador => prevContador * 2);
//  };
//}
////6error
//// Incorrecto
//function Componente() {
//  return (
//    { condicion && <div>Condición es verdadera</div> }
//  );
//}
//
//// Correcto
//function Componente() {
//  return (
//    { condicion ? <div>Condición es verdadera</div> : <div>Condición es falsa</div> }
//  );
//}
////7error
//// Incorrecto
//interface Props {
//  nombre: string;
//}
//
//function Componente(props: Props) {
//  return <div>{props.nombre}</div>;
//}
//
//// Correcto
//interface Props {
//  nombre: string;
//}
//
//function Componente(props: Props) {
//  return <div>{props.nombre}</div>;
//}
////8error
//// Incorrecto
//function Componente() {
//  const handleClick = () => {
//    // Hacer algo...
//  };
//
//  return <button onClick={handleClick}>Click Me</button>;
//}
//
//// Correcto
//function Componente() {
//  const handleClick = () => {
//    // Hacer algo...
//  };
//
//  return <button onClick={handleClick}>Click Me</button>;
//}
////9error
//// Incorrecto
//const [contador, setContador] = useState();
//
//// Correcto
//const [contador, setContador] = useState<number>(0);
////10error
//// Incorrecto
//const contadorState = useState(0);
//const contador = contadorState[0];
//const setContador = contadorState[1];
//
//// Correcto
//const [contador, setContador] = useState(0);
//
//