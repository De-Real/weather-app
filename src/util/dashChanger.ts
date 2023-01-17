export const removeDash = (str: string) => {
	return str.split('-').join(' ');
}

export const addDash = (str: string) => {
	return str.split(' ').join('-').toLowerCase();
}