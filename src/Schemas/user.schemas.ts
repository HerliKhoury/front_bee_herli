import * as Yup from 'yup';

export const userSchemaRegister = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório!"),
  phone: Yup.string().matches(/^\(\d{3}\) \d{5}-\d{4}$/, "Formato inválido. Use (000) 00000-0000")
  .required("Telefone obrigatório!"),
  password: Yup.string().required("Senha é obrigatória!"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não coincidem!')
    .required('Confirmação de senha é obrigatória!'),
});