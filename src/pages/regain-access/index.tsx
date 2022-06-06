/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Card } from "@components/layout";
import { Button, Error, Input } from "@components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { DataRecover } from "@shared/model/types/user";
import { RecoverSchema } from "@shared/schemas/authSchema";
import { Form, RootContainer } from "@styles/signIn-styles";
import { Label, Options, Space } from "@styles/signUp-styles";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const RegainAccess = () => {

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<DataRecover>({ resolver: yupResolver(RecoverSchema) });

	function submitHandler() {

	}

	function cancelHandler() {
		router.replace("/");
	}

	return(
		<Fragment>
			<Head>
				<title>SPI | Recuperar Acesso</title>
			</Head>

			<RootContainer>
				<Card>

					<Label>
						Insira o e-mailde cadastro para receber <br/>um link de redinição de senha
					</Label>

					<Form>
						<Input config={{
							name: "email",
							label: "E-mail",
							hasError: !!errors.email,
							register
						}}/>
						{ errors.email && (
							<Error message={errors.email.message!}/>
						)}

						<Options>
							<Button label="Enviar" handler={handleSubmit(submitHandler)}/>
							<Space/>
							<Button label="Cancelar" isReverse handler={cancelHandler}/>
						</Options>

					</Form>
				</Card>
			</RootContainer>
		</Fragment>
	);
};

export default RegainAccess;
