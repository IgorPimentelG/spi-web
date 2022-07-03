import ReactSelect from "react-select";
import { Container, Label } from "../Input/styles";
import { IOption } from "./interfaces";

const Select: React.FC<{
	label: string;
	placeholder: string;
	options: IOption[];
}> = ({ label, placeholder, options}) => {
	return(
		<Container>
			<Label>{label}</Label>
			<ReactSelect
				placeholder={placeholder}
				options={options}
			/>
		</Container>
	);
};

export default Select;
