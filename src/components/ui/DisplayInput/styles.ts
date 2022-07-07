import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 10px 0;
`;

export const Field = styled.input`
	padding: 11px 10px;
	text-align: center;
	border: 1px solid #D9D9D9;
	border-radius: 5px;
	background-color: #FFF;
`;

export const Label = styled.label`
	margin-bottom: 5px;
	color: ${({theme}) => theme.colors.text.primary};
`;
