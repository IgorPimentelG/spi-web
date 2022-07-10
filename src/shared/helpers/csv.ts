import Papa from "papaparse";

function csvToObject(data: string, model: any) {
	const result = [];
	const separateData = Papa.parse<[]>(data).data;
	const keys = Object.keys(model);

	for(let i = 1; i < separateData.length; i++) {
		const currentLine = separateData[i];

		keys.forEach((key, index) => {
			model[key] = currentLine[index];
		});

		result.push({...model});
	}

	return result;
}

export {
	csvToObject
};
