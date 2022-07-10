import iconv from "iconv-lite";

async function encondingISO(file: File) {
	const arrayBuffer = await file.arrayBuffer();
	return iconv.decode(Buffer.from(arrayBuffer), "ISO-8859-1");
}

export {
	encondingISO
};
