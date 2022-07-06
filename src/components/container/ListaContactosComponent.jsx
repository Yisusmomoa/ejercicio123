import React from 'react'
import { Contacto } from '../../models/Contacto.class';
import ContactoCommponent from '../contacto/ContactoCommponent';

function ListaContactosComponent() {
    const defaultContact=new Contacto('Brandon', 'Loera', 'bjls29@hotmail.com',false);
  return (
    <div>
        listacontactos
        <ContactoCommponent props={defaultContact}></ContactoCommponent>
    </div>
  )
}

export default ListaContactosComponent