import styled from "styled-components";

export const RootContainer = styled.main<any>`
	display: ${({visible}) => visible ? "flex" : "none"};
	z-index: 999;
	position: absolute;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(145, 145, 145, 0.7);
`;

export const Card = styled.div`
	display: flex;
	max-width: 300px;
	overflow: hidden;
	flex-direction: column;
	padding: 15px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: #FFF;

`;

export const ContainerOptions = styled.div`
	display: flex;
`;

export const Space = styled.span`
	margin: 5px;
`;

export const Label = styled.p`
	margin-top: -15px;
	text-align: center;
	font-size: 0.9rem;
	width: 90%;
	overflow: hidden;
`;

export const ButtonUpload = styled.label`
	cursor: pointer;
`;
