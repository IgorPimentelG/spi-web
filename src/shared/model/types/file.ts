import { ISuapFields, ISistecFields } from "../interfaces/file-fields";

export type ResearchPayload = {
	data: {
		suap: ISuapFields,
		sistec: ISistecFields
	}
}
