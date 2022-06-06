import { ReactNode } from "react";
import Image from "next/image";
import Logo from "@assets/images/logo.png";
import { Container, Title } from "./styles";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
	return(
		<Container>
			<Image
				src={Logo}
				width={130}
				height={130}
				objectFit="contain"
			/>

			<Title>Sistema de Pesquisa Institucional</Title>

			{children}
		</Container>
	);
};

export default Card;
