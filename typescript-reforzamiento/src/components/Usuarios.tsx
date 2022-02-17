import React from 'react'
import { useEffect, useRef, useState } from 'react';

import { ReqResLista, Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';



export const Usuarios = () => {

const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();



const renderItem = (usuario: Usuario) => {
    return (

        <tr key={usuario.id.toString()}>
            <td>
                <img src={usuario.avatar} alt={usuario.email} width="75"  />
            </td>
            <td>{usuario.first_name}</td>
            <td>{usuario.email}</td>
        </tr>

    )

}

return (
    <>
        <h3>Usuarios</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map(renderItem)
                }
            </tbody>


        </table>
        <button className="btn btn-primary" onClick={paginaAnterior}>
            Previous
        </button>

            &nbsp;
        <button className="btn btn-primary" onClick={paginaSiguiente}>
            Next
        </button>

    </>
)
}

