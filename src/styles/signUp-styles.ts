import { createSlice } from "@reduxjs/toolkit";

import styled from "styled-components";


export const RootContainer = styled.div`
	display: flex;
	padding: 60px;
	justify-content: center;
	align-items: center;
`;

export const Label = styled.p`
	margin-top: 20px;
	text-align: center;
	color: ${({theme}) => theme.colors.text.tertiary};
`;

export const LabelSelect = styled.label`
	margin: 10px 0 5px 0;
	color: ${({theme}) => theme.colors.text.primary};
`;

export const Options = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const Space = styled.span`
	margin: 10px;
`;
