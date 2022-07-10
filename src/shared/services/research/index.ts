import { api } from "../api/axios.config";
import { ResearchPayload } from "@shared/model/types/file";

const research = () => {

	function uploadData(data: ResearchPayload) {
		return api.post("/", data);
	}

	return {
		uploadData
	};
};

export default research;
