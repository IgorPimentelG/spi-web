import React from "react";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { GrDocumentCsv } from "react-icons/gr";
import { csvToObject } from "@shared/helpers/csv";
import { FileType } from "@shared/model/enum/file";
import { IoDocumentTextOutline } from "react-icons/io5";
import { DialogUpload, Menu } from "@components/layout";
import { encondingISO } from "@shared/helpers/enconding";
import { sistecFields, suapFields } from "@shared/helpers/file-model";
import { Button, DisplayInput, Title } from "@components/ui";
import {
	ButtonUpload,
	Container,
	ContainerButton,
	ContainerOptions,
	ContainerUpload,
	Form,
	Grid,
	Header,
	LabelButtonUpload,
	RootContainer,
	Space,
	SubTitle
} from "@styles/reserachData-styles";

const NewResearchPage = () => {

	const router = useRouter();

	const [fileType, setFileType] = useState<FileType | null>(null);
	const [suapFile, setSuapFile] = useState<string | null>(null);
	const [sistecFile, setSistecFile] = useState<string | null>(null);
	const [showDialogUpload, setShowDialogUpload] = useState(false);

	function goBack() {
		router.back();
	}

	async function handleConfirmUpload(file: File) {

		const data = await encondingISO(file);

		if (fileType === FileType.SISTEC) {
			setSistecFile(data);
		} else {
			setSuapFile(data);
		}

		// Close dialog
		handleCancelUpload();
	}

	function handleCancelUpload() {
		setShowDialogUpload(false);
	}

	function handleUploadSuapData() {
		setFileType(FileType.SUAP);
		setShowDialogUpload(true);
	}

	function handleUploadSistecData() {
		setFileType(FileType.SISTEC);
		setShowDialogUpload(true);
	}

	function handleConfirm() {
		if (sistecFile && suapFile) {
			const sistecData = csvToObject(sistecFile, sistecFields);
			const suapData = csvToObject(suapFile, suapFields);
		}

		router.replace("research");
	}

	return(
		<React.Fragment>
			<DialogUpload
				visible={showDialogUpload}
				onConfirm={handleConfirmUpload}
				onCancel={handleCancelUpload}
				fileType={fileType}
			/>

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
							<Button label="Processar" handler={handleConfirm}/>
							<Space/>
							<Button label="Cancelar" isReverse handler={goBack}/>
						</ContainerOptions>
					</Header>

					<Form>
						<Grid>
							<DisplayInput label='Código' value='258373647'/>
							<DisplayInput label='Campi' value='Monteiro'/>
							<DisplayInput label='Início do ciclo' value='01/01/2022'/>
							<DisplayInput label='Término do ciclo' value='01/12/2022'/>
						</Grid>

						<DisplayInput label='Status' value='Atribuída'/>

						<ContainerUpload>
							<SubTitle>DADOS SUAP</SubTitle>
							<ContainerButton>
								<ButtonUpload onClick={handleUploadSuapData} type="button">
									<IoDocumentTextOutline color='#FFF'/>
									<LabelButtonUpload>importar arquivo</LabelButtonUpload>
								</ButtonUpload>
								<Space/>
								{ !suapFile && <GrDocumentCsv/> }
							</ContainerButton>
						</ContainerUpload>

						<ContainerUpload>
							<SubTitle>DADOS SISTEC</SubTitle>
							<ContainerButton>
								<ButtonUpload reverse onClick={handleUploadSistecData} type="button">
									<IoDocumentTextOutline color='#FFF'/>
									<LabelButtonUpload>importar arquivo</LabelButtonUpload>
								</ButtonUpload>
								<Space/>
								{ !sistecFile && <GrDocumentCsv/> }
							</ContainerButton>
						</ContainerUpload>
					</Form>
				</Container>
			</RootContainer>
		</React.Fragment>
	);
};

export default NewResearchPage;
