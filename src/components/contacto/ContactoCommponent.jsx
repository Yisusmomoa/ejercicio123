import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class';


const ContactoCommponent = ({props}) => {
    return (
        <div>
            <h1>Nombre: {props.Nombre}</h1>
            <h1>Apellido: {props.Apellido}</h1>
            <h1>Email: {props.Email}</h1>
            <h1>Conectado: {props.Conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h1>
        </div>
    );
};


ContactoCommponent.propTypes = {
    props:PropTypes.instanceOf(Contacto)
};


export default ContactoCommponent;
