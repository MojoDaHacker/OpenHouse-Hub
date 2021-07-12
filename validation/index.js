const yup = require('yup')

function validateRegisterInput(data) {
  const registrationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConf: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    company: yup.string().nullable(),
  })

  try {
    return registrationSchema.validateSync(data)  
  } catch (err) {
    return ({
      errors: err.errors,
      field: err.path
    })
  }
};
function validateLoginInput(data) {
  let errors = {};
  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  try {
    return loginSchema.validateSync(data)  
  } catch (err) {
    return ({
      errors: err.errors,
      field: err.path
    })
  }
};


module.exports = {
  validateLoginInput,
  validateRegisterInput
}