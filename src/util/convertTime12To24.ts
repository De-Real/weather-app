
// console.log(convertTime12to24('01:02 PM'));
// console.log(convertTime12to24('05:06 PM'));
// console.log(convertTime12to24('12:00 PM'));
// console.log(convertTime12to24('12:00 AM'));

export const convertTime12to24 = (time12h: string) => {

	const [time, modifier] = time12h.split(' ');

	let [hours, minutes] = time.split(':');

	if (hours === '12') {
		hours = '00';
	}

	if (modifier === 'PM') {
		hours = (parseInt(hours, 10) + 12).toString();
	}

	return `${hours}:${minutes}`;
}