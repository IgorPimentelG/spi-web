import Head from "next/head";
import IFPB_CAMPI from "@assets/data/ifpb-campi.json";
import { Menu } from "@components/layout";
import { useForm } from "react-hook-form";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button, Input, Select, Title } from "@components/ui";
import { useLayoutEffect, useState } from "react";
import {
	ButtonUpload,
	Container,
	ContainerOptions,
	ContainerUpload,
	Form,
	Grid,
	Header,
	LabelButtonUpload,
	RootContainer,
	Space,
	SubTitle
} from "@styles/newReserach-styles";
import { useRouter } from "next/router";

const NewResearchPage = () => {

	type Campi = { value: string, label: string };

	const router = useRouter();

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [ifpbCampus, setIfpbCampus] = useState<Campi[]>([]);

	useLayoutEffect(() => {
		const dataFormatted = IFPB_CAMPI.campus.map((item) => {
			return {
				value: item.name, label: `Campi ${item.name}`
			};
		});

		setIfpbCampus(dataFormatted);
	}, []);

	function goBack() {
		router.back();
	}

	return(
		<RootContainer>
			<Head>
				<title>SPI | Gerar Pesquisa</title>
			</Head>

			<Menu/>

			<Container>
				<Header>
					<div>
						<Title text="Gerar Pesquisa"/>
						<SubTitle>Importe os dados necessários</SubTitle>
					</div>

					<ContainerOptions>
						{/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
						<Button label="Processar" handler={() => {}}/>
						<Space/>
						<Button label="Cancelar" isReverse handler={goBack}/>
					</ContainerOptions>
				</Header>

				<Form>
					<Grid>
						<Input config={{
							register,
							label: "Código",
							name: "code",
							attributes: { type: "number", readyonly: true },
							hasError: !!errors,
						}}/>

						<Select
							label='Campi'
							placeholder='Selecione o campi'
							options={ifpbCampus}
						/>

						<Input config={{
							register,
							label: "Início do ciclo",
							name: "code",
							hasError: !!errors,
							attributes: { type: "date" }
						}}/>

						<Input config={{
							register,
							label: "Término do ciclo",
							name: "code",
							hasError: !!errors,
							attributes: { type: "date" }
						}}/>
					</Grid>

					<Input config={{
						register,
						label: "Status",
						name: "code",
						attributes: { readyonly: true },
						hasError: !!errors,
					}}/>

					<ContainerUpload>
						<SubTitle>DADOS SUAP</SubTitle>
						<ButtonUpload>
							<IoDocumentTextOutline color='#FFF'/>
							<LabelButtonUpload>importar arquivo</LabelButtonUpload>
						</ButtonUpload>
					</ContainerUpload>

					<ContainerUpload>
						<SubTitle>DADOS SISTEC</SubTitle>
						<ButtonUpload reverse>
							<IoDocumentTextOutline color='#FFF'/>
							<LabelButtonUpload>importar arquivo</LabelButtonUpload>
						</ButtonUpload>
					</ContainerUpload>
				</Form>
			</Container>
		</RootContainer>
	);
};

export default NewResearchPage;
