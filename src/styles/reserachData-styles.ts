import styled from "styled-components";

export const RootContainer = styled.main`
	display: flex;
`;

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 30px;
`;

export const Header = styled.div`
	display: flex;
	margin-bottom: 15px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ContainerUpload = styled.div`
	margin-top: 20px;
`;

export const SubTitle = styled.h5`
	color: ${({theme}) => theme.colors.text.tertiary};
`;

export const Form = styled.form`
	width: 50%;
`;

export const Grid = styled.div`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: repeat(2, auto);
`;

export const LabelButtonUpload = styled.span`
	text-transform: uppercase;
	margin-left: 5px;
	font-weight: bold;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const ButtonUpload = styled.button<any>`
	padding: 10px;
	border-radius: 5px;
	margin-top: 5px;
	align-items: center;
	justify-content: center;
	background-color: ${({theme, reverse}) => reverse ? "#525252" : theme.colors.background.secondary};
`;

export const Space = styled.div`
	margin: 5px;
`;

export const ContainerButton = styled.div`
	display: flex;
	align-items: center;
`;
