import React from "react";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { GrDocumentCsv } from "react-icons/gr";
import { DialogUpload, Menu } from "@components/layout";
import { IoDocumentTextOutline } from "react-icons/io5";
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
import { FileType } from "@shared/model/enum/file";

const NewResearchPage = () => {

	const router = useRouter();

	const [fileType, setFileType] = useState<FileType | null>(null);
	const [suapFile, setSuapFile] = useState<File | null>(null);
	const [sistecFile, setSistecFile] = useState<File | null>(null);
	const [showDialogUpload, setShowDialogUpload] = useState(false);

	function goBack() {
		router.back();
	}

	function handleConfirmUpload(file: File) {
		if (fileType === FileType.SISTEC) {
			setSistecFile(file);
		} else {
			setSuapFile(file);
		}
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
							{/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
							<Button label="Processar" handler={() => {}}/>
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
