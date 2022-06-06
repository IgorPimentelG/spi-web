import styled from "styled-components";

export const LabelError = styled.p`
	text-align: center;
	padding: 10px;
	border-radius: 5px;
	color: #FFF;
	background-color: ${({theme}) => theme.colors.input.error};
`;
