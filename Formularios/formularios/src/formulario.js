import React from "react";
import { formik, Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";

const Formulario = () => {
  const [formulario, setFormulario] = useState(false);

  return (
    <>
      <Formik
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setFormulario(true);
          console.log(values);
          setTimeout(() => setFormulario(false), 2000);
        }}
        validate={(values) => {
          let errores = {};
          if (!values.nombre) {
            errores.nombre = "El nombre es requerido";
          } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre) === false) {
            errores.nombre = "El nombre no es válido";
          }

          if (!values.correo) {
            errores.correo = "El correo es requerido";
          } else if (
            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.correo
            ) === false
          ) {
            errores.correo = "El correo no es válido";
          }

          return errores;
        }}
        initialValues={{
          nombre: "",
          correo: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Mateo Sebastian Lomas"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div>{errors.nombre}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Coreo</label>
              <Field
                type="email"
                name="correo"
                id="correo"
                placeholder="mty@yachaytech.edu.ec"
              />
              <ErrorMessage
                name="correo"
                component={() => <div>{errors.correo}</div>}
              />
            </div>

            <div>
              <Field name="pais" as="select">
                <option value="Ecuador">Ecuador</option>
                <option value="Perú">Perú</option>
                <option value="Colombia">Colombia</option>
              </Field>
            </div>

            <div>
              <label>
                <Field type="checkbox" name="terminos" />
              </label>
            </div>

            <div>
              <label>
                <Field type="radio" name="sexo" value="hombre" /> Hombre
              </label>
              <label>
                <Field type="radio" name="sexo" value="Mujer" /> Mujer
              </label>
            </div>

            <div>
              <label>
                <Field name="mensaje" as="textarea" placeholder="mensaje" />
              </label>
            </div>

            <button type="submit">Enviar</button>
            {formulario && <h1>Formulario enviado</h1>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
