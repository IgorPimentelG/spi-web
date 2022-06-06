import styled from "styled-components";

export const Container = styled.button<any>`
	width: 100%;
	margin: 15px 0 0 0;
	padding: 10px 30px;
	border-radius: 5px;
	background-color: ${({theme, isReverse}) =>  isReverse ?
		theme.colors.input.error
		: theme.colors.background.secondary};
`;

export const Label = styled.span`
	font-size: 1rem;
	color: ${({theme}) => theme.colors.text.secondary};
`;
