import * as yup from 'yup';


export const productSchema = yup
  .object()
  .shape({
    image: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
  })
  .required();