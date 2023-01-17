
const capitalizeOne = (str: string) => {
	return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

export const capitalize = (str: string) => {

	const temp = str.split(' ');
	if (temp.length > 1) {
		return temp.map((word) => {
			return capitalizeOne(word);
		}).join(' ');
	}

	return capitalizeOne(str);

}