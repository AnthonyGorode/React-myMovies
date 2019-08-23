import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {

    submit = (values,actions) => {
        console.log(values);
    }

    render(){
        return (
            <Formik
                onSubmit={ this.submit }
                initialValues={ { query:'' } }
            >
                { ({ handleSubmit,handleChange,handleBlur,isSubmitting }) => (
                    <form className="d-flex flex-row p-2 m-2" onSubmit={ handleSubmit }>
                        <input name="query" className="flex-fill form-control mr-2" type="text" placeholder="Search..." onChange={ handleChange } onBlur={ handleBlur } />
                        <input className="btn btn-small btn-success" type="submit" value="Search" disabled={ isSubmitting } />
                    </form>
                ) }

            </Formik>
        );
    }
}