import * as Yup from "yup";

const validationFrom = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .matches(/^\S*$/, 'not space')
    .nullable()
    .required('is required'),
});

export default validationFrom;
