import { LabelError } from "./styles";

const Error: React.FC<{ message: string }> = ({ message }) => {
	return(
		<LabelError>
			{message}
		</LabelError>
	);
};

export default Error;
