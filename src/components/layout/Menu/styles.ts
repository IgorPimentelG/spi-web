import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 30%;
	height: 100vh;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Option = styled.p`
	margin: 10px 0;
	font-weight: bold;
	text-transform: uppercase;
	color: ${({theme}) => theme.colors.text.secondary};
`;

