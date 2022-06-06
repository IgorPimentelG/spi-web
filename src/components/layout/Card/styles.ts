import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 50px;
	border-radius: 15px;
	background-color: ${({theme}) => theme.colors.background.primary};
	box-shadow: 5px 5px 40px #EBEBEB;
`;

export const Title = styled.h1`
	font-size: 1.1rem;
	color: ${({theme}) => theme.colors.text.tertiary};
`;
