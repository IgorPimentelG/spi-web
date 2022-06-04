import { createSlice } from "@reduxjs/toolkit";

type UserData = {
	payload: {
		token : string;
		profile: string;
	}
}

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: "",
		profile: "",
		isAuthenticated: false
	},
	reducers: {

		authenticate(_, action: UserData) {
			const { payload } = action;
			return {
				...payload,
				isAuthenticated: true
			};
		},

		logout() {
			return {
				token: "",
				profile: "",
				isAuthenticated: false
			};
		}
	}
});

export default authSlice;
