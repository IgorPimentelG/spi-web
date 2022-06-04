import { ConfigInput } from "@shared/model/types/form";
import { Container, Field, Label } from "./styles";

const Input: React.FC<{ config: ConfigInput }> = ({ config }) => {

	const { label, register, name, attributes, hasError } = config;

	return(
		<Container>
			<Label>{label}:</Label>
			<Field {...attributes} {...register(name)} isInvalid={hasError}/>
		</Container>
	);
};

export default Input;
