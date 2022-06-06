import styled from "styled-components";

export const RootContainer = styled.div`
	display: flex;
	height: 100vh;
	padding: 30px;
	justify-content: center;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	width: 320px;

	@media(max-width: 410px) {
		width: 100%;
	}
`;

export const ContainerOptions = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 15px;
`;

export const Option = styled.span`
	margin-top: 10px;
	cursor: pointer;

	${({theme}) => `
		color: ${theme.colors.link.primary};

		&:hover {
			color:${theme.colors.text.tertiary};
		}
	`};
`;

