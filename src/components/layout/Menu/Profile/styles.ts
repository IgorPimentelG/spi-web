import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

export const ContainerImage = styled.div`
	display: flex;
	width: 70px;
	height: 60px;
	border-radius: 50px;
	border: 2px solid #141414;
	z-index: 999;
`;

export const ContainerName = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #141414;
	padding: 15px;
	height: fit-content;
	border-radius: 15px;
	position: relative;
	left: -20px;
	width: 100%;
`;

export const Label = styled.p`
	text-transform: capitalize;
	font-weight: bold;
	color: ${({theme}) => theme.colors.text.primary};
`;
