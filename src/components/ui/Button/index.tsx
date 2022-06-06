import { Container, Label } from "./styles";

const Button: React.FC<{
	label: string;
	isReverse?: boolean;
	handler: () => void;
 }> = ({ label, isReverse, handler }) => {
 	return(
 		<Container onClick={handler} isReverse={isReverse}>
 			<Label>{label}</Label>
 		</Container>
 	);
 };

export default Button;
