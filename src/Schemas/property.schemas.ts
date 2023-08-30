import * as yup from "yup";

export const propertySchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    total_area: yup.string().required("Área total obrigatória!"),
    built_area: yup.string().required("Área construida obrigatória!"),
    address: yup.string().required("Endereço obrigatório!"),
    zip_code: yup.string().required("CEP obrigatório!")
    .matches(/^\d{5}-\d{2}$/, "O CEP deve estar no formato 00000-00"),
    price: yup.string().required("Preço obrigatório!")
});

export const propertySchemaOptional = yup.object().shape({
    name: yup.string(),
    total_area: yup.string(),
    built_area: yup.string(),
    address: yup.string(),
    zip_code: yup.string(),
    price: yup.string()
});

export const propertySchemaRes = yup.object().shape({
    id: yup.number(),
    name: yup.string().required("Nome obrigatório!"),
    total_area: yup.string().required("Área total obrigatória!"),
    built_area: yup.string().required("Área construida obrigatória!"),
    address: yup.string().required("Endereço obrigatório!"),
    zip_code: yup.string().required("CEP obrigatório!")
    .matches(/^\d{5}-\d{2}$/, "O CEP deve estar no formato 00000-00"),
    price: yup.string().required("Preço obrigatório!")
});