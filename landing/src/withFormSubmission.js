import React from 'react';
import { withFormik } from 'formik';
 
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};
 
const withFormSubmission = FormComponent => props => {
  const FormWithSubmission = withFormik({
    mapPropsToValues: () => ({ name: '' }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.name) {
        errors.name = 'Required';
      }
  
      return errors;
    },
  
    // handleSubmit: (values, { setSubmitting }) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //   }, 1000);
    // },
  
    displayName: props.displayName ? 'BasicForm' : props.displayName,
  })(FormComponent);
  
  return <FormWithSubmission />
}




export default withFormSubmission