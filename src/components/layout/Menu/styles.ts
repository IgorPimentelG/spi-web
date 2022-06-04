import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 25%;
	height: 100vh;
	background-color: ${({theme}) => theme.colors.background.tertiary};
`;

export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Option = styled.p<any>`
	margin: 10px 0;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	color: ${({theme, highlighted}) => highlighted ? "#D93644" : theme.colors.text.secondary};
`;

export const ContainerLogo = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	justify-content: flex-end;
`;

export const Label = styled.h5`
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 1px;
	color: ${({theme}) => theme.colors.text.tertiary};
`;


