import * as yup from 'yup';

const realtorProfileSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  company: yup.string().notRequired()
});

export default realtorProfileSchema
