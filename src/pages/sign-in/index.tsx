import Head from "next/head";
import Image from "next/image";
import Logo from "@assets/images/logo.png";
import Link from "next/link";
import { Fragment } from "react";
import { Card } from "@components/layout";
import { Button, Input } from "@components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "@shared/schemas/authSchema";
import { Credentials } from "@shared/model/types/user";
import { authActions } from "@store/actions";
import { auth } from "@shared/services/";
import {
	ContainerOptions,
	Form,
	RootContainer,
	Option,
	Title,
	LabelError
} from "@styles/signIn-styles";
import { toast } from "react-toastify";
import { useAppDispatch } from "@store/index";
import { useRouter } from "next/router";

const SignIn = () => {

	const dispatch = useAppDispatch();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Credentials>({ resolver: yupResolver(SignInSchema) });

	const { authenticate } = authActions;
	const { signIn } = auth();

	function submitHandler(data: Credentials) {
		const response = signIn(data);
		toast.promise(response, {
			pending: "Verificando dados...",
			success: "Seja Bem-Vindo",
			error: "Usuário não encontrado!"
		});

		response.then((body) => {
			authenticate(body.data);
			router.replace("/research");
		});
	}

	return(
		<Fragment>
			<Head>
				<title>SPI | Sign In</title>
			</Head>

			<RootContainer>
				<Card>
					<Image
						src={Logo}
						width={130}
						height={130}
						objectFit="contain"
					/>

					<Title>Sistema de Pesquisa Institucional</Title>

					<Form>
						<Input config={{
							name: "email",
							label: "Usuário",
							hasError: !!errors.email,
							register
						}}/>
						{ errors.email && (
							<LabelError>
								{errors.email.message}
							</LabelError>
						)}

						<Input config={{
							register,
							name: "password",
							label: "Senha",
							attributes: { type: "password" },
							hasError: !!errors.password
						}}/>
						{ errors.password && (
							<LabelError>
								{errors.password.message}
							</LabelError>
						)}

						<Button label="Acessar" handler={handleSubmit(submitHandler)}/>
					</Form>

					<ContainerOptions>
						<Link href="#">
							<Option>Esqueceu sua senha?</Option>
						</Link>
						<Link href="#">
							<Option>Solicitar acesso</Option>
						</Link>
					</ContainerOptions>
				</Card>
			</RootContainer>
		</Fragment>
	);
};

export default SignIn;
