import React from "react";
import { Text } from "./styles";

const Title: React.FC<{ text: string }> = ({ text }) => {
	return(
		<Text>
			{text}
		</Text>
	);
};

export default Title;
