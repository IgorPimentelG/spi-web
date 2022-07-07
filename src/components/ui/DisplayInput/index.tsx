import { Container, Field, Label } from "./styles";

const DisplayInput: React.FC<{
	label: string;
	value: string;
}> = ({ label, value }) => {
	return(
		<Container>
			<Label>{label}:</Label>
			<Field readOnly value={value}/>
		</Container>
	);
};

export default DisplayInput;

