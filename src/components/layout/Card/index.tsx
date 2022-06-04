import { ReactNode } from "react";
import { Container } from "./styles";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
	return(
		<Container>
			{children}
		</Container>
	);
};

export default Card;
