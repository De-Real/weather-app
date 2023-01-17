export const getPrecipitation = (snowChance: number, rainChance: number) => {
	return Math.max(snowChance, rainChance);
}