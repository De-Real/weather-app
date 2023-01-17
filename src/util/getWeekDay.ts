export const getWeekDay = (date: Date) => {
	const weekDay = date.getDay();

	switch (weekDay) {
		case 0: return 'Sunday';
		case 1: return 'Monday';
		case 2: return 'Tuersday';
		case 3: return 'Wednesday';
		case 4: return 'Thursday';
		case 5: return 'Friday';
		case 6: return 'Saturday';
	}
}