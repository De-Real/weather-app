import { createContext } from "react";

interface HistoryInterface {
	historyRequests: string[];
	addHistoryRequest: (request: string) => void;
}

const historyContext = createContext({} as HistoryInterface)

export default historyContext;