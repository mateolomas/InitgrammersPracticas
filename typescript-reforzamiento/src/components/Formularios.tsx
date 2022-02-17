import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const Formularios = () => {


    const {formulario, email, password, onChange  } = useForm({
        email: '',
        password: '',
    });
   
  return (
      <>
        <h3>Formularios</h3>
        <hr />
        <input type="text" placeholder="Email"  value={email} onChange = { ({target}) => onChange( target.value,'email')} className="form-control"/>
        <input type="text" placeholder="Password" value={password} onChange = { ({target}) => onChange( target.value,'password')} className="form-control mt-2 mb-2"/>


        <code>
           <pre> {JSON.stringify(formulario, null, 2)} </pre>
        </code>
      </>
    
  )
}

