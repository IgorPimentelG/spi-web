import * as yup from "yup";

export const SignInSchema = yup.object().shape({
	email: yup.string()
		.email("Endereço de e-mail inválido")
		.required("Informe o seu e-mail"),

	password: yup.string()
		.required("Informe sua senha")
});
