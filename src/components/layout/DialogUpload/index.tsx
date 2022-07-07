/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Button } from "@components/ui";
import { createPortal } from "react-dom";
import { FileType } from "@shared/model/enum/file";
import {
	RootContainer,
	Card,
	ContainerOptions,
	Space,
	Label,
	ButtonUpload
} from "./styles";

const DialogUpload: React.FC<{
	visible: boolean;
	fileType: FileType | null;
	onConfirm: (file: File) => void;
	onCancel: () => void;
}> = ({ visible, fileType, onConfirm, onCancel }) => {

	const [portal, setPortal] = useState<HTMLElement | null>();
	const [suapFile, setSuapFile] = useState<File | null>(null);
	const [sistecFile, setSistecFile] = useState<File | null>(null);

	useEffect(() => {
		if (document) {
			const element = document.getElementById("portal-modal");
			setPortal(element);
		}
	}, []);

	function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files![0];

		if (fileType === FileType.SUAP) {
			setSuapFile(file);
		} else {
			setSistecFile(file);
		}
	}

	function handleConfirm() {
		let file;

		if (fileType === FileType.SISTEC) {
			file = sistecFile;
		} else {
			file = suapFile;
		}

		onConfirm(file!);
	}

	function Dialog() {
		return(
			<RootContainer visible={visible}>
				<Card>

					<ButtonUpload htmlFor="input-file"><FaUpload size={20}/></ButtonUpload>
					<input
						id="input-file"
						type="file"
						accept='.csv'
						onChange={onUpload}
						style={{ visibility: "hidden" }}
					/>

					<Label>
						{ fileType === FileType.SISTEC && (
							sistecFile ? sistecFile.name : "Nenhum arquivo selecionado")
						}
						{ fileType === FileType.SUAP && (
							suapFile ? suapFile.name : "Nenhum arquivo selecionado")
						}
					</Label>

					<ContainerOptions>
						<Button label="Confirmar" handler={handleConfirm}/>
						<Space/>
						<Button label="Cancelar" isReverse handler={onCancel}/>
					</ContainerOptions>
				</Card>
			</RootContainer>
		);
	}

	return(
		<React.Fragment>
			{portal ? createPortal(<Dialog/>, portal) : <></>}
		</React.Fragment>
	);
};

export default DialogUpload;
