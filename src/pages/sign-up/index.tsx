/* eslint-disable @typescript-eslint/no-empty-function */
import { Fragment } from "react";
import Head from "next/head";
import Select from "react-select";
import { Card } from "@components/layout";
import { useForm } from "react-hook-form";
import { Label, LabelSelect, Options, RootContainer, Space } from "@styles/signUp-styles";
import { Button, Input } from "@components/ui";
import { Form  } from "@styles/signIn-styles";
import { useRouter } from "next/router";

const SignUpPage = () => {

	const { register, handleSubmit, formState: { errors }} = useForm();
	const router = useRouter();

	const campusOptions = [
		{ value: "monteiro", label: "Monteiro" },
		{ value: "campina-grande", label: "Campina Grande" }
	];

	function cancelHandler() {
		router.replace("/");
	}

	return(
		<Fragment>
			<Head>
				<title>SPI | Solicitar Acesso</title>
			</Head>

			<RootContainer>
				<Card>

					<Label>
						Solicitação de acesso ao sistema
					</Label>

					<Form>
						<Input config={{
							name: "name",
							label: "Nome",
							hasError: !!errors.name,
							register
						}}/>

						<Input config={{
							name: "registration",
							label: "Matrícula",
							hasError: !!errors.name,
							register
						}}/>

						<Input config={{
							name: "cpf",
							label: "CPF",
							hasError: !!errors.name,
							register
						}}/>

						<Input config={{
							name: "email",
							label: "E-mail",
							hasError: !!errors.name,
							register
						}}/>

						<LabelSelect>Campus:</LabelSelect>
						<Select options={campusOptions} placeholder="Selecione o campus"/>

						<Options>
							<Button label="Enviar" handler={() => {}}/>
							<Space/>
							<Button label="Cancelar" isReverse handler={cancelHandler}/>
						</Options>

					</Form>
				</Card>
			</RootContainer>
		</Fragment>
	);
};

export default SignUpPage;
