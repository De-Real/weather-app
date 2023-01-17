import southDir from '../assets/north.png';
import southEastDir from '../assets/north-east.png';
import southWestDir from '../assets/north-west.png';
import northDir from '../assets/south.png';
import northWestDir from '../assets/south-west.png';
import northEastDir from '../assets/south-east.png';
import eastDir from '../assets/west.png';
import westDir from '../assets/east.png'


export const determineWindDirection = (degree: number) => {
	const ARROWS: string[] = [northDir, northEastDir, eastDir, southEastDir, southDir, southWestDir, westDir, northWestDir];
	const coefficient = Math.round(degree / 45);
	if (coefficient === 8) {
		return ARROWS[0];
	}
	return ARROWS[coefficient];
}