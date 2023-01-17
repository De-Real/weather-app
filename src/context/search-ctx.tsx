import { createContext } from "react";

interface SearchInterface {
	value: string;
	days: number;
	userLocation: string | undefined;
	changeValue: (value: string) => void;
	setDays: (value: number) => void;
	setUserLocationValue: (userLocationCity: string) => void;
}

const searchContext = createContext({} as SearchInterface)

export default searchContext;