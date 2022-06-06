import * as yup from "yup";


const baseEmail = {
	email: yup.string()
		.email("Endereço de e-mail inválido")
		.required("Informe o seu e-mail")
};

export const SignInSchema = yup.object().shape({
	email: baseEmail.email,
	password: yup.string()
		.required("Informe sua senha")
});

export const SignUpSchema = yup.object().shape({
	name: yup.string()
		.required("Informe o seu nome")
		.min(3, "Nome Inválido")
		.max(100, "Máximo de 100 caracteres"),

	registration: yup.number()
		.required("Informe sua matrícula")
		.positive("Matrícula inválida")
		.integer("Matrícula inválida"),

	cpf: yup.number()
		.required("Informe o seu CPF")
		.positive("CPF Inválido")
		.integer("CPF Inválido")
		.min(11, "CPF Inválido")
		.max(11, "CPF Inválido"),

	email: baseEmail.email,
});

export const RecoverSchema = yup.object().shape({
	email: baseEmail.email
});
