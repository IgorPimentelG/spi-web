import styled from "styled-components";
import { Tab, TabList } from "react-tabs";

export const RootContainer = styled.div`
	display: flex;
`;

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;
`;

export const ContainerResearch = styled.div`
	display: flex;
	flex: 1;
	margin-top: 30px;
`;

export const ContainerHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Status = styled(Tab)`
	border: 1px solid;
	padding: 10px 20px;
	list-style: none;
	border-bottom: none;
	background-color: ${({theme}) => theme.colors.background.primary};
	cursor: pointer;
`;

export const ContainerStatus = styled(TabList)`
	display: flex;
`;

export const ButtonNewResearch = styled.button`
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 5px;
	background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const LabelButton = styled.p`
	text-transform: uppercase;
	margin-left: 5px;
	color: ${({theme}) => theme.colors.text.secondary};
`;
