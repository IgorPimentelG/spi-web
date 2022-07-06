/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Button } from "@components/ui";
import { createPortal } from "react-dom";
import { RootContainer, Card, ContainerOptions, Space, Label, ButtonUpload } from "./styles";

const DialogUpload: React.FC<{
	visible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}> = ({ visible, onConfirm, onCancel }) => {

	const [portal, setPortal] = useState<HTMLElement | null>();
	const [file, setFile] = useState<File | null>(null);

	useEffect(() => {
		if (document) {
			const element = document.getElementById("portal-modal");
			setPortal(element);
		}
	}, []);

	function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const data = event.target.files![0];
		setFile(data);
	}

	function Dialog() {
		return(
			<RootContainer visible={visible}>
				<Card>

					<ButtonUpload htmlFor="input-file"><FaUpload size={20}/></ButtonUpload>
					<input id="input-file" type="file" style={{ visibility: "hidden" }} onChange={onUpload}/>

					<Label>
						{file ? file.name : "Nenhum arquivo selecionado"}
					</Label>

					<ContainerOptions>
						<Button label="Confirmar" handler={onConfirm}/>
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
