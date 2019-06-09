import * as Yup from "yup";

const validationFrom = Yup.object().shape({
  name: Yup.string()
  .max(100)
  .required('is required'),
  email: Yup.string()
  .nullable()
  .email()
  .matches(/^\S*$/, 'not space')
  .required('is required'),
  password: Yup.string()
  .min(8)
  .max(16)
  .matches(/[a-z]/, 'at least one lowercase char')
  .matches(/[A-Z]/, 'at least one uppercase char')
  .matches(/^\S*$/, 'not space')
  .matches(/[0-9]/, 'at least 1 number')
  .nullable()
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'at least  one special char (@,!,#, etc).')
  .required('is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords don`t match')
    .nullable()
    .required('is required'),
});

export default validationFrom;
