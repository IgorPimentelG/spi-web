import { Credentials } from "@shared/model/types/user";
import { api } from "../api/axios.config";
import { IAutenticate } from "./../../model/interfaces/responses";

const auth = () => {

	function signIn(credentails: Credentials): Promise<IAutenticate> {

		const data = {
			email: credentails.email,
			senha: credentails.password
		};

		return api.post("/usuario/autenticar", JSON.stringify(data));
	}

	return {
		signIn
	};
};

export default auth;
