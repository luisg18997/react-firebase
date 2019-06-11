import * as Yup from "yup";

const validationFrom = Yup.object().shape({
  name: Yup.string()
  .max(100)
  .matches(/^\S*$/, 'not space')
  .required('is required'),
  last_name: Yup.string()
  .max(100)
  .matches(/^\S*$/, 'not space')
  .required('is required'),
  email: Yup.string()
  .nullable()
  .email()
  .matches(/^\S*$/, 'not space')
  .required('is required'),
  phone_number: Yup.string()
  .max(11)
  .matches(/^\S*$/, 'not space')
  .matches(/[0-9]*$/, 'not chart')
  .required('is required'),

});

export default validationFrom;
