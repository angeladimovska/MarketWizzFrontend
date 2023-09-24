import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required field'),
    description: Yup.string()
        .required('Required field'),
});

export const ProductModal = (props) => {
    const formik = useFormik({
        initialValues: { name: '', description: '', image: '', market: '' },
        validationSchema: validationSchema,
        onSubmit: values => {
            props.onAdd(values);
            formik.resetForm();
            props.onHide();
        },
    });

    const handleClose = () => {
        formik.resetForm();
        props.onHide();
    }

    return (
        <Modal show={ props.show } onHide={ handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>Додади нов продукт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ formik.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="title">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={ 'form-control' + (formik.errors.name && formik.touched.name ? ' is-invalid' : '') }
                            onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }
                            value={ formik.values.name }
                        />
                        { formik.touched.name && formik.errors.name ? (
                            <div className="invalid-feedback">{ formik.errors.name }</div>
                        ) : null }
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className={ 'form-control' + (formik.errors.description && formik.touched.description ? ' is-invalid' : '') }
                            onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }
                            value={ formik.values.description }
                        />
                        { formik.touched.description && formik.errors.description ? (
                            <div className="invalid-feedback">{ formik.errors.description }</div>
                        ) : null }
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            className={ 'form-control' + (formik.errors.image && formik.touched.image ? ' is-invalid' : '') }
                            onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }
                            value={ formik.values.image }
                        />
                        { formik.touched.image && formik.errors.image ? (
                            <div className="invalid-feedback">{ formik.errors.image }</div>
                        ) : null }
                    </div>
                    <div className="form-group">
                        {/*ova so marketive da bide dropdown lista sho ke ja vleceme isto od baza
                        i na save na produkt da prakjame id na marketot*/ }
                        <label htmlFor="marketi">Market</label>
                        <br/>
                        <select name="marketi" id="marketi">
                            <option value="vero">Vero</option>
                            <option value="tinex">Tinex</option>
                            <option value="ramstore">Ramstore</option>
                            <option value="kam">KAM</option>
                        </select>
                        { formik.touched.image && formik.errors.image ? (
                            <div className="invalid-feedback">{ formik.errors.image }</div>
                        ) : null }
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ formik.handleSubmit }>Додади</Button>
            </Modal.Footer>
        </Modal>
    );
}