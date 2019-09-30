import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function myForm(props) {



    const {
        isSubmitting,
        isValid,
        handleChange,
        handleBlur,
        values
    } = props;


    return (
        <Form className={"container"} >

            <TextField
                name="titulo"
                label="Título"
                className={"campito"}
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.titulo}
            />

            <ErrorMessage name="titulo">
                {message => <div className="error">{message}</div>}
            </ErrorMessage>

            <TextField
                label="Contenido"
                multiline
                rowsMax="4"
                name="contenido"
                className={"campito"}
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contenido}
            />

            <ErrorMessage name="contenido">
                {message => <div className="error">{message}</div>}
            </ErrorMessage>

            <Button type="submit" disabled={isSubmitting || !isValid} variant="contained" color="primary" size="small" > Agregar </Button>

        </Form>
    );
}

export default withFormik({

    mapPropsToValues(props) {
        return {
            titulo: '',
            contenido: '',
        };
    },

    async validate(values) {
        const errors = {};

        if (!values.titulo) {
            errors.titulo = 'titulo es requerido';
        } else if (values.titulo.length < 8) {
            errors.titulo = 'titulo must be at least 8 characters';
        }

        if (!values.titulo) {
            errors.titulo = 'titulo es requerido';
        } else if (values.titulo.length < 8) {
            errors.titulo = 'titulo must be at least 8 characters';
        }
        // await sleep(5000);

        if (Object.keys(errors).length) {
            throw errors;
        }
    },

    handleSubmit(values, formikBag) {
        console.log(values);
        formikBag.setSubmitting(false);
    }

})(myForm);