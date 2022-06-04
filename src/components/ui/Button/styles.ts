import styled from "styled-components";

export const Container = styled.button`
	width: 100%;
	margin: 20px 0 15px 0;
	padding: 10px 30px;
	border-radius: 50px;
	background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Label = styled.span`
	font-size: 1rem;
	color: ${({theme}) => theme.colors.text.secondary};
`;
