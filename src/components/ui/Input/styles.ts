/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 10px 0;
`;

export const Field = styled.input<any>`
	padding: 11px 10px;
	border: 1px solid;
	border-radius: 5px;
	background-color: #FFF;

	${({theme, isInvalid}) => `
		border-color: ${isInvalid ? theme.colors.input.error : theme.colors.input.normal};

		&:focus {
			outline-color: ${theme.colors.input.focus};
		}
	`};
`;

export const Label = styled.label`
	margin-bottom: 5px;
	color: ${({theme}) => theme.colors.text.primary};
`;
